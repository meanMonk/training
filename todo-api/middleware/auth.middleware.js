const UserModel = require('../models/user.model');
const crypto = require('crypto');
const appConfig = require('../app.config');
const jwt = require('jsonwebtoken')

function AuthMiddleware() {
    const isAdminUser = async (req,res,next) => {
        try {
            let email = req.body.email;
            let resource = await UserModel.findOne({
                where: {
                    email: email
                }
            });
            if(!!resource) {
                if(resource.access == 1) {
                    next();
                } else {
                    res.status(401).send({
                        message: 'You dont have an access'
                    })
                }
            } else {
                res.status(400).send({
                    message: 'No resource found'
                })
            }

        } catch(error) {
            console.log(error);
            res.status(500).send({message: `Internal server errror`})
        }
    }

    const isValidPassword = async (req,res,next) => {
        try {
            let email = req.body.email;
            let user = await UserModel.findOne({
                where: {
                    email: email
                }
            });
            if(!!user) {
                let userPass = user.password.split('$')
                let salt = userPass[0];
                let hash = crypto.createHmac('sha512',salt)
                    .update(req.body.password)
                    .digest("base64");

                if(hash === userPass[1]) {
                    req.body = {
                        userId: user.id,
                        email: user.email,
                        access: user.access,
                        provider: 'email',
                        name: user.firstname + ' ' + user.lastname,
                    };
                    next();
                } else {
                    res.status(404).send({
                        message: 'Invalid password!'
                    })
                }

            } else {
                res.status(400).send({
                    message: 'Invalid email or no user found!'
                })
            }

        } catch(error) {
            console.log(error);
            res.status(500).send({message: `Internal server errror`})
        }
    }

    const validJWTNeeded = (req,res,next) => {
        if(req.headers['authorization']) {
            try {
                let authorization = req.headers['authorization'].split(' ');
                if(authorization[0] !== 'Bearer') {
                    return res.status(401).send();
                } else {
                    req.jwt = jwt.verify(authorization[1],appConfig.jwtSecret);
                    return next();
                }
            } catch(err) {
                console.log(err);
                return res.status(403).send();
            }
        } else {
            return res.status(401).send();
        }
    };

    const minimumPermissionLevelRequired = (required_permission_level) => {
        return (req,res,next) => {
            try {
                let access_level = parseInt(req.jwt.access);
                if(access_level == required_permission_level) {
                    return next();
                } else {
                    return res.status(403).send({
                        message: 'Do not have permission'
                    });
                }
            } catch(error) {
                console.log(error);
                return res.status(403).send();
            }
        };
    };

    return {
        isAdminUser,
        isValidPassword,
        validJWTNeeded,
        minimumPermissionLevelRequired
    }
}



module.exports = AuthMiddleware()

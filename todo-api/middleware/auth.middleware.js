const UserModel = require('../models/user.model');
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
                        permissionLevel: user.access,
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
                    message: 'Invalid email or no resource found!'
                })
            }

        } catch(error) {
            console.log(error);
            res.status(500).send({message: `Internal server errror`})
        }
    }

    return {
        isAdminUser,
        isValidPassword
    }
}



module.exports = AuthMiddleware()

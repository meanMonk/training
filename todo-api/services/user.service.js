const UsersModel = require('../models/user.model');
const crypto = require('crypto')
// Service for resources
function resourceService() {
    /// load all resources
    let loadAlluser = async (req,res,next) => {
        try {
            let userList = await UsersModel.findAll();
            if(userList.length > 0) {
                res.status(200).send({
                    userList
                })
            } else {
                res.status(404).send({
                    message: "No user found!"
                })
            }

        } catch(error) {
            console.log(error);
            res.status(500).send({
                message: 'Internal server error!'
            })
        }
    }

    let createNewUser = async (req,res,next) => {
        try {

            if(req.body.email && req.body.password
                && req.body.firstname && req.body.lastname
            ) {
                //  create salt.
                let salt = crypto.randomBytes(16).toString('base64');
                let hash = crypto.createHmac('sha512',salt)
                    .update(req.body.password)
                    .digest("base64");
                req.body.password = salt + "$" + hash;

                let result = await UsersModel.create({
                    email: req.body.email,
                    password: req.body.password,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    access: 0,
                });
                if(!!result) {
                    res.status(200).send({
                        message: 'Registerd successful!'
                    })
                } else {
                    res.status(500).send({
                        message: "Internal server error!"
                    })
                }
            } else {
                res.status(400).send({
                    message: "Invalid body"
                })
            }
        } catch(error) {
            console.log(error);
            res.status(500).send({
                message: 'Internal server error!'
            })
        }
    }
    let loginUser = async (req,res,next) => {
        try {
            let result = await UsersModel.findOne({
                where: {
                    email: req.body.email,
                    password: req.body.password
                }
            });
            if(result) {
                res.status(200).send({result})
            } else {
                res.status(404).send({
                    message: 'No user found or Incorrect email password!'
                })
            }
        } catch(error) {
            res.status(500).send({
                message: 'Internal server error!'
            })
        }
    }

    // const generateToken = async (req,res,next) => {
    //     try {
    //         let refreshId = req.body.userId + jwtSecret;
    //         let salt = crypto.randomBytes(16).toString('base64');
    //         let hash = crypto.createHmac('sha512',salt).update(refreshId).digest("base64");
    //         req.body.refreshKey = salt;
    //         let token = jwt.sign(req.body,jwtSecret);
    //         let b = Buffer.from(hash);
    //         let refresh_token = b.toString('base64');
    //         res.status(201).send({accessToken: token,refreshToken: refresh_token})
    //     } catch(error) {
    //         res.status(500).send({
    //             message: 'Internal server error!'
    //         })
    //     }
    // }

    const updateAccess = async (req,res,next) => {
        try {
            let user = await UsersModel.findOne({
                where: {
                    email: req.body.email
                }
            });
            if(user) {
                await user.update({access: 1})
                res.status(200).send({message: 'access udpated!'})
            } else {
                res.status(404).send({
                    message: 'No user found or Incorrect email password!'
                })
            }
        } catch(error) {
            res.status(500).send({
                message: 'Internal server error!'
            })
        }
    }

    return {
        createNewUser,
        loginUser,
        loadAlluser,
        updateAccess,
        // generateToken
    }
}


module.exports = resourceService();
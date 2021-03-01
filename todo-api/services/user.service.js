const ResourceModel = require('../models/resource.model');
const UsersModel = require('../models/user.model');
// Service for resources
function resourceService() {
    /// load all resources

    let createNewUser = () => {
        try {
            let res = UsersModel.create({
                email: req.body.email,
                password: req.body.password,
                firstname: req.body.firstname,
                lastname: req.body.last
            });
            if(res) {
                res.status(200).send({
                    token: 'user_token',
                    refreshToke: 'refresh_token'
                })
            } else {
                res.status(401).send({
                    message: "Invalid user name and password"
                })
            }
        } catch(error) {
            res.status(500).sendt('Internal server error!')
        }
    }
    let Authenticateuser = () => {
        try {
            let res = UsersModel.findOne({
                where: {
                    email: req.body.email,
                    password: req.body.password
                }
            });
            if(res) {
                res.status(200).send({
                    token: 'user_token',
                    refreshToke: 'refresh_token'
                })
            } else {
                res.status(401).send({
                    message: "Invalid user name and password"
                })
            }
        } catch(error) {
            res.status(500).sendt('Internal server error!')
        }
    }

    return {
        createNewUser,
        Authenticateuser
    }
}


module.exports = resourceService();
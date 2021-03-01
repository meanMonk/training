const ResourceModel = require('../models/resource.model');
function resourceMiddleware() {
    const isDuplicateResource = async (req,res,next) => {
        try {
            let name = req.body.name;
            let resource = await ResourceModel.findOne({
                where: {
                    name: name
                }
            });
            if(!resource) {
                next();
            } else {
                res.status(409).send({
                    message: 'Duplicate resouce.'
                })
            }

        } catch(error) {
            console.log(error);
            res.status(500).send({message: `Internal server errro`})
        }
    }

    const isResourceExist = async (req,res,next) => {
        try {
            let id = req.params.id;
            let resource = await ResourceModel.findOne({
                where: {
                    id: id
                }
            });
            if(!!resource) {
                next();
            } else {
                res.status(400).send({
                    message: 'Not found'
                })
            }

        } catch(error) {
            console.log(error);
            res.status(500).send({message: `Internal server errro`})
        }
    }
    return {
        isDuplicateResource,
        isResourceExist
    }
}



module.exports = resourceMiddleware()

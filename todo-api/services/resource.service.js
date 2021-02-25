const ResourceModel = require('../models/resource.model');
// Service for resources
function resourceService() {
    /// load all resources
    const loadAllResources = async (req,res) => {
        try {
            let resources = await ResourceModel.findAll();
            if(!!resources && resources.length > 0) {
                res.status(200).send(resources)
            } else {
                res.status(404).send({
                    message: 'No resource found!'
                })
            }
        } catch(error) {
            console.log(error);
            res.status(500).send('internal server error!');
        }
    }
    /// load single resource
    const loadResource = async (req,res) => {
        try {
            const resource = await ResourceModel.findOne({where: {id: req.params.id}})
            if(resource) {
                res.status(200).send(resource);
            } else {
                res.status(404).send('Not Found!')
            }
        } catch(error) {
            res.status(500).send('Internal server error!')
        }
    }
    /// create new resource
    const createResource = async (req,res) => {
        try {
            await ResourceModel.create({name: req.body.name});
            res.status(201).send('Resource created successfully!');
        } catch(error) {
            console.log('error');
            res.status(500).send('Internal server error!')
        }
    }
    /// update resource
    const updateResource = async (req,res) => {
        try {
            if(!req.body.name && !req.params.id) {
                res.status(400).send('Bad Request')
                return;
            }
            const resource = await ResourceModel.findOne({where: {id: req.params.id}});
            if(resource) {
                await resource.update({name: req.body.name});
                res.status(203).send('Resource updated successfully!')
            } else {
                res.status(404).send('Not Found!')
            }
        } catch(error) {
            console.log('error');
            res.status(500).send('Internal server error!')
        }
    }

    // remove resource
    const deleteResource = async (req,res) => {
        try {
            if(!req.params.id) {
                res.status(400).send('Bad Request')
                return;
            }
            const resource = await ResourceModel.destroy({where: {id: req.params.id}});
            console.log(resource);
            if(resource) {
                res.status(200).send('Resource remove successfully!')
            } else {
                res.status(404).send('Not Found!')
            }
        } catch(error) {
            console.log('error');
            res.status(500).send('Internal server error!')
        }
    }


    return {
        loadAllResources,
        loadResource,
        createResource,
        updateResource,
        deleteResource
    }
}


module.exports = resourceService();
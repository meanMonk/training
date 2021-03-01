
const express = require('express');
const ResourceModel = require('../models/resource.model');
let resourceService = require('../services/resource.service');
let resourceMiddleware = require('../middleware/resource.middleware');

function resourceRouteModule() {

    let router = express.Router()
    /// TO load all resources
    router.get('/resources',resourceService.loadAllResources)
    /// TO create new resource
    router.post('/resource',[
        resourceMiddleware.isDuplicateResource,
        resourceService.createResource])
    /// TO get single resource
    router.get('/resources/:id',resourceService.loadResource)
    /// TO update single resource
    router.put('/resources/:id',resourceService.updateResource)
    /// TO remove single resource
    router.delete('/resources/:id',[
        resourceMiddleware.isResourceExist,
        resourceService.deleteResource
    ]);

    /* 
    router.route('/resources/:id')
        .get(resourceService.loadResource)
        .put(resourceService.updateResource)
        .delete([
            resourceMiddleware.isResourceExist,
            resourceService.deleteResource
        ])
    */
    return router;
}

module.exports = resourceRouteModule;



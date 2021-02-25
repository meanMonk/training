
const express = require('express');
let resourceService = require('../services/resource.service');

function resourceRouteModule() {

    let router = express.Router()
    router.get('/resources',resourceService.loadAllResources)

    router.post('/resource',resourceService.createResource)

    router.route('/resources/:id')
        .get(resourceService.loadResource)
        .put(resourceService.updateResource)
        .delete(resourceService.deleteResource);

    return router;
}

module.exports = resourceRouteModule;



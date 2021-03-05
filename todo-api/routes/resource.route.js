
const express = require('express');
let resourceService = require('../services/resource.service');
let resourceMiddleware = require('../middleware/resource.middleware');
let authMiddleware = require('../middleware/auth.middleware');
const PERMISSION = {
    ADMIN: 1,
    NORMAL: 0
}
function resourceRouteModule() {

    let router = express.Router()
    /// TO load all resources
    router.get('/resources',[
        authMiddleware.validJWTNeeded,
        authMiddleware.minimumPermissionLevelRequired(PERMISSION.ADMIN),
        resourceService.loadAllResources])
    /// TO create new resource
    router.post('/resource',[
        authMiddleware.validJWTNeeded,
        authMiddleware.minimumPermissionLevelRequired(PERMISSION.ADMIN),
        resourceMiddleware.isDuplicateResource,
        resourceService.createResource])
    /// TO get single resource
    router.get('/resources/:id',[
        authMiddleware.validJWTNeeded,
        authMiddleware.minimumPermissionLevelRequired(PERMISSION.ADMIN),
        resourceService.loadResource])
    /// TO update single resource
    router.put('/resources/:id',[
        authMiddleware.validJWTNeeded,
        authMiddleware.minimumPermissionLevelRequired(PERMISSION.ADMIN),
        resourceService.updateResource])
    /// TO remove single resource
    router.delete('/resources/:id',[
        authMiddleware.validJWTNeeded,
        authMiddleware.minimumPermissionLevelRequired(PERMISSION.ADMIN),
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



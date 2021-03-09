
const express = require('express');
let groceryService = require('../services/grocery.service');
let authMiddleware = require('../middleware/auth.middleware');
const PERMISSION = {
    ADMIN: 1,
    NORMAL: 0
}
function groceryRouterModule() {

    let router = express.Router()
    /// TO load all product from grocery keyspace of cassandra
    router.get('/products',[
        authMiddleware.validJWTNeeded,
        authMiddleware.minimumPermissionLevelRequired(PERMISSION.ADMIN),
        groceryService.loadAllDailyProduct])

    /// TO get single resource
    router.get('/products/:id',[
        authMiddleware.validJWTNeeded,
        authMiddleware.minimumPermissionLevelRequired(PERMISSION.ADMIN),
        groceryService.loadDailyProduct])

    return router;
}

module.exports = groceryRouterModule;



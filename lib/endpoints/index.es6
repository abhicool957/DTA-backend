"use strict";

import express from "express";
import {UserService} from "./Services/UserService";
import {MongoDbService} from "../MongoDB/MongoDBService";
import {getEntitlementInstance} from "../middleware_services/mwcheckEntitlement";
import {getActivityDocumentInstance} from "../middleware_services/mwActivityDocument";

let router = express.Router(),
    {NODE_ENV} = process.env,
    nodeEnv = NODE_ENV || "local",
    config = Object.freeze(require("../../config/" + nodeEnv)),
    dbService = new MongoDbService({config}),
    userRoute = router.route("/user/:id"),
    userService = new UserService({dbService}),
    entitlementInstance = getEntitlementInstance(),
    activityDocumentInstance = getActivityDocumentInstance();

userRoute
    .get(entitlementInstance.checkUserId.bind(entitlementInstance))
    .get(userService.getUserData.bind(userService));

userRoute
    .post(entitlementInstance.checkUserId.bind(entitlementInstance))
    .post(activityDocumentInstance.activityDocBuilder.bind(activityDocumentInstance))
    .post(userService.insertUserData.bind(userService));

export {router};

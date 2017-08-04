"use strict";

import express from "express";
import {UserService} from "./Services/UserService";
import {MongoDbService} from "../MongoDB/MongoDBService";
import {getEntitlementInstance} from "../middleware_services/mwcheckEntitlement";

let router = express.Router(),
    {NODE_ENV} = process.env,
    nodeEnv = NODE_ENV || "local",
    config = Object.freeze(require("../../config/" + nodeEnv)),
    dbService = new MongoDbService({config}),
    userRoute = router.route("/user/:id"),
    userService = new UserService({dbService}),
    entitlementInstance = getEntitlementInstance();

userRoute
    .get(entitlementInstance.checkUserId.bind(entitlementInstance))
    .get(userService.getUserData.bind(userService));

export {router};

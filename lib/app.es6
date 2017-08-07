"use strict";

import express from "express";
import bodyParser from "body-parser";
import domain from "express-domain-middleware";
import {router} from "./endpoints/index";
import mwErrorHandler from "./middleware_services/mwErrorHandler";

let {NODE_ENV} = process.env,
    nodeEnv = NODE_ENV || "local",
    config = Object.freeze(require("../config/" + nodeEnv)),
    app = express(),
    urlPrefix = config.urlPrefix,
    environmentVariables = require("../config/environmentVariables");

// Sets the relevant config app-wise
app.use(domain);
app.set("port", config.http.port);
app.use(bodyParser.json());

app.use(`${urlPrefix}`, router);
app.use(mwErrorHandler);

app.listen(app.get("port"), function () {
    console.log("Server has started and is listening on port: " + app.get("port"));
});

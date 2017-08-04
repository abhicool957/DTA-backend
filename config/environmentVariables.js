"use strict";

// eslint disable no-var

let environmentVariables = {
  "TSMS_MONGO_CONNECTION_STRING": process.env.TSMS_MONGO_CONNECTION_STRING || "mongodb://10.1.13.28:27017/tsms-dev"
};

module.exports = environmentVariables;

// eslint enable no-var

"use strict";

import ApiError from "../util/apiError";

let protectedEntitlementInstance;

class MwcheckEntitlement {
    constructor() {
    }

    checkUserId(req, res, next) {
        console.log("===checking parameter===>>>>");

        if (req.params.hasOwnProperty("id") && req.params.id !== " ") {
            return next();
        }

        return next(
            new ApiError("user id not provied", "", "", 401)
        );
    }

}

export function getEntitlementInstance(...args) {
    protectedEntitlementInstance = protectedEntitlementInstance || new MwcheckEntitlement(...args);
    return protectedEntitlementInstance;
}

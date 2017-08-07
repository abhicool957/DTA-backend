"use strict";

let protectedActivityDocInstance;

class MwActivityDocument {

    constructor() {

    }

    activityDocBuilder(req, res, next) {

        req.activityDoc = {};
        req.activityDoc.uid = req.params.id;

        if (req.body.hasOwnProperty("date") && typeof req.body.date === "number") {
            req.activityDoc.date = req.body.date;
        }

        if (req.body.hasOwnProperty("duration") && typeof req.body.duration === "string") {
            req.activityDoc.duration = req.body.duration;
        }

        if (req.body.hasOwnProperty("activity") && typeof req.body.activity === "string") {
            req.activityDoc.activity = req.body.activity;
        }

        if (req.body.hasOwnProperty("activityType") && typeof req.body.activityType === "string") {
            req.activityDoc.activityType = req.body.activityType;
        }

        if (req.body.hasOwnProperty("status") && typeof req.body.status === "string") {
            req.activityDoc.status = req.body.status;
        }

        if (req.body.hasOwnProperty("description") && typeof req.body.description === "string") {
            req.activityDoc.description = req.body.description;
        }

        req.activityDoc.createdDate = new Date().getTime();
        req.activityDoc.updateddate = new Date().getTime();

        console.log("===Activity Doc going to save===>>>>", req.activityDoc);

        next();
    }

}

export function getActivityDocumentInstance() {
   protectedActivityDocInstance = protectedActivityDocInstance || new MwActivityDocument();
   return protectedActivityDocInstance;
}

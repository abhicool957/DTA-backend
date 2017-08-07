"use strict";
import {GenericRepository} from "../generic/GenericRepository";

export class UserService {
    constructor({dbService}) {
        this.repo_ = new GenericRepository({dbService});
    }

    getUserData(req, res) {
        console.log("==========Get: user/id===============", req.params.id);
        this.repo_
            .getUserDataById(req.params.id)
            .then(result => {
                if (Array.isArray(result) && result.length > 0) {
                    return res.status(200).send(result);
                } else {
                    return res.status(404).send("user not found");
                }
            }).done();
    }

    insertUserData(req, res) {
        console.log("==========Post: user/id===============", req.params.id);
        this.repo_
            .insertActivity(req.activityDoc)
            .then(result => {
                res.status(200).send(result);
            });
    }

    updateActivity(req, res) {
        console.log("==========Put: user/id===============", req.params.id);
        this.repo_
            .updateActivity(query, document)
            .then(result => {
                res.status(200).send(result);
            });
    }
}

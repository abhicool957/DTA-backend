"use strict";
import {GenericRepository} from "../generic/GenericRepository";

export class UserService {
    constructor({dbService}) {
        this.repo_ = new GenericRepository({dbService});
    }

    getUserData(req, res) {
        console.log("==========routed hit===============", req.params.id);
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
}

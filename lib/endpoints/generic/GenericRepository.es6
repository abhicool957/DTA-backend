"use strict";

export class GenericRepository {
    constructor({dbService}) {
        this.dbService_ = dbService;
    }

    getUserDataById(id) {
        let collection = "Activity",
            query = {
                "body": {
                    "uid": id
                }
            };

        return this.dbService_
            .read({collection, query})
            .then(res => {
                console.log("==========res======", res);
                return res;
            })
            .catch(err => {
                console.log("GenericRepository // getUserDataById()//==>> error while getting data",
                    err);
                throw err;
            });
    }
}

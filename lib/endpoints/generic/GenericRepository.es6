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
                console.log("\"GenericRepository // getUserDataById()//==>> res", res);
                return res;
            })
            .catch(err => {
                console.log("GenericRepository // getUserDataById()//==>> error while getting data",
                    err);
                throw err;
            });
    }

    insertActivity(document) {
        let collection = "Activity";

        return this.dbService_
            .insert({collection, document})
            .then(result => {
                console.log("GenericRepository // insertData()//==>>", result);
            })
            .catch(err => {
                console.log("GenericRepository // insertData()//==>> error while inserting data",
                    err);
                throw err;
            });
    }

    updateActivity(query, document) {
        let collection = "Activity";

        return this.dbService_
            .update({collection, query, document})
            .then(result => {
                console.log("GenericRepository // updateActivity()//==>>", result);
            })
            .catch(err => {
                console.log("GenericRepository // updateActivity()//==>> error while updating data",
                    err);
                throw err;
            });

    }
}

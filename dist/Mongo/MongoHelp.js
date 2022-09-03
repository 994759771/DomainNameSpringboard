"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
class MongoHelp {
    constructor() {
        this.client = new mongodb_1.MongoClient(global.dbUrl);
    }
    Connect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.client.connect();
            this.db = this.client.db(global.dbName);
        });
    }
    FindeOne(collName, filter) {
        var _a;
        return (_a = this.db) === null || _a === void 0 ? void 0 : _a.collection(collName).findOne(filter);
    }
    Update(collName, filter, update) {
        var _a;
        return (_a = this.db) === null || _a === void 0 ? void 0 : _a.collection(collName).updateOne(filter, update);
    }
}
exports.default = MongoHelp;

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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const TrafficLights_1 = __importDefault(require("../TrafficLights"));
class MySqlHelp {
    constructor() {
        this.light = new TrafficLights_1.default();
        this.con = mysql_1.default.createConnection({
            host: 'remotemysql.com',
            user: 'KHEXpU3iLx',
            password: 'X3V9GW8OOv',
            database: 'KHEXpU3iLx'
        });
    }
    Connect() {
        return __awaiter(this, void 0, void 0, function* () {
            this.light.Red();
            this.con.connect((err) => {
                if (err) {
                    console.log('数据库连接错误' + err);
                }
                this.light.Blue();
            });
            yield this.light.Wait();
        });
    }
    query(sql) {
        return __awaiter(this, void 0, void 0, function* () {
            var r;
            this.light.Red();
            this.con.query(sql, (err, res) => {
                if (err) {
                    console.log('查询错误' + err);
                }
                r = res;
                this.light.Blue();
            });
            yield this.light.Wait();
            return r;
        });
    }
}
exports.default = MySqlHelp;

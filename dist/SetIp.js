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
const MySqlHelp_1 = __importDefault(require("./db/MySqlHelp"));
const ResBase_1 = __importDefault(require("./mode/ResBase"));
function default_1(ctx, next) {
    return __awaiter(this, void 0, void 0, function* () {
        var p = ctx.query;
        var re = new ResBase_1.default;
        var ms = new MySqlHelp_1.default();
        yield ms.Connect();
        var resCode = (yield ms.query('SELECT code FROM gip'))[0].code;
        //验证码不正确
        if (resCode != p.code) {
            re.code = 101;
            ctx.body = re;
            return;
        }
        var sql = 'UPDATE gip set addr=\'' + p.addr + '\',port=' + p.port;
        yield ms.query(sql);
        re.code = 0;
        ctx.body = re;
    });
}
exports.default = default_1;

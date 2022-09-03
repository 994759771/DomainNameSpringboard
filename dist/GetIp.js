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
class IPRes extends ResBase_1.default {
    constructor() {
        super(...arguments);
        this.addr = '';
        this.port = 0;
    }
}
function default_1(ctx, next) {
    return __awaiter(this, void 0, void 0, function* () {
        var mh = new MySqlHelp_1.default();
        yield mh.Connect();
        var res = yield mh.query('select * from gip');
        var r = new IPRes;
        r.code = 0;
        r.addr = res[0].addr;
        r.port = res[0].port;
        ctx.body = r;
    });
}
exports.default = default_1;

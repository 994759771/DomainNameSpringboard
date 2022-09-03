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
function default_1(ctx, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var ms = new MySqlHelp_1.default();
            yield ms.Connect();
            var res = yield ms.query('SELECT addr,port FROM gip');
            var newUrl = 'http://' + res[0].addr + ':' + res[0].port;
            console.log(newUrl);
            ctx.redirect(newUrl);
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.default = default_1;

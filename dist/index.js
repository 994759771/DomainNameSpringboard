"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("@koa/router"));
const koa_1 = __importDefault(require("koa"));
const router = new router_1.default();
const app = new koa_1.default();
global.dbUrl = 'mongodb+srv://tts:Dmw0592way@cluster0.0nsbyo7.mongodb.net/?retryWrites=true&w=majority';
global.dbName = 'TTS';
const GetIp_1 = __importDefault(require("./GetIp"));
const SetIp_1 = __importDefault(require("./SetIp"));
const SetCode_1 = __importDefault(require("./SetCode"));
const home_1 = __importDefault(require("./home"));
router.get('/', home_1.default)
    .get('/GetIp', GetIp_1.default)
    .get('/SetIp', SetIp_1.default)
    .get('/SetCode', SetCode_1.default);
app.use(router.routes())
    .use(router.allowedMethods());
app.listen(3008, () => {
    console.log('3008项目启动');
});

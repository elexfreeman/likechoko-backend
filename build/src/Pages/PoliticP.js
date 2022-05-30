"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoliticController = void 0;
const express = __importStar(require("express"));
const Router_1 = require("./Router");
const ResponseSys_1 = require("@a-a-game-studio/aa-core/lib/System/ResponseSys");
const MainRequest_1 = require("@a-a-game-studio/aa-core/lib/System/MainRequest");
const router = express.Router();
exports.PoliticController = router;
router.get(Router_1.PoliticR.sUrl, 
// eslint-disable-next-line
(0, ResponseSys_1.faResponseStatic)(Router_1.PoliticR.sTpl, MainRequest_1.TError.PageNotFound, async (req, res, error) => {
    return {};
}));
//# sourceMappingURL=PoliticP.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// esse <> ja chama a tipagem 
const main = async () => {
    const res = await axios_1.default.get('https://swapi.dev/people/1');
    console.log(res.data);
};
main();

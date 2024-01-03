"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const input = (0, fs_1.readFileSync)(path_1.default.resolve(__dirname, './input.txt')).toString();
function partOne(input) {
    let sum = 0;
    input.split(/\r?\n/).forEach(line => {
        let first = line.match(/(?=.*\d)(\d)/g);
        let last = line.match(/(\d)(?!.*\d)/g);
        if (first && last) {
            sum += parseInt((first[0] + last[0]));
        }
    });
    console.log('part one total', sum);
}
partOne(input);
function partTwo(input) {
    let sum = 0;
    const wordMap = {
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9
    };
    const matches = '1|2|3|4|5|6|7|8|9|one|two|three|four|five|six|seven|eight|nine';
    input.split(/\r?\n/).forEach(line => {
        let first = line.match(/(?=.*((?:\d*\.)?\d+))((?:\d*\.)?\d)/g);
        let last = line.match(/((?:\d*\.)?\d)(?!.*((?:\d*\.)?\d+))/g);
        if (first && last) {
            sum += parseInt((first[0] + last[0]));
        }
    });
    console.log('part one total', sum);
}

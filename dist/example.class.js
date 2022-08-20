"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnException = exports.returnArray = exports.returnFalse = exports.returnTrue = exports.returnString = exports.returnUndefined = exports.returnNull = exports.return10 = void 0;
const return10 = () => {
    return 10;
};
exports.return10 = return10;
const returnNull = () => {
    return null;
};
exports.returnNull = returnNull;
const returnUndefined = () => {
    return undefined;
};
exports.returnUndefined = returnUndefined;
const returnString = () => {
    return "Hello world";
};
exports.returnString = returnString;
const returnTrue = () => {
    return true;
};
exports.returnTrue = returnTrue;
const returnFalse = () => {
    return false;
};
exports.returnFalse = returnFalse;
const returnArray = () => {
    return ["Joao", "Maria", "Jonas", "Miguel"];
};
exports.returnArray = returnArray;
const returnException = () => {
    throw new Error("Aconteceu alguma coisa");
};
exports.returnException = returnException;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
const world = 'world1';
function hello(who = world) {
    return `Hello ${who}! `;
}
exports.hello = hello;

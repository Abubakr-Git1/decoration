"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function LogAccessor(target, name, descriptor) {
    console.log(`Accessor ${name}`);
}
class fruit_basket {
    constructor() {
        this._fruits = 436;
    }
    get fruits() {
        return this._fruits;
    }
    set fruits(value) {
        this._fruits = value;
    }
}
__decorate([
    LogAccessor,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], fruit_basket.prototype, "fruits", null);

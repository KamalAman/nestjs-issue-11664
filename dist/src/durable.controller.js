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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DurableController = void 0;
const common_1 = require("@nestjs/common");
const durable_service_1 = require("./durable.service");
let DurableController = class DurableController {
    constructor(durableService) {
        this.durableService = durableService;
    }
    greeting() {
        return this.durableService.greeting();
    }
    echo() {
        return this.durableService.requestPayload;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], DurableController.prototype, "greeting", null);
__decorate([
    (0, common_1.Get)('echo'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DurableController.prototype, "echo", null);
DurableController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [durable_service_1.DurableService])
], DurableController);
exports.DurableController = DurableController;
//# sourceMappingURL=durable.controller.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FiltersPipe = (function () {
    function FiltersPipe() {
    }
    FiltersPipe.prototype.transform = function (contacts, searchText) {
        if (searchText == null)
            return contacts;
        return contacts.filter(function (category) {
            var name = category.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
            var username = category.username.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
            var email = category.email.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
            if (name) {
                return name;
            }
            else if (username) {
                return username;
            }
            else if (email) {
                return email;
            }
            else {
                return category.number.toString().indexOf(searchText.toString()) > -1;
            }
        });
    };
    return FiltersPipe;
}());
FiltersPipe = __decorate([
    core_1.Pipe({ name: 'filters' })
], FiltersPipe);
exports.FiltersPipe = FiltersPipe;
//# sourceMappingURL=filters.pipe.js.map
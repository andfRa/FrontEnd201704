/**
* Animals
*/
var Animals = (function () {
    function Animals() {
        this._animals = ['Karu', 'Kass', 'Hunt'];
        this._cacheDOM();
        this._bindEvents();
        this._render();
    }
    Animals.prototype._cacheDOM = function () {
        this._template = Helper.getHTMLTemplate('animal.htm');
        this._animalsModule = document.getElementById('animalsModule');
        this._submitButton = this._animalsModule.getElementsByClassName('submitButton').item(0);
        this._nameInput = this._animalsModule.getElementsByTagName('input').item(0);
        this._animalList = this._animalsModule.getElementsByTagName('ul').item(0);
    };
    Animals.prototype._bindEvents = function () {
        this._submitButton.addEventListener('click', this.addAnimal.bind(this));
    };
    Animals.prototype._render = function () {
        var _this = this;
        var animalsHTML = "";
        this._animals.forEach(function (animalName) {
            var animalHTML = Helper.parseHTML(_this._template, '{{name}}', animalName);
            animalsHTML += animalHTML;
        });
        this._animalList.innerHTML = animalsHTML;
    };
    Animals.prototype.showAnimals = function () {
        console.log(this._animals);
    };
    Animals.prototype.addAnimal = function (type) {
        var animalType = (typeof type === 'string')
            ? type : this._nameInput.value;
        this._animals.push(animalType);
        this._render();
    };
    Animals.prototype.removeAnimal = function (index) {
        if (index < 0 || index >= this._animals.length) {
            console.error('Index ' + index + ' out of bounds');
        }
        else {
            this._animals.splice(index, 1);
        }
        this._render();
    };
    return Animals;
}());
var Helper;
(function (Helper) {
    function getHTMLTemplate(file) {
        var partialHTML = '';
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    partialHTML = this.responseText;
                }
                else {
                    console.error('Request failed for: ' + file);
                }
            }
        };
        request.open('GET', file, false);
        request.send();
        return partialHTML;
    }
    Helper.getHTMLTemplate = getHTMLTemplate;
    function parseHTML(target, mustache, content) {
        return target.replace(mustache, content);
    }
    Helper.parseHTML = parseHTML;
})(Helper || (Helper = {}));
/// <reference path='animals.ts' />
/// <reference path='helper.ts' />
var animals = new Animals();
//# sourceMappingURL=app.js.map
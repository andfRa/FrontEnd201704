/// <reference path='highlighter.ts' />
"use strict";
var Animals = (function () {
    function Animals() {
        this._animals = ['Karu', 'Kass', 'Hunt'];
        this._cacheDOM();
        //this._bindEvents();
        //wthis._render();
    }
    Animals.prototype._cacheDOM = function () {
        //this._template = Helper.getHTMLTemplate('animal.htm');
        //this._animalsModule = document.getElementById('animalsModule');
        //this._submitButton = this._animalsModule.getElementsByClassName('submitButton').item(0) as HTMLButtonElement;
        //this._nameInput = this._animalsModule.getElementsByTagName('input').item(0) as HTMLInputElement;
        //this._animalList = this._animalsModule.getElementsByTagName('ul').item(0) as HTMLUListElement;
    };
    return Animals;
}());
$(document).ready(function () {
    highlighter.init();
});
var highlighter = (function () {
    var insertTag = function (tag) {
        var selection = window.getSelection();
        if (selection.rangeCount !== 0 && !selection.isCollapsed) {
            var range = window.getSelection().getRangeAt(0);
            var selectionContents = range.extractContents();
            var element = document.createElement(tag);
            element.appendChild(selectionContents);
            range.insertNode(element);
            return true;
        }
        else {
            return false;
        }
    };
    var removeTag = function () {
        var selection = window.getSelection();
        if (selection.rangeCount !== 0 && !selection.isCollapsed) {
            var range = window.getSelection().getRangeAt(0);
            console.log(range.commonAncestorContainer);
            var selectionContents = range.extractContents();
            range.insertNode(document.createTextNode(selectionContents.textContent));
            //node.parentElement.removeChild(node);
            return true;
        }
        else {
            return false;
        }
    };
    var updateButtons = function () {
        var selection = window.getSelection();
        if (selection.rangeCount !== 0 && !selection.isCollapsed) {
            $('#ins-button,#del-button,#mark-button,#clear-button')
                .removeClass('disabled');
        }
        else {
            $('#ins-button,#del-button,#mark-button,#clear-button')
                .addClass('disabled');
        }
    };
    return {
        init: function () {
            $('#ins-button').click(function () {
                insertTag('ins');
            });
            $('#del-button').click(function () {
                insertTag('del');
            });
            $('#mark-button').click(function () {
                insertTag('mark');
            });
            $('#clear-button').click(function () {
                removeTag();
            });
            document.addEventListener("selectionchange", function () {
                updateButtons();
            });
            updateButtons();
        }
    };
})();
//# sourceMappingURL=app.js.map
/* predicates */
function isNotNull (obj) {
    return obj !== null && obj !== undefined;
}

function isEmpty (value) {
    if (value.length === undefined) {
        return Object.keys(value).length === 0;
    } else {
        return value.length === 0;
    }
}

function isNotEmpty (value) {
    return !isEmpty(value);
}

function isNotNullOrEmpty (value) {
    return isNotNull(value) && isNotEmpty(value);
}

function isPositive (num) {
    return num > 0;
}

function isNegative (num) {
    return num < 0;
}

function isSingular (obj) {
    return obj.length === 1;
}

function isPlural (obj) {
    return obj.length > 1;
}

function isEven (num) {
    return num % 2 === 0;
}

function isOdd (num) {
    return num % 2 === 0;
}

function isTrue (b) {
    return b === true;
}

function isFalse (b) {
    return b === false;
}

// http://stackoverflow.com/q/1353684
function isValidDate (d) {
    if (Object.prototype.toString.call(d) !== "[object Date]") {
        return false;
    }
    return !isNaN(d.getTime());
}

function isEscapeKeyEvent (e) {
    var escapeKey = 27;
    return (e.which || e.keyCode) === escapeKey;
}

function isEnterKeyEvent (e) {
    var escapeKey = 13;
    return (e.which || e.keyCode) === escapeKey;
}

function isNodeList (obj) {
    if (!obj) return false;
    return typeof obj.length === 'number' 
        && typeof obj.item !== 'undefined'
        && typeof obj.nextNode === 'function'
        && typeof obj.reset === 'function';
}

function isString (value) {
    return typeof value === 'string';
}

function hasLeadingForwardSlash (str) {
    return str && str.charAt(0) === '/';
}

function hasTrailingForwardSlash (str) {
    return str && str.charAt(str.length - 1) === '/';
}

function isLinkCurrentRoute (link) {
    return link.href === window.location.href;
}

/* maps */
function getType (value) {
    return typeof value;
}

function first (arrayOrStr) {
    return arrayOrStr[0];
}

function second (arrayOrStr) {
    return arrayOrStr[1];
}

function last (arrayOrStr) {
    return arrayOrStr[arrayOrStr.length - 1];
}

function increment (num) {
    return num + 1;
}

function decrement (num) {
    return num - 1;
}

function trim (str) {
    return str ? str.trim() : '';
}

function capitalize (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function query (selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector));
}

function toList (obj) {
    return isNodeList(obj) ? [].slice.call(obj) : [obj];
}

function toHtmlId (id) {
    return id.charAt(0) === '#' ? id : '#' + id;
}

function toHtmlClass (className) {
    return className.charAt(0) === '.' ? className : '#' + className;
}

function toHexString (num) {
    return num.toString(16);
}

function toHexNumber (hexStr) {
    return parseInt(hexStr, 16);
}

function toAsciiCode (c) {
    return c.charCodeAt(0);
}

function toObject (json) {
    return JSON.parse(json);
}

function toPrettyJson (obj) {
    return JSON.stringify(obj, null, 2);
}

function toUniqueArray (array) {
    var result = [];
    array.forEach(function (item) {
        result.indexOf(item) === -1 && result.push(item);
    });
    return result;
}

// http://stackoverflow.com/a/7124052
function toEscapedHtml (str) {
    return String(str)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
}

// http://stackoverflow.com/a/7124052
function toUnescapedHtml (value) {
    return String(value)
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&');
}

function toQueryString (obj) {
    var result = Object.getOwnPropertyNames(obj)
                    .filter(function (name) { return typeof obj[name] !== 'function'; })
                    .map(function (name) { return name + "=" + obj[name]; })
                    .join('&');
    return result;
}

function appendTrailingSlash (url) {
    if (url.substr(-1) !== '/') url += '/';
    return url;
}

function newObject () {
    return {};
}

function generateRandomNumber (min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function random (array) {
    var index = Math.floor(Math.random() * (array.length - 1));
    return array[index];
}

function clone (array) {
    return array.slice();
}

function group (array, size) {
    var groups = [];
    array.forEach(function (value) {
        if (!last(groups) || last(groups).length === size) {
            groups.push([value]);
        } else {
            last(groups).push(value);
        }
    });
    return groups;
}

// get('a.b.c')({a: {b: {c: 7}}}); // -> 7
function getIn (path) {
    return function (object) {
        path.split('.').forEach(function (prop) {
            object = object[prop];
        });
        return object;
    };
}

/* reducers */
function or (a, b) {
    return a || b;
}

function and (a, b) {
    return a && b;
}

function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function getHtmlInputValue (e) {
    return e.target.value;
}

function joinByNewLine (array) {
    return array.join('\n');
}

function joinByCommaSpace (array) {
    return array.join(', ');
}

function getQueryStringRaw () {
    var search = window.location.search;
    return search && search[0] === '?' ? search.substring(1) : '';
}

function getQueryStringPairs () {
    var raw = getQueryStringRaw();
    return raw.split('&');
}

function getQueryStringValue (key) {
    var pairs = getQueryStringPairs();
    pairs.map(function (pair) {
        pair = pair.split('&');
        if (pair[0] === key) return pair[1];
    });
    return '';
}

function getSelectedDropdownOption (dropdown) {
    return dropdown.options[dropdown.selectedIndex];
}

/* actions */
function addClass (className) {
    return function (element) {
        element.classList.add(className);
    }
}

function removeClass (className) {
    return function (element) {
        element.classList.remove(className);
    };
}

function toggleClass (className) {
    return function (element) {
        element.classList.toggle(className);
    };
}

function setAttributes (node, attributes) {
    Object.getOwnPropertyNames(attributes).forEach(function (prop) {
       node.setAttribute(prop, attributes[prop]);
    });
    return node;
}

function createNode (type, attributes) {
    var node = document.createElement(type);
    setAttributes(attributes);
    return node;
}

function focusFirstFormField () {
    var field = document.querySelector('input, select');
    if (!field) return;
    field.focus();
}

function ifNotNull (func, obj) {
    return obj ? func(obj) : obj;
}

function ifNull (func, obj) {
    return obj ? obj : func(obj);
}

function shuffleInPlace (array) {
    return array.sort(function () {
        return 0.5 - Math.random();
    });
}

function clearDropdownOptions (dropdown) {
    dropdown.options.length = 0;
    return dropdown;
}

function removeElement (element)  {
    element.parentElement.removeChild(element);
}

function redirect (url) {
    window.location.href = url;
}

function enableEs6 () {
    require('babel-core/register');
}

function enableJsx () {
    require('node-jsx').install();
}

function noop () {
    
}
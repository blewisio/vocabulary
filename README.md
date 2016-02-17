# vocabulary.js (beta)

What makes the Wu Tang Clan so special? It's a combination of their style, creativity, intelligence, and especially their vocabulary. The amazing depth of word choice makes them the ultimate in expressiveness.

vocabulary.js is an attempt at a similar elegance. It's a library that turns common and ubiquitous Javascript logic into tiny, re-usable functions. Don't bother memorizing implementations or searching Stack Overflow - just learn the function names.

\# of functions: **104**

### How is this different than lodash or Underscore?

If lodash and Underscore are utility belts, then vocabulary.js is like a team of Batmans wearing utility belts.

## Usage

Using ES6 destructuring and module syntax:

```javascript
const { focusFirstFormField, redirect, isEscapeKeyEvent } = require('vocabulary');
```

If you don't want the whole library, feel free to copy and paste the functions from the source!

## Giant List of Functions

```javascript
isNull
isNotNull
isEmpty
isNotEmpty
isNullOrEmpty
isNotNullOrEmpty
isPositive
isNegative
isZero
isSingular
isPlural
isEven
isOdd
isTrue
isFalse
isValidDate
isEscapeKeyEvent
isEnterKeyEvent
isNodeList
isString
isObject
isFunction
isArray
hasLeadingForwardSlash
hasTrailingForwardSlash
isLinkCurrentRoute
toList
toHtmlId
toHtmlClass
toCamelCase
toMoneyString
toHexString
toHexNumber
toAsciiCode
toObject
toPrettyJson
toUniqueArray
toEscapedHtml
toUnescapedHtml
toQueryString
first
second
last
increment
decrement
trim
capitalize
query
appendTrailingSlash
newObject
generateRandomNumber
random
min
max
clone
group
getIn
removePhrase
add
subtract
and
or
orFalse
orZero
orEmptyString
orEmptyArray
orEmptyObject
joinBySpace
joinByNewLine
joinByCommaSpace
splitBySpace
splitByNewLine
splitByComma
splitByCommaSpace
getType
getButtons
getDropdowns
getInputs
getHtmlInputValue
getElementName
getQueryStringRaw
getQueryStringPairs
getQueryStringValue
getSelectedDropdownOption
addClass
removeClass
toggleClass
setAttributes
createNode
focusFirstFormField
ifNotNull
ifNull
throwIfNull
tryCatch
shuffleInPlace
clearDropdownOptions
removeProperty
removeElement
disableElement
enableElement
redirect
debug
enableEs6
enableJsx
noop
```

## Browser Support

Most functions should work in IE 9 or above. No attempt was made to make the library work in IE 8 or below.

## Tests

Run `node tests`.

## Contributing

Pull requests welcome! Please add unit tests to `tests.js` for any new functions.

## Dependencies

None, unless you use one of the handful of functions that have external depedencies: `enableEs6` and `enableJsx`

## Versions

*Beta* - missing: API documentation, examples, consistent naming of functions, organization, and structure (maybe beta is an optimistic word)

## License

[ISC](https://en.wikipedia.org/wiki/ISC_license)
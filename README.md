# vocabulary.js (beta)

What makes the Wu Tang Clan so special? It's a combination of their style, creativity, intelligence, and especially their vocabulary. The amazing depth of word choice makes them the ultimate in expressiveness.

vocabulary.js is an attempt at a similar elegance. It's a library that turns common and ubiquitous Javascript logic into tiny, re-usable functions. Don't bother memorizing implementations or searching Stack Overflow - just learn the function names.

Number of functions: **83**

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
isNotNull
isEmpty
isNotEmpty
isNotNullOrEmpty
isPositive
isNegative
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
hasLeadingForwardSlash
hasTrailingForwardSlash
isLinkCurrentRoute
getType
first
second
last
increment
decrement
trim
capitalize
query
toList
toHtmlId
toHtmlClass
toCamelCase
toHexString
toHexNumber
toAsciiCode
toObject
toPrettyJson
toUniqueArray
toEscapedHtml
toUnescapedHtml
toQueryString
appendTrailingSlash
newObject
generateRandomNumber
random
clone
group
getIn
removePhrase
or
and
add
subtract
orFalse
orZero
orEmptyString
orEmptyArray
orEmptyObject
getHtmlInputValue
getElementName
joinByNewLine
joinByCommaSpace
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
shuffleInPlace
clearDropdownOptions
removeElement
redirect
enableEs6
enableJsx
noop
```

## Browser Support

Most functions should work in IE 9 or above. No attempt was made to make IE 8 or below work.

## Dependencies

None, unless you use one of the handful of functions that have external depedencies: `enableEs6` and `enableJsx`

## Versions

*Beta* - missing: tests, API documentation, consistent naming of functions, organization, and structure (maybe beta is an optimistic word)

## Contributing

Pull requests welcome!

## License

[ISC](https://en.wikipedia.org/wiki/ISC_license)
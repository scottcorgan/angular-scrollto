angular-scrollto
================

Angular directive to scroll to element by selector.

## Install

Bower

```
bower install angular-scrollto --save
```

NPM

```
npm install angular-scrollto --save
```

## Usage

Inject module

```js
angular.module('myApp', ['scrollto']);
```

Use as directive

```html
<a href="" scroll-to="#element" offset="0" container="window">Go to element</a>

<div id="element">
  You will scroll to me
</div>
```

## Options

#### offset
Default value: `0`

Number of pixels to offset from the top.

#### duration
Default value: `150`

Length of time, in milliseconds, the animation will take.

#### container
Default value: `window`

The container element to scroll.
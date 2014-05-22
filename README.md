angular-scrollto
================

Angular directive to scroll to element by selector.

Requires jQuery. Soon, there will be a non-jQuery version as well.

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
<a href="" scroll-to="#element" offset="0" container="html, body">Go to element</a>

<div id="element">
  You will scroll to me
</div>
```

## Options

#### scroll-to
**Requred**

Element to scoll to when current element is clicked.

#### offset
Default value: `0`

Number of pixels to offset from the top.

#### duration
Default value: `150`

Length of time, in milliseconds, the animation will take.

#### container
Default value: `html, body`

The container element to scroll.

### [UPDATED 2014-05-21] Included hook allow the scrolling action to be triggered from a controller 

Added a `triggerScroll(delay)` function that will trigger the scroll action after an optional delay (in milliseconds)




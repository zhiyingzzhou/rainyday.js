# rainyday.js

A simple script for simulating raindrops falling on a glass surface.

For demos and more information see the [project page](http://mubaidr.github.io/rainyday.js/).

## How to use

```js
var engine = new RainyDay({
    image: element,         // [Image Id or Image element itself, Id of Element having background Image or Element itself]
                            // This value is required
    parentElement: someDiv, // Element to be used as a parent for the canvas
                            // If not provided assuming the 'body' element
    crop: [0, 0, 50, 60],   // Coordinates if only a part of the image should be used
                            // If not provided entire image will be used
    blur: 10,               // Defines blur due to rain effect
                            // Assuming 10 if not provided
                            // Use 0 value to disable the blur
    opacity: 1              // Opacity of rain drops
                            // Assuming 1 if not provided
});
```

rainyday.js
===========
A simple script for simulating raindrops falling on a glass surface.

For demos and more information see the [project page](http://maroslaw.github.io/rainyday.js/)

You might also consider subscribing to my [subreddit](http://www.reddit.com/r/rainydayjs/)

**How to use:**

var engine = new RainyDay({

				element: 'background',		//*ID of image element*
				blur: 0.5,		//*Defines blur due to rain effect*
				opacity: 1,		//*Opacity of rain drops*
				fps: 30,	//*Frame rate per second*
				speed: 30,		//*Speed of rain drops*
				presets: [{ min: 3, base: 3, quan: 0.88 }, { min: 5, base: 5, quan: 0.9 }, { min: 6, base: 2, quan: 1 }]
			
});
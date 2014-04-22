### Sauce-vid

Just gets the video url to a saucelab job. If you use the CLI version, 
it gets copied to the clipboard

```
//Command line usage:
SAUCE_USER=me SAUCE_KEY=your-sauce-key sauce-video testid

//Module usage (set the env variables above)
var sauce = require("sauce-video");
sauce(jobId, function(err, video_url) {
  // do smth
});
```

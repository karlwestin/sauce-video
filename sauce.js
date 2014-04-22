var Sauce = require('saucelabs');
require("copy-paste");

var account = new Sauce({
  username: process.env.SAUCE_USER,
  password: process.env.SAUCE_KEY
});

module.exports = function findVideoUrl(jobId, cb) {
  account.showJob(jobId, function(err, data) {
    if(err) {
      if(cb) {
        return cb(err);
      }
      throw err;
    }

    if(cb) {
      return cb(null, data.video_url);
    }

    copy(data.video_url);
    console.log("copied url to clipboard \n", data.video_url);
  });
};

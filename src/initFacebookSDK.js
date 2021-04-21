// Find your App ID in the App Dashboard on Facebook for Developers.
const FACEBOOK_APP_ID = "923926215318420";

export default function initFacebookSDK() {
  return new Promise((resolve) => {
    // Wait for the Facebook SDK to initialize before starting the React app.
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: FACEBOOK_APP_ID,
        cookie: true,
        xfbml: true,
        version: "v10.0",
      });

      resolve();
    };

    // Load the Facebook SDK script.
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  });
}

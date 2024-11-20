// Global variable to keep track of the secondary window
let secondaryWindow = null;

function openWebsite(url) {
  if (secondaryWindow && !secondaryWindow.closed) {
    // Update the URL of the already opened window
    secondaryWindow.location.href = url;
  } else {
    // Open a new window if one isn't already open
    secondaryWindow = window.open(
      url,
      "SecondaryWindow",
      "width=1920,height=1080"
    );
  }
}

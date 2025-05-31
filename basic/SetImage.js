/**
 * if user don't set image for profile after 5 seconds show message for set image
 */

const image = "";

setTimeout(
  (img) => {
    if (!img) {
      console.log("Please Select your Image !!!");
    }
  },
  5000,
  image
);

import React from "react";

const Image = () => (
  <img
    alt="should be cropped by container overflow:hidden style"
    style={styles.image}
    src="https://cdn.pixabay.com/photo/2019/11/29/14/18/gent-4661419_960_720.jpg"
  />
);

const styles = {
  image: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)"
  }
};

export default Image;

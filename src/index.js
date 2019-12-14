import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Button, Card } from "antd";
import debounce from "lodash/debounce";

import TooltipPopover from "./TooltipPopover";
import Image from "./Image";
import Portal from "./Portal";

const btnRef = React.createRef();
const App = () => {
  const [isOn, setOn] = useState(false); // toggles dropdown visibility
  const [coords, setCoords] = useState({}); // takes current button coordinates

  const updateTooltipCoords = button => {
    const rect = button.getBoundingClientRect();
    setCoords({
      left: rect.x + rect.width / 2, // add half the width of the button for centering
      top: rect.y + window.scrollY // add scrollY offset, as soon as getBountingClientRect takes on screen coords
    });
  };

  const updateCoords = debounce(
    () => isOn && updateTooltipCoords(btnRef.current.buttonNode),
    100
  );

  useEffect(() => {
    window.addEventListener("resize", updateCoords);
    return () => window.removeEventListener("resize", updateCoords);
  }, [isOn]);

  return (
    <Card style={{ ...styles.card, overflow: "hidden" }}>
      <Image />
      <Button
        ref={btnRef}
        style={styles.button}
        onClick={e => {
          updateTooltipCoords(e.target);
          setOn(!isOn);
        }}
      >
        Click me
      </Button>
      {isOn && (
        <Portal>
          <TooltipPopover coords={coords}>
            <div>
              Awesome content that is never cut off by its parent container!
            </div>
          </TooltipPopover>
        </Portal>
      )}
    </Card>
  );
};

const styles = {
  card: { padding: 50, maxWidth: 800, margin: "0 auto 300px" },
  button: { display: "flex", marginLeft: "auto" }
};

ReactDOM.render(<App />, document.getElementById("react-root"));

import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Button, Card } from "antd";

import TooltipPopover from "./TooltipPopover";
import Image from "./Image";
import Portal from "./Portal";

const App = () => {
  const [isOn, setOn] = useState(false); // toggles dropdown visibility
  const [coords, setCoords] = useState({}); // takes current button coordinates

  return (
    <Card style={{ ...styles.card, overflow: "hidden" }}>
      <Button
        onClick={e => {
          const rect = e.target.getBoundingClientRect();
          setCoords({
            left: rect.x + rect.width / 2, // add half the width of the button for centering
            top: rect.y + window.scrollY // add scrollY offset, as soon as getBountingClientRect takes on screen coords
          });
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
      <Image/>
    </Card>
  );
};

const styles = {
    card: { padding: 50, margin: "100px 50px" }
};

ReactDOM.render(<App />, document.getElementById("react-root"));

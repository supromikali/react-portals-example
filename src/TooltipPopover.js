import React, { useEffect } from "react";
import debounce from "lodash/debounce";

const TooltipPopover = ({ children, coords, updateTooltipCoords }) => {
  const updateCoords = debounce(updateTooltipCoords, 100);

  useEffect(() => {
    window.addEventListener("resize", updateCoords);
    return () => window.removeEventListener("resize", updateCoords);
  }, []);

  return (
    <div
      style={{ ...styles.popover, ...coords }}
      className="ant-popover ant-popover-placement-top"
    >
      <div className="ant-popover-content">
        <div className="ant-popover-arrow" />
        <div className="ant-popover-inner" role="tooltip">
          <div>
            <div className="ant-popover-title">Title</div>
            <div className="ant-popover-inner-content">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  popover: {
    position: "absolute",
    width: 200,
    transform: "translate(-100px, -100%)"
  }
};

export default TooltipPopover;

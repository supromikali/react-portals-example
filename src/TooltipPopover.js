import React from "react";

const TooltipPopover = ({ children, coords }) => (
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

const styles = {
    popover: {
        position: "absolute",
        width: 200,
        transform: "translate(-50%, -100%)"
    }
};

export default TooltipPopover;

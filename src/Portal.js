import React from "react";
import {createPortal} from "react-dom";

class Portal extends React.Component {
    constructor(props) {
        super(props);
        this.mount = document.getElementById("portal-root");
        this.el = document.createElement("div");
    }

    componentDidMount() {
        this.mount.appendChild(this.el);
    }

    componentWillUnmount() {
        this.mount.removeChild(this.el);
    }

    render() {
        return createPortal(this.props.children, this.el);
    }
}

export default Portal;

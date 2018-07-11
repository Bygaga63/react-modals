import React, {Component} from "react";
import "../css/Modal.css";
import ReactDOM from "react-dom";

class Modal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };

        this.onBackgroundClick = this.onBackgroundClick.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
    }


    container = document.createElement("div");
    componentDidMount() {
        document.body.appendChild(this.container);
        window.addEventListener("keyup", this.onKeyUp);
    }
    componentWillUnmount() {
        document.body.removeChild(this.container);
        window.removeEventListener("keyup", this.onKeyUp);
    }

    onKeyUp(e) {
        e.stopPropagation();
        if (e.keyCode === 27) { // ESCAPE
            this.hide();
        }
    }
    onBackgroundClick(e) {
        this.hide();
    }
    show = () => {
        this.setState({show: true})
    };

    hide = () => {
        this.setState({show: false})
    }

    render() {
        return this.state.show ? (
            ReactDOM.createPortal( <div>
                <div className="modal-background" onClick={() => this.onBackgroundClick()}/>
                <div role="dialog" className="modal-dialog">
                    <header>
                        <span>{this.props.header}</span>
                        <button
                            onClick={() => this.hide()}
                            type="button"
                            aria-label="close"
                        >
                            CLOSE
                        </button>
                    </header>
                    <div className="modal-content">{this.props.children}</div>
                </div>
            </div>, this.container)
        ) : null;
    }
}

export default Modal;
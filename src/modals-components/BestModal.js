import React, {Component} from "react";
import Modal from "../small-components/Modal";


export class BestModal extends Component {

    constructor(props) {
        super(props);
        this.modal = React.createRef();
    }

    show = () => {
        this.modal.current.show();
    };

    render() {
        return (
            <Modal ref={this.modal}
                   header="Best Portal Modal">
                <h1>Some Best Portal Content</h1>
            </Modal>)
    }
}
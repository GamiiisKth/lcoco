import { Modal, Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import { Reaction } from "../../../../../../client/api";

class Integrity extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleHide = this.handleHide.bind(this);
    let show = window.sessionStorage.getItem("modalstate");
    show = show === "true";
    this.state = { show };
  }

  handleHide() {
    this.setState({ show: false });
    window.sessionStorage.setItem("modalstate", false);
  }
  render() {
    return (
      <div className="modal-container" style={{ height: 200 }}>
        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              VI VÄRNAR OM DIN INTEGRITET
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Vi har förtydligat hur vi behandlar personuppgifter och cookies.
            <Link to={Reaction.Router.pathFor("privacy")} >
              <h6 style={{ color: "#007bff" }}>Läs mer</h6>
            </Link>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>OK</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default Integrity;

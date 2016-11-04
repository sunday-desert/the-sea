import React from 'react';
import { Col } from 'react-bootstrap';
import FishImage from './FishImage';
import ModalContents from './ModalContents';
import Modal from 'react-modal';

class Fish extends React.Component {
  constructor() {
    super();
    // this.handleClick = this.handleClick.bind(this);
    this.state = {
      open: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      open: true
    });
  }

  closeModal() {

    this.setState({
      open: false
    });
  }

  render() {
    const { name } = this.props;

    return (
      <Col xs={12} sm={6} md={3}
        onClick={this.openModal}>
        <FishImage
          name={name}
        />
        <Modal isOpen={this.state.open} onRequestClose={this.closeModal}>
          <ModalContents name={name} />
          <button className="btn btn-info" onClick={this.closeModal}>Close</button>
        </Modal>
      </Col>
    )
  }
}

export default Fish;
import React from 'react';
import { Modal, Form, Button, FormGroup } from 'react-bootstrap';

class BookFormModal extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            title: e.target.title.value || this.props.book.title, 
            description: e.target.description.value || this.props.book.description,
            status: e.target.status.checked || this.props.book.status,
            _id: this.props.book._id,
        }
        this.props.update(data);
        this.props.handleClose();
    }
    
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Form className="m-2" onSubmit={this.handleSubmit}>
                <Form.Label>Update Book</Form.Label>
                <FormGroup controlId="title">
                    <Form.Control type="text" placeholder="Book title"></Form.Control>
                </FormGroup>
                <FormGroup controlId="description">
                    <Form.Control type="text" placeholder="Book description"></Form.Control>
                </FormGroup>
                <FormGroup controlId="status">
                    <Form.Label>Status</Form.Label>
                    <Form.Check type="checkbox"></Form.Check>
                </FormGroup>
                <Button className="btn-secondary m-2" type="submit">Update Book</Button>
            </Form>
            </Modal>
        );
    }
}

export default BookFormModal;

import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

function EditModal({ openModal, todo, updateTodo }) {
  const [isOpen, setIsOpen] = useState(openModal);
  const [editedTodo, setUpdatedTodo] = useState(todo);
  function hideModel(open) {
    setIsOpen(open);
  }
  function closeModel(open) {
    setIsOpen(open);
  }
  useEffect(() => {
    setIsOpen(openModal);
    setUpdatedTodo(todo);
  }, [openModal, todo]);
  return (
    <>
      <Modal show={isOpen}>
        <Modal.Header>Edit Todo</Modal.Header>
        <Modal.Body>
          <Form.Label htmlFor="inputtodo">Description</Form.Label>
          <Form.Control
            type="text"
            id="inputtodo"
            value={editedTodo?.description}
            onChange={(e) => {
              let newTodo = { ...todo };
              newTodo.description = e.target.value;
              setUpdatedTodo(newTodo);
              // setUpdatedTodo({...editedTodo, description: e.target.value})
              // console.log(editedTodo);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={hideModel.bind(this, !isOpen)}
            className="btn btn-danger"
          >
            Cancel
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              updateTodo(editedTodo);
              closeModel(false);
            }}
          >
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default React.memo(EditModal);

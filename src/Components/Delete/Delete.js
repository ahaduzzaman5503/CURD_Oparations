import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';
import "./Delete.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Delete = () => {
    const [users, setUser] = useContext(UserContext);
    const {id} = useParams();

    const deleteUser = (id) => {
        const user = users.filter((user) => user.id != id);
        setUser(user);
    }

    return (
        <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Delete User?</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Are you sure?</p>
      </Modal.Body>
        <Link to="/">
      <Modal.Footer>
        <Button variant="secondary">Cancal</Button>
        <Button  onClick={() => deleteUser(id)} variant="primary">Delete</Button>
      </Modal.Footer>
      </Link>
    </Modal.Dialog>
    );
};

export default Delete;
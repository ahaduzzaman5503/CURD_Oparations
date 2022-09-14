import React, { useContext, useState } from 'react';
import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';
import "./Create.css";

const Create = () => {
    const [users, setUser] = useContext(UserContext);

    const [id, setId] = useState("");
    const updateId = (e) => {
        setId(e.target.value)
        console.log(id)
    };

    const [name, setName] = useState("");
    const updateName = (e) => {
        setName(e.target.value)
        console.log(name)
    };

    const [position, setPosition] = useState("");
    const updatePosition = (e) => {
        setPosition(e.target.value)
        console.log(position)
    };

    const [salary, setSalary] = useState("");
    const updateSalary = (e) => {
        setSalary(e.target.value)
    };

    const addUser = (e) => {
        e.preventDefault();
        setUser([...users, {id:id, name:name, position:position, salary:salary }])
    }

    return (
        <div className='container mt-3'>
            <Form onSubmit={addUser}>
            <FormGroup>
                <FormLabel>ID</FormLabel>
                <FormControl 
                type='text'
                name='id'
                value={id}
                onChange={updateId}
                placeholder="Enter ID"
                >
                </FormControl>
            </FormGroup>

            <FormGroup>
                <FormLabel>Name</FormLabel>
                <FormControl 
                type='text'
                name='name'
                value={name}
                onChange={updateName}
                placeholder='Enter your Name'
                >
                </FormControl>
            </FormGroup>

            <FormGroup>
                <FormLabel>Position</FormLabel>
                <FormControl
                type='text'
                name='position'
                value={position}
                onChange={updatePosition}
                placeholder='Enter Your Position'
                ></FormControl>
            </FormGroup>

            <FormGroup>
                <FormLabel>Salary</FormLabel>
                <FormControl
               type="text"
               name="salary"
               value={salary}
               onChange={updateSalary}
               placeholder="Enter Salary"
                > 
                </FormControl>
            </FormGroup>

            

           
            <Button className="btn btn-primary mt-3 p-2" type="submit" value="Submit">
                 Create
            </Button>
            <Link to="/">
                 <Button type="button" className="btn btn-success mt-3 ms-3 p-2">Back Home</Button>
            </Link>
            </Form>
        </div>
    );
};

export default Create;
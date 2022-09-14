import React, { useContext, useState } from 'react';
import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';
import "./Edit.css";

const Edit = () => {
    const [users, setUser] = useContext(UserContext);
    const {id} = useParams();
    const user = users.filter((user) => user.id == id);

    const [name, setName] = useState(user[0].name);
    const [position, setPosition] = useState(user[0].position);
    const [salary, setSalary] = useState(user[0].salary);

    const editName = (e) => {
        setName(e.target.value)
        const edited_name = name;
        user[0].name = edited_name;
    };

    const editPosition = (e) => {
        setPosition(e.target.value);
        const edited_position = position;
        user[0].position = edited_position;
      };
    
      const editSalary = (e) => {
        setSalary(e.target.value);
        const edited_salary = salary;
        user[0].salary = edited_salary;
      };

    const editUser = (e) => {
        e.preventDefault();
        setUser([...users]);
      };
    return (
        <div className='container mt-3'>
            <Form>
                <FormGroup>
                    <FormLabel> 
                        <h1>ID No: {user[0].id} </h1>
                    </FormLabel>
                </FormGroup>

                <FormGroup>
                    <FormLabel> 
                       Name
                    </FormLabel>
                    <FormControl
                    type='text'
                    name='name'
                    value={name}
                    onChange={editName}
                    placeholder={user[0].name}
                    ></FormControl>
                </FormGroup>

                <FormGroup>
                    <FormLabel> 
                       Position
                    </FormLabel>
                    <FormControl
                    type='text'
                    name='position'
                    value={position}
                    onChange={editPosition}
                    placeholder={user[0].position}
                    ></FormControl>
                </FormGroup>
                <FormGroup>
                    <FormLabel> 
                       Salary
                    </FormLabel>
                    <FormControl
                    type='text'
                    name='salary'
                    value={salary}
                    onChange={editSalary}
                    placeholder={user[0].salary}
                    ></FormControl>
                </FormGroup>

                <Link to="/">
                <Button onSubmit={()=>editUser} variant="primary" className='mt-2 p-2' type="submit">
                    Edit User
                </Button>
                <Button className="action_btn ms-2 p-2 mt-2" variant="info">
                    Back to Home
                </Button>
                </Link>
            </Form>
        </div>
    );
};

export default Edit;
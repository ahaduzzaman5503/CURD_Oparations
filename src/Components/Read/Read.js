import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';
import "./Read.css";

const Read = () => {
    const [users, setUser] = useContext(UserContext);
    const {id} = useParams();

    const user = users.filter((user) => user.id == id);
       return (
        <div className='main_div container'>
           <h1>ID: {user[0].id} </h1>
           <h1>Name: {user[0].name} </h1>
           <h1>Position: {user[0].position} </h1>
           <h1>Salary: {user[0].Salary} </h1>
          <Link to="/"> <Button>Back to home</Button></Link>
        </div>
    );
};

export default Read;
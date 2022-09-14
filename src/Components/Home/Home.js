import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';
import "./Home.css";

const Home = () => {
    const [users, setUser] = useContext(UserContext);
     return (
        <div className='container mt-4'>
             <Link to="/create">
            <button type="button" className="btn btn-primary ">Create User</button>
            </Link>
            <table className="table border border-5 mt-2">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Position</th>
                    <th scope="col">Salary</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                        <tr>
                        <th scope="row">{user.id}</th>
                        <td>{user.name}</td>
                        <td>{user.position}</td>
                        <td>{user.salary}</td>
                        <td>
                        <Link to={"/read/"+user.id}>
                            <button type="button" className="btn action_btn btn-primary">Read</button>
                        </Link>
                        
                        <Link  to={"/edit/"+user.id}>
                        <button type="button" className="btn action_btn btn-info">Edit</button>
                        </Link>
                            <Link to={"/delete/"+user.id}>
                            <button type="button" className="btn action_btn btn-success">Delete</button>
                            </Link>
                        </td>
                        </tr>
                        ))}
                   
                </tbody>
            </table>
        </div>
    );
};

export default Home;
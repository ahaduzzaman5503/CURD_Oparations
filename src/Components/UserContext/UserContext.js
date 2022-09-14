import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [users, setUser] = useState([
        {id: 1, name: "Salman", position: "Front end Dev", salary: 25000},
        {id: 2, name: "Shovo", position: "Data Scientist", salary: 15000},
        {id: 3, name: "Mahadi", position: "Full Stack Dev", salary: 45000}
    ]);
    
    return(
        <UserContext.Provider value={[users, setUser]}>
            {props.children}
        </UserContext.Provider>
    )
}
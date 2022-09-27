import { useEffect, useState } from "react";
import UserCard from "./UserCard";

function AllUsers({currentUser, setCurrentUser}){


    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        fetch("/users")
            .then(r => r.json())
            .then(u => {
                setAllUsers(u)
            })

    }, []);
console.log(allUsers)
    const usersArray = allUsers.map((userObj) => {
       return( <UserCard key = {userObj.id} user = {userObj} currentUser={currentUser} setCurrentUser={setCurrentUser} /> )
    })

    return(
        <div>{usersArray}</div>
    )
}

export default AllUsers
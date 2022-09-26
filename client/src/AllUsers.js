import { useEffect, useState } from "react";

function AllUsers(){


    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        fetch("/users")
            .then(r => r.json())
            .then(users => {
                setAllUsers(users)
            })

    }, []);

    console.log(allUsers)
    return(
        <div>All Users Here</div>
    )
}

export default AllUsers
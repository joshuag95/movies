import { useState } from "react"
import { useNavigate } from "react-router-dom"
import FollowCard from "./FollowCard"

export default function Profile({ user, setCurrentUser }) {

    const [areYouSure, setAreYouSure] = useState(false)
    const [edit, setEdit] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [showDetails, setShowDetails] = useState(false)

    const handleEdit = () => {
        setEdit((edit) => !edit)
    }

    const changeDetails = (e) => {
        e.preventDefault()
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                'Content-type': "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                username
            }),
        })
            .then(res => res.json())
            .then(user => setCurrentUser(user))
        e.target.reset()
        handleEdit()
    }

    const handleShowDetails = () => {
        setShowDetails((showDetails) => !showDetails)
    }
    const handleAreYouSure = () => {
        setAreYouSure((areYouSure) => !areYouSure)

    }
    console.log(user.id)
    const navigate = useNavigate()

    function handleDelete() {

        fetch(`/users/${user.id}`, {
            method: "DELETE",

        })

        navigate("/")

    }

    const followerArray = user.followers

    const follower = followerArray.map((f) => {
        return (
            <FollowCard name={f.name} username={f.username} key = {f.id} />
        )
    })


    const followed = user.followings

    console.log(user.followers)

    return (
        <div>
            <button onClick={handleShowDetails}>Profile details</button>
            {showDetails ?
                <div>
                    <h1>Profile</h1>
                    <button onClick={handleEdit}>Edit Details</button>
                    {!edit ?
                        <div>

                            <h3>Name: {user.name} </h3>
                            <h3>Username: {user.username} </h3>
                            <h3>Email: {user.email} </h3>
                            <button onClick={handleAreYouSure}>Delete My Account</button>

                            {areYouSure ?

                                <div>
                                    Are you sure you want to delete your account and all its associated data?
                                    <button onClick={handleAreYouSure} >No, cancel</button>

                                    <button onClick={handleDelete}>Yes, delete my account and all it's data</button>
                                </div>

                                :
                                null}
                        </div>
                        :
                        <form onSubmit={changeDetails} className='edit form'>
                            <h3>Name:<input placeholder={name} onChange={(e) => setName(e.target.value)}></input></h3>
                            <h3>Email:<input placeholder={email} onChange={(e) => setEmail(e.target.value)}></input></h3>
                            <h3>Username:<input placeholder={username} onChange={(e) => setUsername(e.target.value)}></input></h3>
                            <input type='submit'></input> <button onClick={handleEdit}>Cancel Edits</button>
                        </form>}
                </div>
                :
                <div>
                    <h5>Your Followers</h5>
                    {follower}
                </div>

            }




        </div>
    )
}
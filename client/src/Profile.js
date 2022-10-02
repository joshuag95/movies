import { useState } from "react"
import { useNavigate } from "react-router-dom"
import FollowCard from "./FollowCard"
import FollowingCard from "./FollowingCard"

export default function Profile({ currentUser, setCurrentUser }) {

    const [areYouSure, setAreYouSure] = useState(false)
    const [edit, setEdit] = useState(false)
    const [newName, setName] = useState(currentUser.name)
    const [newEmail, setEmail] = useState(currentUser.email)
    const [newUsername, setUsername] = useState(currentUser.username)
    const [showDetails, setShowDetails] = useState(false)
    const [seeFollowers, setSeeFollowers] = useState(true)
    const [following, setFollowing] = useState([])

    const handleSeeFollowers = () => {
        setSeeFollowers(!seeFollowers)
    }

    const handleEdit = () => {
        setEdit((edit) => !edit)
    }

    const changeDetails = (e) => {
        e.preventDefault()
            fetch(`/users/${currentUser.id}`, {
            method: "PATCH",
            headers: {
                'Content-type': "application/json",
            },
            body: JSON.stringify({ 
            
                name: newName,
                email: newEmail,
                username: newUsername
            }),
        })
            .then(res => res.json())
            .then(info => setCurrentUser(info))
        e.target.reset()
        handleEdit()
        
    }

    const handleShowDetails = () => {
        setShowDetails((showDetails) => !showDetails)
    }
    const handleAreYouSure = () => {
        setAreYouSure((areYouSure) => !areYouSure)

    }
   
    const navigate = useNavigate()

    function handleDelete() {

        fetch(`/users/${currentUser.id}`, {
            method: "DELETE",

        })

        navigate("/")

    }

    

    const followerArray = currentUser.followers.map((f) => {
        return (
            <FollowCard name={f.name} username={f.username} key = {f.id} />
        )
    })


    

    const followingArray = currentUser.followings.map((f) => {
        return (
            <FollowingCard name={f.name} key = {f.id} username={f.username}/>
        )
    })

    return (
        <div>
            <button onClick={handleShowDetails}>Profile details</button>
            {showDetails ?
                <div>
                    <h1>Profile</h1>
                    <button onClick={handleEdit}>Edit Details</button>
                    {!edit ?
                        <div>

                            <h3>Name: {currentUser.name} </h3>
                            <h3>Username: {currentUser.username} </h3>
                            <h3>Email: {currentUser.email} </h3>
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
                            <h3>Name:<input placeholder={currentUser.name} onChange={(e) => setName(e.target.value)}></input></h3>
                            <h3>Email:<input placeholder={currentUser.email} onChange={(e) => setEmail(e.target.value)}></input></h3>
                            <h3>Username:<input placeholder={currentUser.username} onChange={(e) => setUsername(e.target.value)}></input></h3>
                            <input type='submit'></input> <button onClick={handleEdit}>Cancel Edits</button>
                        </form>
                        }
                </div>
                :
                <div>
                   <button onClick={handleSeeFollowers}>{seeFollowers ? "See Followers?" : "Who am I following?"}</button>
                   {seeFollowers ? 
                   <div>
                    <h5 className="text-xl font-bold text-yellow-600">Following</h5>
                    <br/>
                    <div className="grid grid-cols-6 gap-5">
                    {followingArray}
                    </div>
                   </div>
                   
                   : 
                   <div>
                    <h5 className="text-xl font-bold text-yellow-600">Followers</h5>
                    <br/>
                    <div className="grid grid-cols-6 gap-5">
                    {followerArray}
                    </div>
                   </div>}
                    
                </div>

            }




        </div>
    )
}
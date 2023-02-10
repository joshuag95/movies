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
            <FollowCard name={f.name} username={f.username} key={f.id} />
        )
    })




    const followingArray = currentUser.followings.map((f) => {
        return (
            <FollowingCard name={f.name} key={f.id} username={f.username} />
        )
    })

    return (
        <div>
            <button className="inline-block px-7 py-1 text-sm font-medium text-white transition bg-red-900 border border-yellow-700 rounded-md shrink-0 hover:bg-transparent hover:text-red-700 focus:outline-none focus:ring active:text-yellow-700 dark:hover:bg-red-700 dark:hover:text-white" onClick={handleShowDetails}>
                Profile details
            </button>
            {showDetails ?
                <div>
                    <h1 className=" text-lg mt-4 leading-relaxed text-yellow-600">Profile</h1>
                    <button onClick={handleEdit} className="inline-block px-7 py-1 text-sm font-medium text-white transition bg-red-900 border border-yellow-700 rounded-md shrink-0 hover:bg-transparent hover:text-red-700 focus:outline-none focus:ring active:text-yellow-700 dark:hover:bg-red-700 dark:hover:text-white">
                        Edit Details
                    </button>
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
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-yellow-500 dark:text-gray-200"
                            >
                                Name
                            </label>

                            <input
                                type="name"
                                id="name"
                                placeholder={currentUser.name}
                                className="mt-1 w-relaitve rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                            />
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-yellow-500 dark:text-gray-200"
                            >
                                Username
                            </label>

                            <input
                                type="username"
                                id="username"
                                placeholder={currentUser.name}
                                className="mt-1 w-relaitve rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                            />
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-yellow-500 dark:text-gray-200"
                            >
                                Email
                            </label>

                            <input
                                type="email"
                                id="email"
                                placeholder={currentUser.name}
                                className="mt-1 w-relaitve rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                            />
                            {/* <h3>Name:<input placeholder={currentUser.name} onChange={(e) => setName(e.target.value)} ></input></h3> */}
                            {/* <h3>Email:<input placeholder={currentUser.email} onChange={(e) => setEmail(e.target.value)}></input></h3>
                            <h3>Username:<input placeholder={currentUser.username} onChange={(e) => setUsername(e.target.value)}></input></h3> */}
                            <br/>
                            <br/>
                            <input
                             
                            type='submit' className="inline-block px-7 py-1 text-sm font-medium text-white transition bg-yellow-700 border border-yellow-700 rounded-md shrink-0 hover:bg-transparent hover:text-red-700 focus:outline-none focus:ring active:text-yellow-700 dark:hover:bg-red-700 dark:hover:text-white"  ></input>
                            <button onClick={handleEdit} className="inline-block px-7 py-1 text-sm font-medium text-white transition bg-red-900 border border-yellow-700 rounded-md shrink-0 hover:bg-transparent hover:text-red-700 focus:outline-none focus:ring active:text-yellow-700 dark:hover:bg-red-700 dark:hover:text-white">Cancel Edits</button>
                        </form>
                    }
                </div>
                :
                <div>
                    <button onClick={handleSeeFollowers}>{seeFollowers ? "See Followers?" : "Who am I following?"}</button>
                    {seeFollowers ?
                        <div>
                            <h5 className="text-xl font-bold text-yellow-600">Following</h5>
                            <br />
                            <div className="grid grid-cols-6 gap-5">
                                {followingArray}
                            </div>
                        </div>

                        :
                        <div>
                            <h5 className="text-xl font-bold text-yellow-600">Followers</h5>
                            <br />
                            <div className="grid grid-cols-6 gap-5">
                                {followerArray}
                            </div>
                        </div>}

                </div>

            }




        </div>
    )
}
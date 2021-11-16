import React from 'react'

//Router
import {Link} from 'react-router-dom'

const SingleUser = props => {

    const {
        avatar,
        github,
        github_name,
        name,
        followersCounter,
        bio
    } = props
    
    return (
        
        <div className="w-3/5 h-2/4 mx-auto my-4 bg-white 
            flex justify-center items-center flex-col p-4 
            rounded-xl shadow-lg md:w-1/3 flex-wrap"
        >
            <div>
                <a href={github} target="_blank" rel="noreferrer">
                <img src={avatar} alt={github} className="w-24 h-24 rounded-full m-auto p-2"/>
                </a>
                <a href={github} target="_blank" rel="noreferrer">
                    <h2 className="mt-1 mx-1 pt-2 px-1 text-center font-bold text-purple text-3xl">{github_name}</h2>
                    
                    { name ?
                        <p className="text-center font-normal text-grape text-sm">{name}</p>
                        : null
                    }
                </a>
                
                {
                    bio ?
                    <p className="m-1 p-2 text-center font-medium text-magenta">{bio}</p> : null
                }
               
            </div>

            <div>
                <p className="text-center p-2">
                    <Link to={`/followers/${github_name}`}>
                    
                        <button className="text-grape font-semibold text-xl bg-yellow p-2 m-2 rounded-lg">
                            Followers {followersCounter ? ` (${followersCounter})` : ""}
                        </button>
                    </ Link>
                </p>   

                <span className="text-magenta text-lg p-2 m-3">
                    <Link to={`/repos/${github_name}`}>
                        <button className="text-grape text-xl bg-yellow p-2 m-2 rounded-lg font-semibold">
                            Public repos
                        </button>
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default SingleUser

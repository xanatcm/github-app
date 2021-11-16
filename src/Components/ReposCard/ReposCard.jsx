import React from 'react'



const ReposCard = ({name, description, repo_url}) => {



    return (
        
              
        <div className="flex justify-center items-center flex-col bg-white w-1/2 mx-auto my-3 rounded-xl md:w-1/4">
            <p className="m-3 p-1 text-center text-grape font-bold text-base md:text-xl">{name}</p>
            <p className="text-center m-1 p-1 text-magenta text-sm w-44">{description}</p>
            <a href={repo_url} target="_blank" rel="noreferrer">
                <button className="bg-yellow font-semibold p-3 m-2 rounded-lg text-magenta">Go to repository</button>
            </a>
        </div>
    

    )
}

export default ReposCard

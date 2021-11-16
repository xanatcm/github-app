import React from 'react'

const Form = ({handleUserApi, handleUser}) => {
    return (
        
        <form 
            action="" 
            className= "flex justify-center items-center flex-col m-auto md:flex-row"
            onSubmit={e => handleUserApi(e)} 
        >

            <input 
                
                type="text" 
                placeholder="GitHub user" 
                className=" h-8 p-2 m-4 rounded-lg w-2/4 bg-blue text-navy bg-white font-normal md:w-1/4"
                onChange={({ target }) => handleUser(target)}
                
            />
            <input
                
                type="submit" 
                value="Search" 
                className="h-8 px-auto m-4 w-24 rounded-lg bg-pink font-medium text-navy p-auto"
            
            />
        </form>
        
    )
}

export default Form

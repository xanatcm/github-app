import React, {useState} from 'react'

//Components

import Form from '../../Components/Form/Form';
import Loader from '../../Components/Custom/Loader/Loader'
import SingleUser from '../../Components/Custom/SingleUser/SingleUser'
import PageNotFound from '../../Components/Custom/PageNotFound/PageNotFound';
const Home = () => {
    
    //State
    const [userName, setUserName] = useState("");
    const [userInfo, setUserInfo] = useState(null);
    const [loader, setLoader] = useState(false);
    const [notFound, setNotFound] = useState(null);

    //Funciones

    const handleUser = ({ value }) => {
        setUserName(value);
    };

    const handleUserApi = async e => {
        
        e.preventDefault();
        
        setUserInfo(null);
        setLoader(true);

        try{
            const API = `https://api.github.com/users/${userName}`
            const response = await fetch(API);
            const result = await response.json();
            if(result.login === userName){
                setNotFound(null);
                setUserInfo(result);
            }else if(result?.message === "Not Found"){
                setUserInfo(null);
                setNotFound(result.message)
            }
            console.log(result);
        } catch(error){
            console.log(error)
        }
        setLoader(false);

    };

    return (
        <div className="">

            <Form 
                handleUserApi={handleUserApi}
                handleUser={handleUser}

            />

            {
                userInfo ? (
                    <SingleUser 
                        avatar={userInfo?.avatar_url}
                        github={userInfo?.html_url}
                        github_name={userInfo?.login}
                        name={userInfo?.name}
                        public_repos={userInfo?.repos_url}
                        followers={userInfo?.followers_url}
                        followersCounter={userInfo?.followers}
                        following={userInfo?.following_url}
                        bio={userInfo?.bio}
                    />
                ) : notFound  ? (
                    <PageNotFound />
                ) : null
                        
            }

            {loader && <Loader />}
            
            
        </div>
    )
}

export default Home

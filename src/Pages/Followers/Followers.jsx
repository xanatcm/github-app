import React, {useEffect, useState} from 'react'

//Router
import { useParams } from 'react-router-dom'

//Components
import SingleUser from '../../Components/Custom/SingleUser/SingleUser';
import Loader from '../../Components/Custom/Loader/Loader';

const Followers = () => {

    //Hooks
    const {user} = useParams();

    //State
    const [followers, setFollowers] = useState(null);
    const [loader, setLoader] = useState(false);
    
    useEffect(() => {

        setLoader(true);
        const handleFollowers = async () => {
            const response = await fetch(
                `https://api.github.com/users/${user}/followers`
            );
            const result = await response.json();
            console.log(result);
            setLoader(false);
            setFollowers(result);
        }

        handleFollowers();

    }, [user]);

    
    return (
        <div>
            <h2 className="m-3 p-3 flex justify-center text-magenta font-bold text-4xl md:flex-wrap">
               Followers
            </h2>

            { followers && followers.length > 0 
            
            ? followers?.map(user => (
                    
                    <SingleUser 
                        key={user?.id}
                        avatar={user?.avatar_url} 
                        github_name={user?.login} 
                        github={user?.html_url}

                    />
                )) : loader && <Loader />

            
            }


        </div>
    )
}

export default Followers

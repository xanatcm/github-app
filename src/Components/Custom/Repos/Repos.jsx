import React, {useEffect, useState} from 'react'

//Router
import { useParams } from 'react-router-dom'

//Components
import ReposCard from '../../ReposCard/ReposCard';
import Loader from '../Loader/Loader';

const Repos = () => {

    const {user} = useParams();
    
    //State
    const [repos, setRepos] = useState(null);
    const [loader, setLoader] = useState(false);

    useEffect(() => {

        setLoader(true);
        const handleUserRepos = async () => {
            const response = await fetch(
                `https://api.github.com/users/${user}/repos`
            );
            const result = await response.json();
            console.log(result);
            setRepos(result);
            setLoader(false);
        }

        handleUserRepos();

    }, [user])


    
    return (
        <div className="">

            <p className="text-center m-4 p-2 text-4xl font-extrabold text-purple">Repos {user}</p> 

            { repos && repos.length > 0 
            
                ? repos?.map(repo => (
                    
                    <ReposCard 
                        key={repo?.id}

                        name={repo?.name}
                        description={repo?.description}
                        repo_url={repo?.html_url}
                        
                    />
                )) : loader && <Loader />

            
            }

        </div>
    )
}

export default Repos

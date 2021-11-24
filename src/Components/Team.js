import React, { useEffect, useState } from 'react';
import Member from './Member';

const Team = () => {


    const users = [
        {
            login : 'Saiful Islam',
            avatar_url : 'https://avatars.githubusercontent.com/u/1?v=4'
        },

        {
            login : 'Sumon',
            avatar_url : 'https://avatars.githubusercontent.com/u/1?v=4'
        }
    ];



    const [member, setmember] = useState(users)

    useEffect(() => {

        fetch('https://api.github.com/users')
        .then(data => data.json())
        .then(data => 
            setmember(data)
            )
        
    }, [])

    return (
     
        <div className="container my-5">
            <div className="row">


                {
                    member.map((data) => <Member member= {data} />)
                }
                
                

            </div>
        </div>
    )
}

export default Team;

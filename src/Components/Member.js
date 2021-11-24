import React from 'react'
import user from '../khan.jpg';

const Member = (user) => {
    return (
        <div className="col-md-3"> 
                    <div className="card shadow">
                        <img src={user.member.avatar_url} alt="" />
                            <div className="card-body">
                                <h4>{user.member.login}</h4>
                            </div>
                    </div>
        </div>
    )
}

export default Member;

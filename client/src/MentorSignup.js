import React, {useState} from 'react';
import {withUser} from './context/UserProvider';
import {PayButton} from './Styles';

const MentorSignup = () => {

    const handleSubmit = (e) => {

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    Do you want to become a mentor?
                </div>
                <PayButton type="submit" className="button">
                 yes 
                </PayButton>
            </form>
        </div>
    )
}

export default withUser(MentorSignup);
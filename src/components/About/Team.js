import React from 'react';
import Member from './Member';

function Team(props) {
    const team = props.team.map(member => (
        <Member name={member.name} pic={member.pic} desig={member.desig}/>
    ));

    return (
        <div className="members">
            {team}
        </div>
    )
}

export default Team

import React from "react";

const GroupMembers = ({ members }) => {
    return (
        <div>
            <h3>Members:</h3>
            {members.length === 0 ? (
                <p>{members.length}</p>
            ) : (
                <ul>
                    {members.map((member, index) => (
                        <li key={member?._id || index}>
                            {member?.name} ({member?.email})
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default GroupMembers;

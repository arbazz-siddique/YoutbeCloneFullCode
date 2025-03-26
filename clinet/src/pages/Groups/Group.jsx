import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Group.css";
import { creategroup, getallgroups, joingroup } from "../../action/group";
import GroupMembers from "../../Components/GroupMembers ";

const Group = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.currentuserreducer);
  // console.log("Current user:", user);

  const groups = useSelector((state) => state.groupreducer?.data || []);
  const navigate = useNavigate();
  const [groupName, setGroupName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(getallgroups());
  }, [dispatch]);

  const handleCreateGroup = async () => {
    if (groupName.trim() !== "") {
      try {
        // console.log("Creating group:", groupName);
        const response = await dispatch(creategroup({ name: groupName, members: [user?.result?._id] }));
        // console.log("Create Group Response:", response);
        setGroupName(response);
      } catch (error) {
        console.error("Error creating group:", error);
      }
    }
  };
  

  const handleJoinGroup = (groupId,userId) => {
    // console.log("Joining group with ID:", groupId);

    if (!groupId) {
      console.error("Error: Group ID is missing");
      return;
    }

    if (!user?.result?._id) {
      console.error("Error: User ID is missing");
      return;
    }
    dispatch(joingroup(groupId, user?.result?._id)).then(() => {
      navigate(`/group/${groupId}`);
  });
  
  };

  const filteredGroups = Array.isArray(groups)
  ? groups.filter((group) =>
      group.name?.toLowerCase().includes(searchTerm?.toLowerCase() || "")
    )
  : [];


  return (
    <div className="group-container">
      <div className="group-box">
        <h1 className="group-title">Groups</h1>

        <div className="group-input-container">
          <input
            type="text"
            placeholder="Search Groups"
            className="group-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="group-input-container">
          <input
            type="text"
            placeholder="Enter Group Name"
            className="group-input"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
          <button className="group-button" onClick={handleCreateGroup}>
            Create Group
          </button>
        </div>

        <h2 className="group-subtitle">Available Groups</h2>
        {filteredGroups.length === 0 ? (
          <p className="no-groups">No groups found.</p>
        ) : (
          <ul className="group-list">
            {filteredGroups.map((group) => {
              // console.log("Group ID:", group._id, "Group Name:", group.name); // Debug log

              return (
                <li key={group._id} className="group-item">
                  <span className="group-name">{group.name}</span>
                  <button
                    className="join-button"
                    onClick={() => handleJoinGroup(group._id)}
                  >
                    Join
                  </button>
                  <GroupMembers members={group.members} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Group;

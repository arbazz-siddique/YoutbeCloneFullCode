import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { deletegroup, getallgroups } from "../../action/group";
import "./GroupDetails.css";
import GroupMembers from "../../Components/GroupMembers ";

const socket = io("http://localhost:5000");

const GroupDetails = () => {
    const { id } = useParams(); 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.currentuserreducer);
    const group = useSelector((state) => state.groupreducer?.data);
    const [message, setMessage] = useState("");
    const [chatMessages, setChatMessages] = useState([]);
    const [screenStream, setScreenStream] = useState(null);

    useEffect(() => {
        if (!group) {
            dispatch(getallgroups(id));
        }
        if (user?._id && id) {
            socket.emit("join_group", { groupId: id, userId: user._id });
        }
    
        socket.on("receive_message", (data) => {
            setChatMessages((prev) => [...prev, data]);
        });
    
        return () => {
            socket.off("receive_message");
        };
    }, [id, dispatch, user, group]);
    
    const handleSendMessage = () => {
        if (message.trim() !== "") {
            const msgData = {
                groupId: id,
                sender: user?.name || user?.email,
                text: message,
            };
    
            socket.emit("send_message", msgData);
            setChatMessages((prev) => [...prev, msgData]);
            setMessage("");
        }
    };
    
    const handleLeaveGroup = async () => {
        try {
            await fetch(`http://localhost:3000/group/leave/${id}`, {
                method: "POST",
                body: JSON.stringify({ userId: user._id }),
                headers: { "Content-Type": "application/json" },
            });
            socket.emit("leave_group", { groupId: id, userId: user._id });
            navigate("/group");
        } catch (error) {
            console.error("Error leaving group:", error);
        }
    };

    const handleDeleteGroup = () => {
        dispatch(deletegroup(id));
        navigate("/group");
    };

    const handleStartScreenShare = async () => {
        try {
            const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
            setScreenStream(stream);
        } catch (error) {
            console.error("Error sharing screen:", error);
        }
    };

    if (!group) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className="group-details-container">
            <h2>{group?.name}</h2>
            <GroupMembers members={group?.members || []} />

            <div className="chat-section">
                <h3>Chat</h3>
                <div className="chat-box">
                    {chatMessages.map((msg, index) => (
                        <p key={index}><strong>{msg.sender}:</strong> {msg.text}</p>
                    ))}
                </div>
                <input className="text_group"  type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type a message..." />
                <button onClick={handleSendMessage}>Send</button>
            </div>

            <button onClick={handleStartScreenShare}>Share Screen</button>
            {screenStream && <video autoPlay playsInline ref={(video) => video && (video.srcObject = screenStream)} />}

            <button onClick={handleLeaveGroup}>Leave Group</button>
            <button onClick={handleDeleteGroup}>Delete Group</button>
        </div>
    );
};

export default GroupDetails;

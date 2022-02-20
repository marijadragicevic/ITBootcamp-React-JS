import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// useHistory => useNavigate
import { UserContext } from "../context/UserContext";

const UserDetails = () => {
    const { id } = useParams();
    const { users } = useContext(UserContext);
    const [user, setUser] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        // ovo vraca niz
        // const user = users.filter(user => user.id !== id)[0];
        // console.log(user);

        const user1 = users.find(user => user.id === parseInt(id));
        console.log(user1);
        setUser(user1);
    }, []);

    const handleHomeButton = () => {
        navigate("/");
    };
    const handleBackButton = () => {
        // koliko zelimo da idemo nazad taj broj stavimo
        navigate(-1);
    };

    return (
        <div>
            <button onClick={handleHomeButton}>Home</button>
            <button onClick={handleBackButton}>Back</button>

            {user ? (
                <div>
                    <p>name: {user.name}</p>
                    <p>email: {user.email}</p>
                    <p>website: {user.website}</p>
                </div>
            ) : (
                <div> We can't find user</div>
            )}
        </div>
    );
};

export default UserDetails;
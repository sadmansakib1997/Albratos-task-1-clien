import React, { useEffect, useState } from "react";

const UserToken = (email) => {
  const [token, settoken] = useState("");
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.accestoken) {
            localStorage.setItem("accessToken", data.accestoken);
            settoken(data.accestoken);
          }
        });
    }
  }, [email]);
  return [token];
};

export default UserToken;

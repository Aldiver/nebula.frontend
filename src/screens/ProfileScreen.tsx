import { useState } from "react";

const ProfileScreen = () => {
  const [firstName] = useState("John");

  return (
    <div>
      <figure>{firstName.charAt(0).toUpperCase()}</figure>
      <span>
        Welcome <strong>{firstName}!</strong> You can view this page because
        you're logged in
      </span>
    </div>
  );
};

export default ProfileScreen;

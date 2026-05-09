import { getUserById } from "@/app/lib/data";
import React from "react";

const UserDetailsPage = async ({ params }) => {
  const { userid } = await params;
  const user = await getUserById(userid);
  console.log(user);
  return (
    <div>
      <h2>User Details :{user.name}</h2>
    </div>
  );
};

export default UserDetailsPage;

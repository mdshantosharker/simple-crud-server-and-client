import { getUserById } from "@/app/lib/data";
import React from "react";
import { Button, Input, Label, TextField } from "@heroui/react";
import { updateUser } from "@/app/lib/actions";
const UserEditPage = async ({ params }) => {
  const { userid } = await params;

  const user = await getUserById(userid);

  const updateUserWrapper = async (formData) => {
    'use server'
    return updateUser(userid, formData);
  };
  return (
    <div>
      <h2>Editing User :{user.name}</h2>
      <div className="w-1/2 mx-auto">
        <form action={updateUserWrapper} className="flex flex-col gap-4">
          <TextField
            className="w-full"
            defaultValue={user?.name}
            name="name"
            type="text"
          >
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
          </TextField>
          <TextField
            className="w-full"
            name="email"
            type="email"
            defaultValue={user?.email}
          >
            <Label>Email</Label>
            <Input placeholder="Enter your email" />
          </TextField>
          <TextField
            className="w-full"
            name="role"
            type="text"
            defaultValue={user?.role}
          >
            <Label>Role</Label>
            <Input placeholder="Enter your Role" />
          </TextField>

          <div className="flex">
            <Button slot="close" variant="secondary">
              Cancel
            </Button>
            <Button type="submit" slot="close">
              Update User
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserEditPage;

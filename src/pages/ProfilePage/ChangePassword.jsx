import React from "react";
import Input from "../../components/shared/Input";
import Button from "../../components/shared/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { actChangePasswordAsync } from "../../store/user/actions";

function ChangePassword(props) {
  const [formData, setFormData] = useState({
    password: "",
    new_password: "",
    confirm_new_password: "",
  });

  const dispatch = useDispatch();

  const handleChangeValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });
  };

  console.log("formData: ", formData);

  const handleSubmitChangePassword = (e) => {
    e.preventDefault();
    dispatch(actChangePasswordAsync(formData));
  };

  return (
    <div className="form-control">
      <h1>Change Password</h1>
      <Input
        //   label="Change Description"
        title="Current Password"
        placeholder="Enter your password ..."
        autoComplete="off"
        name="password"
        onChange={handleChangeValue}
      />
      <Input
        //   label="Change Description"
        title="New Password"
        placeholder="Enter your password ..."
        autoComplete="off"
        name="new_password"
        onChange={handleChangeValue}
      />
      <Input
        //   label="Change Description"
        title="Confirm Password"
        placeholder="Enter your password ..."
        autoComplete="off"
        name="confirm_new_password"
        onChange={handleChangeValue}
      />
      <Button
        size="large"
        type="primary"
        onClick={(e) => handleSubmitChangePassword(e)}
      >
        Save
      </Button>
    </div>
  );
}

export default ChangePassword;

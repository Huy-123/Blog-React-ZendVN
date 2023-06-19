import React from "react";
import Input from "../../components/shared/Input";
import Button from "../../components/shared/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { actChangePasswordAsync } from "../../store/user/actions";

function ChangePassword(props) {
  // useState
  const [loading, setLoading] = useState(false);
  const [showNoti, setShowNoti] = useState(false);

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

  const handleSubmitChangePassword = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(actChangePasswordAsync(formData)).then((res) => {
      if (res.ok) {
        setLoading(false);
        setShowNoti("success");
      } else if (res.ok === false) {
        setLoading(false);
        alert("Enter your password info. Please!");
        setShowNoti("fail");
      }
    });
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
      <div className="save-succes">
        <Button
          type="primary"
          size="large"
          loading={loading}
          loadingPos="right"
          onClick={(e) => handleSubmitChangePassword(e)}
        >
          Save
        </Button>
        {showNoti === false ? <></>: showNoti === "success" ? <p className="success-noti">Successfull</p> : <p className="fail-noti">Your Password Invaid</p>}
      </div>
    </div>
  );
}

export default ChangePassword;

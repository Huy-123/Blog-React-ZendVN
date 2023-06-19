import "./login.css";
import Input from "../../components/shared/Input";
import { useState } from "react";
import UploadImg from "./UploadImg";
import ChangePassword from "./ChangePassword";

function ProfilePage() {
  const [des, setDes] = useState("");

  function handleOnChange(evt) {
    setDes(evt.target.value);
  }

  return (
    <main className="login">
      <div className="tcl-container">
        <h1 className="form-title text-center">Profile</h1>
        <div style={{ display: "flex" }}>
          <div className="form-login-register">
            <form autoComplete="off">
              <ChangePassword />
              {/* <Input
                    label="Change Description"
                    placeholder="Nhập description ..."
                    autoComplete="off"
                    name="username"
                    onChange={handleOnChange}
                  /> */}
              {/* Upload Image */}
              {/* <UploadImg label="Image" des={des} /> */}
            </form>
          </div>
          <div className="form-login-register">
            <form autoComplete="off">
              {/* <ChangePassword /> */}
              <Input
                label="Change Description"
                placeholder="Nhập description ..."
                autoComplete="off"
                name="username"
                onChange={handleOnChange}
              />
              {/* Upload Image */}
              <UploadImg label="Image" des={des} />
            </form>
          </div>
        </div>
      </div>
      <div className="spacing" />
    </main>
  );
}

export default ProfilePage;

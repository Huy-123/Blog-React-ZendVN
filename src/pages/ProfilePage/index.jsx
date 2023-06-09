import "./login.css";
import Input from "../../components/shared/Input";
import { useState } from "react";
import UploadImg from "./UploadImg";


function ProfilePage() {

  const [des, setDes] = useState('');

  function handleOnChange(evt) {
    setDes(evt.target.value)
  } 

  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Profile</h1>
            <div className="form-login-register">
              <form autoComplete="off">
                <Input
                  label="Change Description"
                  placeholder="Nhập description ..."
                  autoComplete="off"
                  name="username"
                  onChange = {handleOnChange}
                />
                {/* Upload Image */}
               <UploadImg label = "Image" des={des}/>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="spacing" />
    </main>
  );
}

export default ProfilePage;

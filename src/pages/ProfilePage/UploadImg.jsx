import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actUpdateProfileAvatarAsync } from "../../store/profile/actions";
import Button from "../../components/shared/Button";

function UploadImg({ label, des }) {
  const user = useSelector((state) => state.USER);

  const imgUser = user?.currentUser?.avatar_urls[96];

  const [previewImage, setPreviewImage] = useState(imgUser);

  const dispatch = useDispatch();

  const [image, setImage] = useState({
    selectedFiled: null,
  });

  const onFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
    }

    setImage({ selectedFiled: event.target.files[0] });
  };

  const onFileUpload = (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("file", image.selectedFiled, image.selectedFiled.name);

    dispatch(actUpdateProfileAvatarAsync(formData, des));
  };

  return (
    <div className="form-control">
      <h1>Change Image</h1>
      <div className="center">
        <div className="form-input">
          <div className="preview">
            <img id="file-ip-1-preview" src={previewImage} />
          </div>
          <br />
          <label htmlFor="file-ip-1">Change Image</label>
          <input type="file" id="file-ip-1" onChange={onFileChange} />
        </div>
      </div>
      <br />
      <Button size="large" type="primary" onClick={(e) => onFileUpload(e)}>
        Save
      </Button>
    </div>
  );
}

export default UploadImg;

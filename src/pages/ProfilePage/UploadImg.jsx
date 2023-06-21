import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actUpdateProfileAvatarAsync } from "../../store/profile/actions";
import Button from "../../components/shared/Button";


function UploadImg({ label, des }) {
  const user = useSelector((state) => state.USER);
  console.log(user.currentUser);

  const imgUser = user?.currentUser?.simple_local_avatar?.full;

  console.log("imgUser: ", imgUser);

  // useState
  const [previewImage, setPreviewImage] = useState(imgUser);
  const [loading, setLoading] = useState(false);
  const [showNoti, setShowNoti] = useState(false);

  useEffect(() => {
    setPreviewImage(imgUser);
  }, [imgUser])

  const dispatch = useDispatch();

  const [image, setImage] = useState({
    selectedFiled: null,
  });

  const onFileChange = (event) => {
    console.log(event.target.files);
    if (event.target.files && event.target.files[0]) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
    }

    setImage({ selectedFiled: event.target.files[0] });
  };

  const onFileUpload = (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("file", image.selectedFiled);
    console.log('formData', formData.getAll('file'));
    setLoading(true);
    dispatch(actUpdateProfileAvatarAsync(formData, des, user?.currentUser?.simple_local_avatar?.media_id)).then((res) => {
      if (res.ok) {
        setLoading(false);
        setShowNoti(true);
        setImage({ selectedFiled: null });
      }
    });
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
      <div className="save-succes">
        <Button
          type="primary"
          size="large"
          loading={loading}
          loadingPos="right"
          onClick={(e) => onFileUpload(e)}
        >
          Save
        </Button>
        {showNoti ? <p className="success-noti">Successfull</p> : <></>}
      </div>
    </div>
  );
}

export default UploadImg;

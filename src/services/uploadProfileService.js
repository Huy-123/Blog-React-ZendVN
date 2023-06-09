import axios from "axios";
import API from "./api";

const uploadProfileService = {
  uploadMedia: function (data) {
    return API.callWithToken().post("/wp/v2/media", data);
  },
  updateProfileAvatar: function (data) {
    return API.callWithToken().post("/wp/v2/users/me", data);
  },
};

export default uploadProfileService;

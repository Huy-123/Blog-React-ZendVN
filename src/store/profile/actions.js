import uploadProfileService from "../../services/uploadProfileService";
import { actUpdateCurrentUser } from "../user/actions";

export const ACT_UP_LOAD_MEDIA = "ACT_UP_LOAD_MEDIA";

export function actUploadMedia({ id = false, des = false }) {
  return {
    type: ACT_UP_LOAD_MEDIA,
    payload: {
      id,
      des,
    },
  };
}

export function actUpdateProfileAvatarAsync(data, des, oldMediaId) {
  return async (dispatch) => {
    try {
      console.log(data.get("file"));
      let mediaId = null;
      if (data.get("file") !== "null") {
        const responseMedia = await uploadProfileService.uploadMedia(data);
        mediaId = responseMedia.data.id;
      }

      const dataUpdateProfile = {
        description: des,
        simple_local_avatar: {
          media_id: mediaId ? mediaId : oldMediaId,
        },
      };

      // update profile
      const response = await uploadProfileService.updateProfileAvatar(
        dataUpdateProfile
      );

      console.log("res: ", response);
      dispatch(actUpdateCurrentUser(response.data));
      return {
        ok: true,
      };
    } catch (error) {
      return {
        ok: false,
        error: "Không thành công",
      };
    }
  };
}

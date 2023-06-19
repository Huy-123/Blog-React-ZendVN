import uploadProfileService from "../../services/uploadProfileService";

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

export function actUpdateProfileAvatarAsync(data, des) {
  return async (dispatch) => {
    try {
      const responseMedia = await uploadProfileService.uploadMedia(data);

      const mediaId = responseMedia.data.id;

        const dataUpdateProfile = {
          description: des,
          simple_local_avatar: {
              media_id: mediaId
          }
      }

      const response = await uploadProfileService.updateProfileAvatar(dataUpdateProfile);

      // console.log("res: ", response);
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

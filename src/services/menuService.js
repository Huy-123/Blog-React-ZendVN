import API from "./api";

const menuService = {
  getAll: function (inputParams = {}) {
    return API.call().get("/menus/v1/menus/main-menu-vi", {
      params: {
        ...inputParams,
      },
    });
  },
};

export default menuService;

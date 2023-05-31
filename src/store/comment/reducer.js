import { ACT_FETCH_COMMENTS_PARENT } from "./actions";
import { ACT_FETCH_COMMENTS_CHILD } from "./actions";

const initState = {
  dataParentComment: {
    list: [],
    currentPage: 0,
    totalPages: 1,
    total: 1,
  },
  dataChildComment: {},
};

function reducer(state = initState, action) {
  switch (action.type) {
    case ACT_FETCH_COMMENTS_PARENT:
      return {
        ...state,
        dataParentComment: {
          ...state.dataParentComment,
          list:
            action.payload.currentPage === 1
              ? action.payload.list
              : [...state.dataParentComment.list, ...action.payload.list],
          currentPage: action.payload.currentPage,
          totalPages: action.payload.totalPages,
          total: action.payload.total,
        },
      };
    case ACT_FETCH_COMMENTS_CHILD:
      const parent = action.payload.parent;
      const hasData = state.dataChildComment[parent];
      return {
        ...state,
        dataChildComment: {
          ...state.dataChildComment,
          [parent]: hasData
            ? {}
            : {
                list: action.payload.list,
                currentPage: action.payload.currentPage,
                totalPages: action.payload.totalPages,
                total: action.payload.total,
              },
        },
      };
    default:
      return state;
  }
}

export default reducer;

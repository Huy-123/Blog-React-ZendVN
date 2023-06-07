import { ACT_FETCH_COMMENTS_PARENT } from "./actions";
import { ACT_FETCH_COMMENTS_CHILD } from "./actions";
import { ACT_POST_NEW_COMMNENT } from "./actions";

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
      // const hasData = state.dataChildComment[parent];

      const isFristPage = action.payload.currentPage === 1;

      return {
        ...state,
        dataChildComment: {
          ...state.dataChildComment,
          [parent]: {
            list: isFristPage
              ? action.payload.list
              : [
                  ...state.dataChildComment[parent].list,
                  ...action.payload.list,
                ],
            currentPage: action.payload.currentPage,
            totalPages: action.payload.totalPages,
            total: action.payload.total,
          },
        },
      };

    case ACT_POST_NEW_COMMNENT:
      const parentChild = action.payload.parent;
      console.log("action.payload: ", action.payload);
      console.log(
        "state.dataChildComment[parentChild]: ",
        state.dataChildComment[parentChild]
      );
      return {
        ...state,
        dataParentComment:
          parentChild === 0
            ? {
                ...state.dataParentComment,
                list: [action.payload, ...state.dataParentComment.list],
                total: state.dataParentComment.total + 1,
              }
            : { ...state.dataParentComment },
        dataChildComment:
          parentChild !== 0 && state.dataChildComment
            ? {
                [parentChild]: {
                  ...state.dataChildComment[parentChild],
                  list: [
                    action.payload,...state.dataChildComment[parentChild].list,
                  ],
                },
                ...state.dataChildComment,
              }
            : {
                ...state.dataChildComment
              },
      };
    default:
      return state;
  }
}

export default reducer;

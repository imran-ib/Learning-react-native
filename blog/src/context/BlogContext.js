import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_BLOGPOST":
      return state.filter((post) => post.id !== action.payload);

    case "ADD_BLOGPOST":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 1000000000000).toString(),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];

    default:
      return state;
  }
};

const AddBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "ADD_BLOGPOST", payload: { title, content } });
    callback();
  };
};
const DeleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "DELETE_BLOGPOST", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { AddBlogPost, DeleteBlogPost },
  [{ title: "New Blog Title", content: "New Content", id: "21354641231" }]
);

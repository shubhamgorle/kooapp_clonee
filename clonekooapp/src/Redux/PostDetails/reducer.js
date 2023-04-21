import { GET_POST_DATA } from "./actionType";

const initialState = {
  userPostData:[]
};

const reducer = (state = initialState, { type, payload }) => {
  // console.log(payload,"userdataaaa at reducer regarding postsss")
  switch (type) {
    case GET_POST_DATA:
      return {
        userPostData: payload,
      };

    default:
      return state;
  }
};

export { reducer };

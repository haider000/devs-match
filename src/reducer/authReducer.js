const initialState = {};

const authReducer = (state = initialState, action) => {
  if (action.type === 'UPDATE_AUTH') {
    return action.payload;
  }

  return state;
};

export default authReducer;

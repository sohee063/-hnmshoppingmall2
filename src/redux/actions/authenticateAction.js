function login(id, password) {
  return (dispatch, getState) => {
    console.log("로그인석세스");
    dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } });
  };
}

export const authenticateAction = { login };

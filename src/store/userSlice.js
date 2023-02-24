import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  login: false, //false && true
  token: null,
  favoritList: [],
  info: {
    name: "",
    email: "",
    password: "",
    id: null,
  },
};
export const loginUser = createAsyncThunk("user/login", async (userName) => {
  const { status, data } = await axios.get(`https://netflix-colon-b71d8-default-rtdb.firebaseio.com/${userName}.json`);
  console.log(initialState);
  if (status == 200) {
    return true;
  }
});
export const updateAccount = createAsyncThunk("user/create", async (user) => {
  const userName = user.info.name;
  const res = await axios.put(`https://netflix-colon-b71d8-default-rtdb.firebaseio.com/${userName}.json`, user);
});

export const createAccount = createAsyncThunk("user/create", async (user) => {
  const userName = user.info.name;
  const res = await axios.put(`https://netflix-colon-b71d8-default-rtdb.firebaseio.com/${userName}.json`, user);
});
export const singInUser = createAsyncThunk("user/singin", async (user) => {
  const { status, data } = await axios.post("https://reqres.in/api/users", user);
  if (status == 201) {
    return data;
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(singInUser.fulfilled, (state, action) => {
        const user = action.payload;
        state.info.name = user.name;
        state.info.email = user.email;
        state.info.password = user.password;
        state.info.id = user.id;
        state.login = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const tokenKey = crypto.randomUUID();
        console.log(tokenKey);
        state.login = true;
        state.token = tokenKey;
      });
  },
});
export const userAction = userSlice.actions;
export default userSlice;

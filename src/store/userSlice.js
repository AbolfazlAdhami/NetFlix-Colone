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
  error: null,
};

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
  reducers: {
    addToList(state, action) {
      const pervList = [...state.favoritList];
      const id = action.payload;
      console.log(pervList);
      const checkId = pervList.find((item) => item == id);
      console.log(checkId, id);
      if (checkId == null) state.favoritList.push(id);
    },
    removeItem(state, action) {
      const pervList = [...state.favoritList];
      const id = action.payload;
      const newList = pervList.filter((item) => item != id);
      console.log(newList);
      state.favoritList = newList;
    },
    loginUser(state, action) {
      const tokenkey = crypto.randomUUID();
      state.error = null;
      state.info = action.payload.info;
      state.login = true;
      state.token = tokenkey;
    },
    userNotFound(state, action) {
      state.login = false;
      state.error = "warning";
    },
  },

  extraReducers(builder) {
    builder.addCase(singInUser.fulfilled, (state, action) => {
      const user = action.payload;
      state.info.name = user.name;
      state.info.email = user.email;
      state.info.password = user.password;
      state.info.id = user.id;
      state.login = true;
    });
  },
});
export const userAction = userSlice.actions;
export default userSlice;

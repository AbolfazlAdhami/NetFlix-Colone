import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const singInUser = createAsyncThunk("user/Regester", async (user) => {
  try {
    const { data, status } = await axios.post("https://reqres.in/api/users", user);
    if (status == 201) {
      return data;
    }
  } catch (error) {}
});
export const createUser = createAsyncThunk("user/createAccount", async (user) => {
  const { userName } = user;
  const { data, status } = await axios.put(`https://netflix-colon-b71d8-default-rtdb.firebaseio.com/:${userName}.json`, user);
  if (status == 200) {
    return data;
  }
});
export const updataUser = createAsyncThunk("user/Update", async (user) => {
  const { userName } = user;
  const { data, status } = await axios.put(`https://netflix-colon-b71d8-default-rtdb.firebaseio.com/:${userName}.json`, user);
  if (status == 200) {
    return data;
  }
});

const initialState = {
  login: false, //false && true
  create: false,
  token: null,
  favoritList: [10],
  userName: "",
  password: "",
  email: "",
  id: null,
  status: "idle", // "idle" , "singin", "created","login","Not Found"
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser(state, action) {
      state = action.payload;
      const token = crypto.randomUUID();
      state.create = true;
      state.token = token;
      state.status = "login";
      state.login = true;
      if (action.payload.favoritList == null) state.favoritList = [10];
      return state;

    },
    userNotFound(state, action) {
      return state;
    },
    addMovie(state, action) {
      const pervList = [...state.favoritList];
      const id = action.payload;

      const find = pervList.find((item) => item == id);

      if (find != null) {
        state.favoritList = [...pervList];
        return state;
      }
      const newList = [...pervList, id];

      state.favoritList = [...newList];
      return state;
    },
    removeMovie(state, action) {
      const pervList = [...state.favoritList];
      const id = action.payload;

      const newList = pervList.filter((item) => item != id);
      state.favoritList = [...newList];
      return state;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(singInUser.fulfilled, (state, actions) => {
        const data = actions.payload;
        state.userName = data.name;
        state.password = data.password;
        state.email = data.email;
        state.id = data.id;
        state.status = "singin";
        return state;
      })
      .addCase(createUser.pending, (state) => {
        state.create = true;
        return state;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state = action.payload;
        state.status = "created";
        state.create = true;
        return state;
      });
    // .addCase(updataUser.fulfilled, (state, action) => {
    //   state = action.payload;
    //   state.status = "login";
    //   state.login = true;
    //   state.create = true;
    //   return state;
    // });
  },
});

export const { loginUser, userNotFound, addMovie, removeMovie } = userSlice.actions;
export default userSlice;

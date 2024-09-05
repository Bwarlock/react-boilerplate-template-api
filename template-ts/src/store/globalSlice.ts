import { createSlice } from "@reduxjs/toolkit";
import { Global_State } from "../interfaces/store_interfaces";

const initialValue: Global_State = {
	token: "",
	user: {},
};

const globalSlice = createSlice({
	name: "global",
	initialState: initialValue,
	reducers: {
		storeToken: (state, action) => {
			state.token = action.payload;
		},
		storeUser: (state, action) => {
			state.user = action.payload;
		},
		clearGlobal: () => {
			return { ...initialValue };
		},
	},
});

export const { storeToken, storeUser, clearGlobal } = globalSlice.actions;
export default globalSlice.reducer;

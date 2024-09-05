import { combineReducers, configureStore } from "@reduxjs/toolkit";
import globalReducer from "./globalSlice";
import storage from "redux-persist/lib/storage";
import {
	persistReducer,
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";

const persistConfig = {
	key: "root",
	storage,
	// whitelist: ["global"], // Only global will be in "persist:root" localStorage
};

// Combined Reducers
const rootReducer = combineReducers({
	global: globalReducer,
});

// Store Definition
export const store = configureStore({
	reducer: persistReducer(persistConfig, rootReducer),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);

// TypeSense For Typescript :-
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

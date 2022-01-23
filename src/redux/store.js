import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export let store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware())
);
export let persistor = persistStore(store);

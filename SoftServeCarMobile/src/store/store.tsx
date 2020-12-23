import { createStore } from "redux";
import reducerAPI from './reducers';

export const store = createStore(reducerAPI);
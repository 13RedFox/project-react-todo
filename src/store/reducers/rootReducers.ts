import {combineReducers} from "redux";
import { folderReducer } from "./folders-reducer";


export const rootReducers = combineReducers({
    folders: folderReducer,
})
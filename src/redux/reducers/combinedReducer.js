import AuthReducer from "./AuthReducer"; //since store accepts 1 parameter for reducers, reducers must be combined
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import DietReducer from "./DietReducer";

const allReducers = combineReducers({
    AuthReducer,
    DietReducer,
    //firestore: firestoreReducer, //video 19 firestore data. but doesnt know which data to sync. import {firestoreConnect} from react-redux-firebase   in target component. use compose to modify connect.import {compose} from "redux". compose(connect(mapStateToProps),firestoreConnect([{collection:collectionNameInDb}])).after this modify mapstateToProps . it should be state.firestore.blabla
    firebase: firebaseReducer, //for auth. whenever u singin or off, this gets updated
});

export default allReducers;

import { SET_IS_CONNECTED } from "./actions";

const initialState = {
    isConnected: false
}

export default (state = initialState, action) => {
    switch (action.type) {

        case SET_IS_CONNECTED:
            return { ...state, isConnected: action.payload };

        default:
            return state
    }
};

import { SET_HORARIOS } from "./actions";

const initialState = {
    horarios: []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case SET_HORARIOS:
            return { ...state, horarios: action.payload };
        default:
            return state
    }
};

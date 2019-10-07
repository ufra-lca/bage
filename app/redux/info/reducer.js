import { SET_HORARIO } from "./actions";

const initialState = {
    horario: ""
}

export default (state = initialState, action) => {
    switch (action.type) {

        case SET_HORARIO:
            return { ...state, horario: action.payload };

        default:
            return state
    }
};

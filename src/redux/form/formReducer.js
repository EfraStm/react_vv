import { SET_FORM_DATA } from './formTypes';

const initialState = {
    FormData: {
        username:'',
        email:'',
    },
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORM_DATA : {
            return {
                ...state,
                FormData:{
                    ...state.FormData,
                    ...action.payload,
                }
            }
        }
        default:
            return state;
    }
};

export default formReducer;
const initialState = {
    user_id: null,
    username: '',
    profile_pic: ''
}

const USER_INFO_TO_REDUX = 'USER_INFO_TO_REDUX';

export function userInfoToRedux( username, user_id, profile_pic){
    return {
        type: 'USER_INFO_TO_REDUX',
        payload: { username, user_id, profile_pic}
    }
}


export default function reducer(state = initialState, action) {
    switch(action.type) {
        case USER_INFO_TO_REDUX:
            return {...state, ...action.payload}
        default: 
            return state;
    }
}
//action creators
export const login = (user) => {
    return {
        type: 'LOGIN',
        user,
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT',
    }
}

//thunks
export const loginAsync = (username,password) => async (dispatch) => {
    console.log('inside thunk login')
    console.log(username);
    console.log(password);
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username,password})
        })
        if (response.ok) {
            const user = await response.json()
            dispatch(login(user))
        }
        if (!response.ok) {
    console.log('Response status:', response.status);
    console.log('Response text:', await response.text());
}
    } catch (error) {
        console.error('Error:', error);
    }
}


export const logoutAsync = () => {
    return async (dispatch) => {
        const response = await fetch('/api/logout')
        if (response.ok) {
            dispatch(logout())
        }
    }
}




const initialState = {
    user: undefined,
}

//reducer

export default function sessionReducer(state=initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.user,
            }
        case 'LOGOUT':
            return {
                ...state,
                user: undefined,
            }
        default:
            return state
        }
    }



const SET_CITY = 'SET_CITY';
export const FETCH_CITY = 'FETCH_CITY';

export const cityReducer = (state = [], action) => {
    switch (action.type) {
        case SET_CITY:
            return [...action.payload.data]
    }

    return state;
}

export const setCity = (payload) => ({ type: SET_CITY, payload })
export const fetchCity = (payload) => ({ type: FETCH_CITY, payload })


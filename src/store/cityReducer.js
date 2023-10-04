const initialState = {
    citiesData: {},
};

const SET_CITY = 'SET_CITY';
export const FETCH_CITY = 'FETCH_CITY';

export const cityReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CITY:
            return {
                ...state,
                citiesData: action.payload.data,
            }
    }

    return state;
}

export const setCity = (payload) => ({ type: SET_CITY, payload })
export const fetchCity = (payload) => ({ type: FETCH_CITY, payload })

/* (city) => {
    return city.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
  }; */
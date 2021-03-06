import {
  ADD_PLACE,
  DELETE_PLACE
  // SELECT_PLACE,
  // UNSELECT_PLACE
} from "../actions/actionTypes";

const initialState = {
  places: []
  // selectedPlace: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random().toString(),
          name: action.placeName,
          image: {
            uri:
              "https://handluggageonly.co.uk/wp-content/uploads/2014/10/Hand-Luggage-Only-2.jpg"
          }
        })
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== action.key;
        })
        // selectedPlace: null
      };
    // case SELECT_PLACE:
    //   return {
    //     ...state,
    //     selectedPlace: state.places.find(place => {
    //       return place.key === action.key;
    //     })
    //   };
    // case UNSELECT_PLACE:
    //   return {
    //     ...state,
    //     selectedPlace: null
    //   };
    default:
      return state;
  }
};

export default reducer;

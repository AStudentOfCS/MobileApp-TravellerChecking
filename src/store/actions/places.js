import {
  ADD_PLACE,
  DELETE_PLACE
  // SELECT_PLACE,
  // UNSELECT_PLACE
} from "./actionTypes";

export const addPlace = placeName => {
  return {
    type: ADD_PLACE,
    placeName
  };
};

export const deletePlace = key => {
  return {
    type: DELETE_PLACE,
    key
  };
};

// export const selectPlace = key => {
//   return {
//     type: SELECT_PLACE,
//     key
//   };
// };

// export const unselectPlace = () => {
//   return {
//     type: UNSELECT_PLACE
//   };
// };

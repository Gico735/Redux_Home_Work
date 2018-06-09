
import { TOGGLE_BORDER_REQUESTED, TOGGLE_BACKGROUND_REQUESTED, TOGGLE_TEXT_REQUESTED, TOGGLE_BORDER, TOGGLE_BACKGROUND, TOGGLE_TEXT, SET_NEW_TEXT } from '../actions/page_1_actions'

const initialState = {
  border: false,
  background: false,
  text: false,
  newText: 'Gregory'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_BACKGROUND:
      return {
        ...state,
        background: !state.background
      }
    case TOGGLE_BORDER:
      return {
        ...state,
        border: !state.border
      }
    case TOGGLE_TEXT:
      return {
        ...state,
        text: !state.text
      }
    case TOGGLE_BACKGROUND_REQUESTED:
      return {
        ...state,
        background: !state.background
      }
    case TOGGLE_BORDER_REQUESTED:
      return {
        ...state,
        border: !state.border
      }
    case TOGGLE_TEXT_REQUESTED:
      return {
        ...state,
        text: !state.text
      }
    case SET_NEW_TEXT:
      return {
        ...state,
        newText: action.payload
      }
    default:
      return state;
  }
}
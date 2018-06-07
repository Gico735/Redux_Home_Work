
import { TOGGLE_BORDER, TOGGLE_BACKGROUND, TOGGLE_TEXT } from '../components/actions/page_1_actions'

const initialState = {
  border: false,
  background: false,
  text: false
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
    default:
      return state;
  }
}
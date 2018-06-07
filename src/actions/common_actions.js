
const commonActions = (pageName) => {

  const SET_STATE = pageName + ':SET_STATE';
  const SET_STATE_REQUESTED = pageName + ':SET_STATE';
  const TOGGLE_BORDER = pageName + ':TOGGLE_BORDER';
  const TOGGLE_BORDER_REQUESTED = pageName + ':TOGGLE_BORDER';
  const TOGGLE_BACKGROUND = pageName + ':TOGGLE_BACKGROUND';
  const TOGGLE_BACKGROUND_REQUESTED = pageName + ':TOGGLE_BACKGROUND';
  const TOGGLE_TEXT = pageName + ':TOGGLE_TEXT';
  const TOGGLE_TEXT_REQUESTED = pageName + ':TOGGLE_TEXT';



  /////////////////////////////////////////
  const setPageState = (num) => {
    return dispatch => {
      dispatch({
        type: SET_STATE,
        payloud: num
      })
    }
  }

  const setPageStateAsinc = (num) => {
    return dispatch => {
      dispatch({
        type: SET_STATE_REQUESTED,
        payloud: num
      })

      return setTimeout(() => {
        dispatch({
          type: SET_STATE,
          payloud: num
        })
      }, 1500)
    }
  }

  //////////////////////////////////////
  const toggleBorder = () => {
    return dispatch => {
      dispatch({
        type: TOGGLE_BORDER
      })
    }
  }

  const toggleBorderAsinc = () => {
    return dispatch => {
      dispatch({
        type: TOGGLE_BORDER_REQUESTED
      })

      return setTimeout(() => {
        dispatch({
          type: TOGGLE_BORDER
        })
      }, 1500)
    }
  }

  ///////////////////////////////
  const toggleBackground = () => {
    return dispatch => {
      dispatch({
        type: TOGGLE_BACKGROUND
      })
    }
  }

  const toggleBackgroundAsinc = () => {
    return dispatch => {
      dispatch({
        type: TOGGLE_BACKGROUND_REQUESTED
      })

      return setTimeout(() => {
        dispatch({
          type: TOGGLE_BACKGROUND
        })
      }, 1500)
    }
  }

  const toggleText = () => {
    return dispatch => {
      dispatch({
        type: TOGGLE_TEXT
      })
    }
  }

  const toggleTextAsinc = () => {
    return dispatch => {
      dispatch({
        type: TOGGLE_TEXT_REQUESTED
      })

      return setTimeout(() => {
        dispatch({
          type: TOGGLE_TEXT
        })
      }, 1500)
    }
  }

  return {
    SET_STATE,
    SET_STATE_REQUESTED,
    TOGGLE_BORDER,
    TOGGLE_BORDER_REQUESTED,
    TOGGLE_BACKGROUND,
    TOGGLE_BACKGROUND_REQUESTED,
    TOGGLE_TEXT,
    TOGGLE_TEXT_REQUESTED,
    setPageState,
    setPageStateAsinc,
    toggleBorder,
    toggleBorderAsinc,
    toggleBackground,
    toggleBackgroundAsinc,
    toggleText,
    toggleTextAsinc
  }
}
export default commonActions
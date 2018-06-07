
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
        type: SET_STATE_REQUESTED,
        payloud: num
      })

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
      }, 3000)
    }
  }

  //////////////////////////////////////
  const toggleBorder = () => {
    return dispatch => {
      dispatch({
        type: TOGGLE_BORDER_REQUESTED
      })

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
      }, 3000)
    }
  }

  ///////////////////////////////
  const toggleBackground = () => {
    return dispatch => {
      dispatch({
        type: TOGGLE_BACKGROUND_REQUESTED
      })

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
      }, 3000)
    }
  }

  const toggleText = () => {
    return dispatch => {
      dispatch({
        type: TOGGLE_TEXT_REQUESTED
      })

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
      }, 3000)
    }
  }

  return {
    SET_STATE,
    TOGGLE_BORDER,
    TOGGLE_BACKGROUND,
    TOGGLE_TEXT,
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
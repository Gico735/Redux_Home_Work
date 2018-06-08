
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

  const setPageStateAsync = (num) => {
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
      }, 2000)
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

  const toggleBorderAsync = () => {
    return dispatch => {
      dispatch({
        type: TOGGLE_BORDER_REQUESTED
      })

      return setTimeout(() => {
        dispatch({
          type: TOGGLE_BORDER
        })
      }, 2000)
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

  const toggleBackgroundAsync = () => {
    return dispatch => {
      dispatch({
        type: TOGGLE_BACKGROUND_REQUESTED
      })

      return setTimeout(() => {
        dispatch({
          type: TOGGLE_BACKGROUND
        })
      }, 2000)
    }
  }

  const toggleText = () => {
    return dispatch => {
      dispatch({
        type: TOGGLE_TEXT
      })
    }
  }

  const toggleTextAsync = () => {
    return dispatch => {
      dispatch({
        type: TOGGLE_TEXT_REQUESTED
      })

      return setTimeout(() => {
        dispatch({
          type: TOGGLE_TEXT
        })
      }, 2000)
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
    setPageStateAsync,
    toggleBorder,
    toggleBorderAsync,
    toggleBackground,
    toggleBackgroundAsync,
    toggleText,
    toggleTextAsync
  }
}
export default commonActions
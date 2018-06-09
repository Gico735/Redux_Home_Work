
const commonActions = (pageName) => {

  const SET_STATE = pageName + ':SET_STATE';
  const SET_STATE_REQUESTED = pageName + ':SET_STATE';
  const TOGGLE_BORDER = pageName + ':TOGGLE_BORDER';
  const TOGGLE_BORDER_REQUESTED = pageName + ':TOGGLE_BORDER';
  const TOGGLE_BACKGROUND = pageName + ':TOGGLE_BACKGROUND';
  const TOGGLE_BACKGROUND_REQUESTED = pageName + ':TOGGLE_BACKGROUND';
  const TOGGLE_TEXT = pageName + ':TOGGLE_TEXT';
  const TOGGLE_TEXT_REQUESTED = pageName + ':TOGGLE_TEXT';
  const SET_NEW_TEXT = pageName + ':NEW_TEXT'



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

      

      fetch(`https://www.cbr-xml-daily.ru/daily_json.js`,{cache:'default'}).then((response) => {
        response.json().then((data) => {
          let key = Object.keys(data.Valute)[10]
          console.log(key)
          dispatch({
            type: SET_NEW_TEXT,
            payload: data.Valute[key].Name
          });
        })
      });
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
    SET_NEW_TEXT,
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
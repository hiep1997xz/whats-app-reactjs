import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './css/App.scss'
import Messenger from './pages/Messenger'
import Splash from './pages/Splash'

const ZuzApp = (props) => {
  const { loaded, setState } = props;

  useEffect(() => {
    setTimeout(() => {
      setState(true);
    }, 1000)
  }, [])

  return (
    <BrowserRouter>
      {loaded ? <Messenger /> : <Splash />}
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => {
  return {
    loaded: state.reducer.loaded,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setState: (loaded) =>
      dispatch({ type: 'APP_STATE', state: { loaded: loaded } }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ZuzApp)

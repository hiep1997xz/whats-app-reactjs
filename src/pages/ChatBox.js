import React from 'react'
import { connect } from 'react-redux'

const ChatBox = () => {
  return (
    <div className='chatbox'>ChatBox</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox)
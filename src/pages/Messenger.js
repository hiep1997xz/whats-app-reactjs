import React from 'react'
import { connect } from 'react-redux'
import ChatBox from './ChatBox'
import Inbox from './Inbox'

const Messenger = () => {
  return (
    <>
      <div className="green-belt" />
      <div className="messenger fixed flex">
        <Inbox />
        <ChatBox />
      </div>
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Messenger)

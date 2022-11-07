import React from 'react'
import { connect } from 'react-redux'
import InboxItem from './subs/InboxItem'
import Search from './subs/Search'
import UserBox from './subs/UserBox'

const Inbox = () => {
  return (
    <div className="inbox rel flex col">
      <UserBox />
      <Search />
      <div className="conv-list rel">
        {['', '', '', '', '', '', '', '', '', '', '', '', ''].map((node) => (
          <InboxItem />
        ))}
      </div>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Inbox)

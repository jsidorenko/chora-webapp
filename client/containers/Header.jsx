import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'

class HeaderContainer extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Header
        address={this.props.instance.address}
      />
    )
  }

}

const mapStateToProps = state => ({
  instance: state.app.instance,
})

export default connect(mapStateToProps, null)(HeaderContainer)

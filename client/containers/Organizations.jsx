import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createOrganization, getOrganizations } from '../actions/factoryActions'
import Organizations from '../components/Organizations'
import Loading from '../components/Loading'

class OrganizationsContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
    this.createOrganization = this.createOrganization.bind(this)
    this.handleName = this.handleName.bind(this)
  }

  componentDidMount() {
    this.props.getOrganizations()
  }

  createOrganization() {
    this.props.createOrganization(this.state.name, this.props.accountAddress)
  }

  handleName(event) {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    if (this.props.accountLoading) {
      return <p>Loading...</p>
    }
    return (
      <Organizations
        createOrganization={this.createOrganization}
        handleName={this.handleName}
        name={this.state.name}
        organizations={this.props.organizations}
        selectOrganiztion={this.props.selectOrganiztion}
      />
    )
  }

}

const mapStateToProps = state => ({
  organizations: state.factory.organizations,
  organizationsError: state.factory.organizationsError,
  organizationsLoading: state.factory.organizationsLoading,
})


const mapDispatchToProps = dispatch => ({
  createOrganization(name, owner) {
    dispatch(createOrganization(name, owner))
  },
  getOrganizations() {
    dispatch(getOrganizations())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationsContainer)

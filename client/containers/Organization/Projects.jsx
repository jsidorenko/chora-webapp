import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { claimProject, getProject } from '../../actions/projectsActions'
import { createProject, deleteProject } from '../../actions/organizationActions'
import PageLoader from '../../components/PageLoader'
import Projects from '../../components/Organization/Projects'

class ProjectsContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentView: 'List',
      loading: true,
      newProject: {
        name: '',
      }
    }
    this.createProject = this.createProject.bind(this)
    this.deleteProject = this.deleteProject.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.setView = this.setView.bind(this)
  }

  componentDidMount() {
    if (this.props.addresses.length) {
      this.props.addresses.map(address => this.props.getProject(address))
    } else {
      this.setState({
        loading: false,
      })
    }
  }

  componentDidUpdate() {
    if (this.state.loading && this.props.projects && this.props.addresses.length === this.props.projects.length) {
      this.setState({
        loading: false,
      })
    }
  }

  createProject() {
    this.props.createProject(this.props.match.params.address, this.state.newProject, this.props.accountAddress)
  }

  deleteProject(address) {
    const index = this.props.addresses.indexOf(address)
    const project = this.props.projects[index]
    this.props.deleteProject(this.props.match.params.address, address, project.owner, this.props.accountAddress)
  }

  handleChange(event) {
    switch (event.target.id) {
      case 'name':
      this.setState({
        newProject: {
          ...this.state.newProject,
          name: event.target.value,
        },
      })
      break
    }
  }

  setView(view) {
    this.setState({
      currentView: view,
    })
  }

  render() {
    if (this.state.loading) {
      return <PageLoader />
    }
    return (
      <Projects
        accountAddress={this.props.accountAddress}
        addresses={this.props.addresses}
        projects={this.props.projects}
        createProject={this.createProject}
        currentView={this.state.currentView}
        deleteProject={this.deleteProject}
        newProject={this.state.newProject}
        handleChange={this.handleChange}
        setView={this.setView}
      />
    )
  }

}

const mapStateToProps = state => ({
  projects: state.projects.projects,
  projectsError: state.projects.projectsError,
  projectsLoading: state.projects.projectsLoading,
})


const mapDispatchToProps = dispatch => ({
  createProject(organizationAddress, newProject, sender) {
    dispatch(createProject(organizationAddress, newProject, sender))
  },
  deleteProject(organizationAddress, address, sender) {
    dispatch(deleteProject(organizationAddress, address, sender))
  },
  getProject(address) {
    dispatch(getProject(address))
  },
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer))

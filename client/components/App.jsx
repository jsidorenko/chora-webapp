import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './About'
import Account from './Account'
import Connect from './Connect'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import Projects from './Projects'
import styles from './App.scss'

const App = () => (
  <div className={styles.container}>
    <div className={styles.background}>
      <img src="/img/logo_large.png" />
    </div>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/account" component={Account} />
      <Route path="/connect" component={Connect} />
      <Route path="/projects" component={Projects} />
    </Switch>
    <Footer />
  </div>
)

export default App

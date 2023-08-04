import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
// import {Redirect} from 'react-router-dom'
import './index.css'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onsubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onsubmitFailure = errorMsg => {
    this.setState({errorMsg, showErrorMsg: true})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onsubmitSuccess(data.jwt_token)
    } else {
      this.onsubmitFailure(data.error_msg)
    }
  }

  render() {
    const {showErrorMsg, username, password, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="LoginRoute_Container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png "
          alt="website logo"
          className="website_logo"
        />

        <form className="input_Container" onClick={this.submitForm}>
          <label htmlFor="username" className="label">
            USERNAME
          </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            className="input"
            onChange={this.onChangeUsername}
          />
          <label htmlFor="username" className="label">
            PASSWORD
          </label>
          <input
            type="password"
            id="username"
            value={password}
            placeholder="Password"
            className="input"
            onChange={this.onChangePassword}
          />
          <button type="submit" className="LoginButton">
            Login
          </button>
          {showErrorMsg && <p className="error_msg">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginRoute

import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const HeaderRoute = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const onClickLogo = () => {
    const {history} = props

    history.replace('/')
  }

  return (
    <nav className="nav_header">
      <div className="nav_bar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png "
          alt="website logo"
          className="website_logo"
          onClick={onClickLogo}
        />
        <ul className="list_items">
          <Link to="/">
            <li className="item">Home</li>
          </Link>
          <Link to="/Jobs">
            <li className="item">Jobs</li>
          </Link>
        </ul>

        <button type="button" className="logout_button" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}

export default withRouter(HeaderRoute)

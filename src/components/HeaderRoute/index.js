import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const HeaderRoute = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav_header">
      <div className="nav_bar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png "
          alt="website logo"
          className="website_logo"
        />
        <ul className="list_items">
          <li className="item">Home</li>
          <li className="item">Jobs</li>
        </ul>

        <button type="button" className="logout_button" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}

export default withRouter(HeaderRoute)

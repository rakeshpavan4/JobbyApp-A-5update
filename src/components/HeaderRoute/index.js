import './index.css'

const HeaderRoute = () => (
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

      <button type="button" className="logout_button">
        Logout
      </button>
    </div>
  </nav>
)

export default HeaderRoute

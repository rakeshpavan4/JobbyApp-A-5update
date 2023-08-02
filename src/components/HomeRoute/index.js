import HeaderRoute from '../HeaderRoute'
import './index.css'

const HomeRoute = () => (
  <>
    <HeaderRoute />
    <div className="Home_container">
      <div className="Home_content">
        <h1>Find the Job That Fit your life</h1>
        <p>Millions of people </p>
        <button type="button" className="Find_jobs_button">
          Find Jobs
        </button>
      </div>
    </div>
  </>
)

export default HomeRoute

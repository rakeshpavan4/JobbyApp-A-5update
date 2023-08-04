import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import HeaderRoute from '../HeaderRoute'
import JobCard from '../JobCard'
import FilterGroup from '../FilterGroup'

import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class JobsRoute extends Component {
  state = {
    jobsRole: [],
    apiStatus: apiStatusConstant.initial,
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/jobs'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.jobs.map(product => ({
        companyLogoUrl: product.company_logo_url,
        employmentType: product.employment_type,
        id: product.id,
        jobDescription: product.job_description,
        location: product.location,
        packagePerAnnum: product.package_per_annum,
        rating: product.rating,
        title: product.title,
      }))
      this.setState({
        jobsRole: updatedData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstant.failure,
      })
    }
  }

  renderSuccessView = () => {
    const {jobsRole} = this.state
    const lengthofList = jobsRole.length > 0

    return lengthofList ? (
      <div className="">
        <ul>
          {jobsRole.map(eachjob => (
            <JobCard jobData={eachjob} key={eachjob.id} />
          ))}
        </ul>
      </div>
    ) : (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
          alt="no jobs"
        />
      </div>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div className="failureview">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
      />
      <h1>Oops Something Went Wrong</h1>
      <p>we cannot seem to find the page your are looking for</p>
      <button type="button" className="RetryButton">
        Retry
      </button>
    </div>
  )

  renderJobRoutepage = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderSuccessView()
      case apiStatusConstant.failure:
        return this.renderFailureView()
      case apiStatusConstant.inProgress:
        return this.renderLoadingView()

      default:
        return null
    }
  }

  render() {
    return (
      <>
        <HeaderRoute />
        <div className="jobsContainer">
          <FilterGroup
            employmentTypesList={employmentTypesList}
            salaryRangesList={salaryRangesList}
          />
          {this.renderJobRoutepage()}
        </div>
      </>
    )
  }
}

export default JobsRoute

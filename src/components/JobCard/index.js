import {BsStar, BsFillBriefcaseFill} from 'react-icons/bs'
import {BiShield} from 'react-icons/bi'
// import {MdAccessibilityNew} from 'react-icons/md'
import './index.css'

const JobCard = props => {
  const {jobData} = props
  const {
    companyLogoUrl,
    employmentType,

    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = jobData
  return (
    <>
      <li className="jobDataContainer">
        <div className="logo-title">
          <img className="company-logo" src={companyLogoUrl} alt="ff" />
          <div className="title-rating">
            <h3>{title}</h3>
            <div className="rating">
              <BsStar className="rating_star" />

              <p>{rating}</p>
            </div>
          </div>
        </div>
        <div className="loction_package">
          <BiShield />

          <p>{location}</p>
          <BsFillBriefcaseFill />
          <p>{employmentType}</p>
          <div>
            <p>{packagePerAnnum}</p>
          </div>
        </div>
        <hr className="line" />
        <div>
          <p>Descrption</p>
          <p>{jobDescription}</p>
        </div>
      </li>
    </>
  )
}

export default JobCard

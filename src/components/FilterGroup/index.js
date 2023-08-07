import {BiSearch} from 'react-icons/bi'
import ProfileDetails from '../ProfileDetails'
import './index.css'

const FilterGroup = () => {
  const renderSearchInput = () => (
    //  const {getJobs, searchInput} = props
    <div className="search-input-container">
      <input
        type="search"
        className="search-input"
        placeholder="Search"
        // value={searchInput}
      />
      <button
        type="button"
        // id="searchButton"
        className="search-button-container"
        //   onClick={getJobs}
      >
        <BiSearch className="search-icon" />
      </button>
    </div>
  )

  return (
    <div>
      {renderSearchInput()}
      <ProfileDetails />
    </div>
  )
}

export default FilterGroup

import {BiSearch} from 'react-icons/bi'
import './index.css'

const FilterGroup = props => {
  const renderSearchInput = () => {
    const {getJobs, searchInput} = props
    return (
      <div className="search-input-container">
        <input
          type="search"
          className="search-input"
          placeholder="Search"
          value={searchInput}
        />
        <button
          type="button"
          id="searchButton"
          className="search-button-container"
          onClick={getJobs}
        >
          <BiSearch className="search-icon" />
        </button>
      </div>
    )
  }

  return <div>{renderSearchInput()}</div>
}

export default FilterGroup

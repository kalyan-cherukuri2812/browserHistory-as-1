import './index.css'

const History = props => {
  const {details, delHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = details

  const del = () => {
    delHistory(id)
  }
  return (
    <li className="li">
      <div className="div-1">
        <p className="time">{timeAccessed}</p>
        <div className="div-1-2">
          <div className="div-2">
            <img className="logo-img" src={logoUrl} alt="domain logo" />
            <div className="div-3">
              <p className="h">{title}</p>
              <p className="p">{domainUrl}</p>
            </div>
          </div>
          <button
            testid="delete"
            onClick={del}
            className="del-btn"
            type="button"
          >
            <img
              className="del-img"
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default History

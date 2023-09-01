// Write your code here
import './index.css'
import {Component} from 'react'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      secondInnings,
      umpires,
      venue,
      result,
    } = latestMatch

    return (
      <div className="Latest-match-card-container">
        <h1 className="Latest-match-heading">Latest Match</h1>
        <div className="Latest-match-card">
          <div className="Latest-match-Logo-container">
            <div className="Latest-match-details-main">
              <p className="Latest-match-team-name">{competingTeam}</p>
              <p className="latest-match-date">{date}</p>
              <p className="Latest-match-venue">{venue}</p>
              <p className="Latest-natch-status">{result}</p>
            </div>
            <img
              className="latest-match-logo"
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
            />
          </div>
          <div className="Latest-match-details-info">
            <div className="match-info-item">
              <p className="latest-match-details-label">First Innings</p>
              <p className="latest-match-details-value">{firstInnings}</p>
            </div>
            <div className="match-info-item">
              <p className="latest-match-details-label">Second Innings </p>
              <p className="Latest-match-details-value">{secondInnings}</p>
            </div>
            <div className="match-info-item">
              <p className="latest-match-details-label">Man Of The Match</p>
              <p className="Latest-match-details-value">{manOfTheMatch}</p>
            </div>
            <div className="match-info-item">
              <p className="latest-match-details-label">Umpires</p>
              <p className="Latest-match-details-value">{umpires} </p>{' '}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch

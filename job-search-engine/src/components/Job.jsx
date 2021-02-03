import { Row, Col } from "react-bootstrap";
import "../styles/Job.css";
import { withRouter, Link } from "react-router-dom";
import JobDetail from './JobDetail'
import {ImStarEmpty} from 'react-icons/im'

function Job(props) {
  return (
    <div className="job-wrapper">
      {/*<div style={{'display': 'none'}}>
        <JobDetail id={props.id}/>
      </div>*/}
      <Row>
        <Col xs={3}>
          <img src={props.img} className="img" />
        </Col>
        <Col>
          <Row>
            <Link to={`/jobDetails/${props.id}`}>
            <h6>{props.role}</h6>
            </Link>
          </Row>
          <Row>
            <Col xs={10}>
              <p>Location: {props.location}</p>
            </Col>
            <Col xs={10}>
              <p>
                Company webpage:
                <a href={props.companyUrl}>{props.companyUrl}</a>
              </p>
            </Col>
          </Row>
        </Col>
        <Col xs={2}>
          <ImStarEmpty style={{'margin': '1em', 'color': 'rgb(50, 76, 83)', 'fontSize': '2em', 'textAlign': 'right'}}/>
        </Col>
      </Row>
    </div>
  );
}

export default Job;

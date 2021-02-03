import { Row, Col } from "react-bootstrap";
import "../styles/Job.css";
import { withRouter } from "react-router-dom";
import JobDetail from './JobDetail'

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
            <h6>{props.role}</h6>
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
      </Row>
    </div>
  );
}

export default Job;

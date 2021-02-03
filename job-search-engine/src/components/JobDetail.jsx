import React, { Component } from "react";
import axios from "axios";
import {withRouter} from 'react-router-dom';

class JobDetail extends Component {
  state = {
    job: [],
  };

  componentDidMount(id) {
    axios.get(`/positions/241a62bb-3a28-476c-85c0-f9b19b7c3f49.json`)
      .then((res) => {
        console.log("RESSSSSSSSSSSSS ", res)
        this.setState({ job: res.data})
      });
    
  }

  render() {
    return (
      <div>
      {
        this.state.job && 
        <>
        <img src={this.state.job.company_logo} style={{'width':'200px', 'height':'200px'}}/>
        <p>{this.state.job.company}</p>
        <p>{this.state.job.location}</p>
        <p>{this.state.job.company_url}</p>
        </>
      }
        <h3></h3>
      </div>
    );
  }
}

export default withRouter(JobDetail);

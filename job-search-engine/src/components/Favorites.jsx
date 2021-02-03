import React, { Component } from 'react';
import MyHeader from './MyHeader';
import Job from './Job';
import axios from 'axios';
import { connect } from "react-redux";
import { Container } from 'react-bootstrap';

const mapStateToProps = (state) => state;

class Favorites extends Component {

    state = {
        jobs: []
    }

    componentDidMount(){
        this.props.favorites && this.props.favorites.map(id => {
            this.getJobs(id)
        })
    }

    getJobs = (id) => {
        let jobs = axios.get(`/positions/${id}.json`)
        .then(res => {
            console.log("res from favs:::::::", res.data);
            this.setState({ jobs: [...this.state.jobs, res.data]})
        })
        return jobs;
    }

    render() {
        return (
            <Container>
            { 
                this.state.jobs && this.state.jobs.map((job, index) => 
                        <Job 
                        id={job.id} 
                        img={job.company_logo} 
                        role={job.title} 
                        companyUrl={job.company_url} 
                        location={job.location}/>
                        )
            }     
            </Container>
        );
    }
}

export default connect(mapStateToProps)(Favorites);
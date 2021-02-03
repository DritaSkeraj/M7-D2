import React, { Component } from 'react';
import MyHeader from './MyHeader';
import Job from './Job';
import axios from 'axios';
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

class Favorites extends Component {

    state = {
        jobs: []
    }

    componentDidMount(){
        this.props.favorites && this.props.favorites.map(job => {
            axios.get(`/positions/${job}.json`)
                .then((res) => {
                    console.log("res from favs:::::::", res.data);
                    this.setState({ jobs: [...this.state.jobs, res.data]})
                });
        })
    }
    
    componentDidUpdate(prevProps, prevState){
        if(prevState.jobs.length != this.state.jobs.length){
            this.state.jobs.map(job => <p>{job}</p>)
        }
    }

    render() {
        return (
            <div>
            {
                setTimeout(() => {
                    this.state.jobs && this.state.jobs.map(job =>
                        <Job 
                    id={job.id} 
                    img={job.company_logo} 
                    role={job.title} 
                    companyUrl={job.company_url} 
                    location={job.location}/>)
                        
                }, 1000)
                //this.state.jobs && this.state.jobs.map(job => <p>{job}</p>)
                // this.state.jobs && this.state.jobs.map((job, index) => ({
                //     <Job 
                //     id={job.id} 
                //     img={job.company_logo} 
                //     role={job.title} 
                //     companyUrl={job.company_url} 
                //     location={job.location}/>
                    
                // }))
            }     
            </div>
        );
    }
}

export default connect(mapStateToProps)(Favorites);
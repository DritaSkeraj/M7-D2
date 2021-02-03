import React, { Component } from 'react';
import MyHeader from './MyHeader';
import MySearch from './MySearch';
import {Container} from 'react-bootstrap'
import JobsGroup from './JobsGroup';

class SearchPage extends Component {

    state = {
        location: '',
        role: ''
    }

    handleCallback = (searchData) =>{
        this.setState({...searchData})
    }

    style = {
        'backgroundColor': '#2ec4b6',
        'color' : '#f7fff7',
        'padding': '2em 1em',
        'marginTop': '1em',
        'borderRadius': '8px'
    }

    render() {
        return (
            <div>
                <MyHeader/>
                <Container style={{'margin': '4em 0em', 'margin': '0 auto'}}>
                  <div style={this.style}>
                    <h3 className='mt-2 mb-3'>Search by role and location:</h3>
                    <MySearch parentCallback = {this.handleCallback}/>
                  </div>
                    <JobsGroup location={this.state.location} role={this.state.role} />
                </Container>
            </div>
        );
    }
}

export default SearchPage;
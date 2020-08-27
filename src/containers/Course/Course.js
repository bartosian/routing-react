import React, { Component } from 'react';

class Course extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();
    }

    loadData() {
        if (this.props.match.params.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id != this.props.match.params.id)) {
                console.log("inside");
                
                this.setState({
                    loadedPost: {
                        title: this.props.match.params.title,
                        id: this.props.match.params.id
                    }
                });
            }
        }
    }

    render () {
        const course = this.state.loadedPost ? (
            <div>
                <h1>{this.state.loadedPost.title}</h1>
                <p>You selected the Course with ID: {this.state.loadedPost.id}</p>
            </div>
        ) : null;

        return  course;
    }
}

export default Course;
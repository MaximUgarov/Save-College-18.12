import React, { Component } from 'react'
import axios from 'axios'

export class Test extends Component {
    state = {
        test: [],
        isLoaded: false
    }

    componentDidMount() {
        axios.get('http://localhost:8000/wp-json/wp/v2/test')
        .then(res => this.setState({
            test: res.data,
            isLoaded: true
        }))
        .catch(err => console.log(err))
    }


    render() {

        const { test, isLoaded } = this.state

        console.log(this.state)

        return (
        <div>
               { test.map((test) => <h1>{test.title.rendered}</h1>)}
                </div>
        )
    
}

}

export default Test

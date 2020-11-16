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

    splitDescription(content) {
        return content.split('/n')
    }


    render() {

        const { test, isLoaded } = this.state

        console.log(this.state)

        return (
            <div>
                { test.map((test) => <div><h1 className="title-main">{test.title.rendered}</h1>
                    <div className="content-container-teamplatesPages">
                        <div className="text-block-wrapper">
                            <span className="text-block-contentText" dangerouslySetInnerHTML={{ __html: test.content.rendered }} />
                        </div>
                    </div>
                </div>)}
            </div>
        )

    }

}

export default Test

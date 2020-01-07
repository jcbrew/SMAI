import React, { Component } from 'react';
import Header from './Header';

class Adult extends Component {
    state = { adult: {} };

    componentDidMount() {
        //const proxyurl = "https://cors-anywhere.herokuapp.com/";
        //const url = "http://127.0.0.1:1234/content2.json"; // site that doesn’t send Access-Control-*

//const url = "http://southfieldmartialarts.com/content2.json";
//fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com

fetch('http://127.0.0.1:1234/content2.json')

// .then(response => response.text())
 //.then(contents => console.log('contents', contents))

.then(response => response.json())
.then(json => this.setState({ adult: json }));

// .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"));


        // fetch('https://southfieldmartialarts.com/content.json')
        // .then(response => console.log('response', response));
    }

    render() {

        const { header, subhead, body } = this.state.adult;
        return (
            <div>
                <Header />
                
                <div>
                <h1>{header}</h1>
                <h2>{subhead}</h2>
                <section className='contentBody'>
                    <p className='content'>{body}</p>
                    
                    <div className='content' dangerouslySetInnerHTML={{__html: this.state.adult.body}} />
                </section>
                </div>
            </div>
        )
    }
}

export default Adult;
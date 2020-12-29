import React, { Component } from 'react';

import { connect } from 'react-redux';

import { question1, question2, question3, question4, question5, question6 } from '../actions/faq'

class Faq extends Component {

    render() {
        return (
            <div className="mb-5">


                <h3>xxxCommon Questions About Karate</h3>
                <section className='masterButtons'>
                    <button onClick={this.props.onQ1} className='btn btn-dark mr-2 my-2'>What is Karate?</button>
                    <button onClick={this.props.onQ4} className='btn btn-dark mr-2 my-2'>What will I learn in the beginning?</button>
                    <button onClick={this.props.onQ3} className='btn btn-dark mr-2 my-2'>Is karate training difficult?</button>
                    <button onClick={this.props.onQ2} className='btn btn-dark mr-2 my-2'>Who can do karate?</button>
                    <button onClick={this.props.onQ5} className='btn btn-dark mr-2 my-2'>How will karate help me?</button>
                    <button onClick={this.props.onQ6} className='btn btn-dark mr-2 my-2'>How often should I train?</button>
                </section>


                <section>
                    <div className="row">
                        <div className="col-12"><h4>{this.props.question}</h4></div>
                    </div>
                    <div className="row">
                        <div className="col-12"><p>{this.props.answer}</p></div>
                    </div>


                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        question: state.faqReducer.question,
        answer: state.faqReducer.answer,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onQ1: () => dispatch(question1()),
        onQ2: () => dispatch(question2()),
        onQ3: () => dispatch(question3()),
        onQ4: () => dispatch(question4()),
        onQ5: () => dispatch(question5()),
        onQ6: () => dispatch(question6())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Faq);
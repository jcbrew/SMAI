import React, { Component } from 'react';

import { connect } from 'react-redux';

import { sunday, monday, tuesday, wednesday, thursday, friday, saturday } from '../actions/calendar'

class Calendar extends Component {

    render() {
        return (
            <div className="container py-5">
                {/* <div className="card mb-5"> */}


                {/* <div className="card-body"> */}
                <section>
                    <h3>Weekly Schedule</h3>
                    <p><em>Click on the buttons below to view our schedule for each day.</em></p>
                </section>

                <section className='masterButtons'>
                    <button onClick={this.props.onSunday} className='btn btn-dark mr-2 my-2'>Sunday</button>
                    <button onClick={this.props.onMonday} className='btn btn-dark mr-2 my-2'>Monday</button>
                    <button onClick={this.props.onTuesday} className='btn btn-dark mr-2 my-2'>Tuesday</button>
                    <button onClick={this.props.onWednesday} className='btn btn-dark mr-2 my-2'>Wednesday</button>
                    <button onClick={this.props.onThursday} className='btn btn-dark mr-2 my-2'>Thursday</button>
                    <button onClick={this.props.onFriday} className='btn btn-dark mr-2 my-2'>Friday</button>
                    <button onClick={this.props.onSaturday} className='btn btn-dark mr-2 my-2'>Saturday</button>
                </section>


                <section>
                    <div className="row">
                        <div className="col-12">{this.props.day}</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 font-weight-bold">{this.props.time1_title}</div>
                        <div className="col-sm-6">{this.props.time1}</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 font-weight-bold">{this.props.time2_title}</div>
                        <div className="col-sm-6">{this.props.time2}</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 font-weight-bold">{this.props.time3_title}</div>
                        <div className="col-sm-6">{this.props.time3}</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 font-weight-bold">{this.props.time4_title}</div>
                        <div className="col-sm-6">{this.props.time4}</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 font-weight-bold">{this.props.time5_title}</div>
                        <div className="col-sm-6">{this.props.time5}</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 font-weight-bold">{this.props.time6_title}</div>
                        <div className="col-sm-6">{this.props.time6}</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 font-weight-bold">{this.props.time7_title}</div>
                        <div className="col-sm-6">{this.props.time7}</div>
                    </div>

                </section>
                {/* </div> */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        time1: state.calendarReducer.time1,
        time1_title: state.calendarReducer.time1_title,
        time2: state.calendarReducer.time2,
        time2_title: state.calendarReducer.time2_title,
        time3: state.calendarReducer.time3,
        time3_title: state.calendarReducer.time3_title,
        time4: state.calendarReducer.time4,
        time4_title: state.calendarReducer.time4_title,
        time5: state.calendarReducer.time5,
        time5_title: state.calendarReducer.time5_title,
        time6: state.calendarReducer.time6,
        time6_title: state.calendarReducer.time6_title,
        time7: state.calendarReducer.time7,
        time7_title: state.calendarReducer.time7_title,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSunday: () => dispatch(sunday()),
        onMonday: () => dispatch(monday()),
        onTuesday: () => dispatch(tuesday()),
        onWednesday: () => dispatch(wednesday()),
        onThursday: () => dispatch(thursday()),
        onFriday: () => dispatch(friday()),
        onSaturday: () => dispatch(saturday())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
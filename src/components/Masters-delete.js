import React, { Component } from 'react';
// import { createStore } from 'redux'
import Header from './Header';


import { connect } from 'react-redux';

class Masters extends Component {

    render() {
        return (
            <div>
            <Header />
            <div className='bannerWrapper masters'>
                <div className='bannerTitle'>Lorum Ipsum</div>
            </div>
           
            
            <div>
            <section className='masterButtons'>
            <button onClick={this.props.onKyan} className='btn btn-dark mr-2'>Kyan</button>
            <button onClick={this.props.onMotobu} className='btn btn-dark mr-2'>Motobu</button>
            <button onClick={this.props.onMyagi} className='btn btn-dark mr-2'>Myagi</button>
            <button onClick={this.props.onShimibuku} className='btn btn-dark mr-2'>Shimibuku</button>
            <button onClick={this.props.onChapman} className='btn btn-dark mr-2'>Chapman</button>
            <button onClick={this.props.onUezu} className='btn btn-dark mr-2'>Uezu</button>
            <button onClick={this.props.onNagle} className='btn btn-dark mr-2'>Nagle</button>
            <button onClick={this.props.onNoxon} className='btn btn-dark mr-2'>Noxon</button>
            <button onClick={this.props.onAdams} className='btn btn-dark mr-2'>Adams</button>
            </section>

            <section>
            <h2>{this.props.master}</h2>
            </section>
            
            <section className='content'>
            {this.props.text}
            </section>
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        master:state.master,
        text:state.text
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onKyan: () => dispatch({type:'KYAN'}),
        onMotobu: () => dispatch({type:'MOTOBU'}),
        onMyagi: () => dispatch({type:'MYAGI'}),
        onShimibuku: () => dispatch({type:'SHIMIBUKU'}),
        onChapman: () => dispatch({type:'CHAPMAN'}),
        onUezu: () => dispatch({type:'UEZU'}),
        onNagle: () => dispatch({type:'NAGLE'}),
        onNoxon: () => dispatch({type:'NOXON'}),
        onAdams: () => dispatch({type:'ADAMS'})
    }
};

export default connect (mapStateToProps, mapDispatchToProps) (Masters);
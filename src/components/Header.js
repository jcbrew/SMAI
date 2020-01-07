import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/logo.jpg';

const Header = () => {
    const style = {
        display: 'inline-block',
        margin: 10,
        marginBottom: 30
    };
    const divStyle = {
        backgroundColor: '#000'
    };
    return (
        // <div style={divStyle} className='header'>
        //     <img src={logo} className='logo' alt="Logo" />
        //     <h3 style={style}><Link to='/'>Home</Link></h3>
        //     {/*<h3 style={style}><Link to='/intro'>Intro</Link></h3>*/}
        //     <h3 style={style}><Link to='/adult'>Adult</Link></h3>
        //     <h3 style={style}><Link to='/children'>Children</Link></h3>
        //     <h3 style={style}><Link to='/history'>History</Link></h3>
        //     <h3 style={style}><Link to='/masters'>Masters</Link></h3>
        //     <h3 style={style}><Link to='/contact'>Contact Us</Link></h3>
        //     <h3 style={style}><Link to='/newsletter'>Newsletter</Link></h3>
        // </div>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <img src={logo} className='logo' alt="Logo" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/adult'>Adult</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/children'>Children</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/history'>History</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/masters'>Masters</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/contact'>Contact Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/newsletter'>Newsletter</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;
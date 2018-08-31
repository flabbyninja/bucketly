import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <a className="navbar-brand" tabindex="0">Menu</a>
                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" tabindex="0">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" tabindex="0">Link</a>
                            </li>
                        </ul>
                    </div>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search
                        </button>
                    </form>
                </nav>
            </div>
        );
    }
}

export default Header;

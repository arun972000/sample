import React from "react";
import "./haeder.css"


const Head = ({count}) => {
    return (<div className="m-3">
        <div style={{position:"fixed",zIndex:9999 ,top:0,width:"100%"}}>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="www.google.com">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="www.google.com">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="www.google.com">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="www.google.com" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="www.google.com">Action</a></li>
                                <li><a className="dropdown-item" href="www.google.com">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="www.google.com">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">{count} Cartlist</button>
                    </form>
                </div>
            </div>
        </nav>
        </div>
        <header className="heading">
            <div className="container">
                <div className="text-center py-5">
                    <h1 className="headcolor pt-3 pb-2">Shop in style</h1>
                    <p className="grey pb-3">With this shop hompeage template</p>
                </div>
            </div>
        </header>
    </div>)
}

export default Head;
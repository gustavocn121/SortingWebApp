
import React from "react";

function Header() {
    return (
    <header className="col-12 d-inline-flex justify-content-between">
        <div className>
            <h1>Learn Sorting. </h1>
        </div>
        <div>
            <nav className="nav">
                <ul className="nav-bar d-inline-flex ">
                    <li className="nav-item"><a href="/">Home</a></li>
                    <li className="nav-item"><a href="/">Sorting Methods</a></li>
                    <li className="nav-item"><a href="/">Contact</a></li>
                    <li className="nav-item"><a href="/">About</a></li>
                </ul>
            </nav>
        </div>
    </header>
    );
};

export default Header;
import * as React from "react";

const Navbar: React.FC = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary justify-content-between">
                <a className="navbar-brand" href="/">ReactTS - Word Count</a>
                <a className="navbar-text" href = "https://aazstudio.com/">Aqid Azhar</a>
            </nav>
        </div>
    )
}

export default Navbar;


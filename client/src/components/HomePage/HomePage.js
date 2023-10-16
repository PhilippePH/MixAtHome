import React, { Fragment } from 'react';
import NavBar from "../NavBar/NavBar";


const HomePage = () => {
    return(
        <Fragment>
            <NavBar></NavBar>
        <div className="Home">
            <header className="Home-header">
                <p>
                    Welcome friend!
                </p>
            </header>
        </div>
        </Fragment>
    )
}

export default HomePage;
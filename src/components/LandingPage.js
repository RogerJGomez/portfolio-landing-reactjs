import React from 'react'
import {Grid, Cell} from 'react-mdl'

export default function LandingPage() {
    return (
        <div style={{ width: '100%', margin:'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img className="profile-pic" src="/cartoon-rg.png" alt="profile"/>
                    <div className="banner-text" >
                        <h1>Front-End Developer</h1>
                        <hr/>
                         <p>| HTML | CSS |  SCSS | Redux | Bootstrap | ReactJS | NodeJS | PHP |</p>   
                        <div className="social-links">
                            <a href="https://www.youtube.com/"><i className="fa fa-linkedin-square"></i></a>
                            <a href="https://www.youtube.com/"><i className="fa fa-github"></i></a>
                            <a href="https://www.youtube.com/"><i className="fa fa-free-code-camp"></i></a>
                            <a href="https://www.youtube.com/"><i className="fa fa-free-code-camp"></i></a>
                        </div>
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}

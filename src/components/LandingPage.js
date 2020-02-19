import React from 'react'
import {Grid, Cell} from 'react-mdl'
export default function LandingPage() {
    return (
        <div style={{ width: '100%', margin:'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <div className="banner-text" >
                        <h1>Roger Gómez</h1>
                        <h3>Front-End Developer</h3>
                        <hr/>
                         <p>| HTML | SCSS | Redux | Bootstrap | ReactJS | NodeJS | PHP |</p>   
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/rogerjgomez"><i className="fa fa-linkedin-square"></i></a>
                            <a href="http://github.com/rogerjgomez"><i className="fa fa-github"></i></a>
                            <a href="https://codepen.io/rogerjgomez"><i className="fa fa-codepen"></i></a>
                            <a href="mailto:gomez.roger779@gmail.com"><i className="fa fa-envelope"></i></a>
                        </div>
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}

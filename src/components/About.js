import React  from 'react'
import {Grid, Cell, ProgressBar} from 'react-mdl'
import Fade from 'react-reveal/Fade'

export default function About() {
  return (
    <div className="contact-body"> 
      <Grid className="contact-grid">
        <Cell col={6}>
            <Fade left>  
              <img className="profile-pic" src="/cartoon-rg.png" alt="profile"/>
              <h2>Roger Gómez</h2>
              <p>Front-end developer from Venezuela. Currently working at the Argentinian marketing agency <a style={{textDecoration:'none', color:'white', fontWeight:'bold'}} target="_blank" rel="noopener noreferrer" href="https://clichead.com/">Clichead</a>, 
              where I'm in charge of developing and maintaining dozens of websites built with WordPress, for small and medium sized businesses based all over the world.</p>
              <p>I'm an avid tech enthusiast, trying to keep in touch with current and emerging technologies and aiming to learn and improve my skills every day.</p>
            </Fade>
        </Cell>
        <Cell col={6}>
          <Fade right>
            <h2>Skills</h2>
            <hr/>
          </Fade>
          <div className="contact-list">
            <Fade right>
              <h4>JS: </h4><ProgressBar progress={70} />
              <h4>React: </h4><ProgressBar progress={75} />
              <h4>Redux: </h4><ProgressBar progress={65} />
              <h4>CSS/SCSS: </h4><ProgressBar progress={82} />
              <h4>Bootstrap: </h4><ProgressBar progress={90} />
            </Fade>
          </div>       
        </Cell>
      </Grid>
    </div>
  )
}

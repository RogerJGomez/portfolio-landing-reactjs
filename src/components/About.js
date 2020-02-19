import React  from 'react'
import {Grid, Cell, ProgressBar} from 'react-mdl'
import Fade from 'react-reveal/Fade';
export default function About() {

    return (

        <div className="contact-body"> 
            <Grid className="contact-grid">
       
                <Cell col={6}>
                    <Fade left>    
                        <img className="profile-pic" src="/cartoon-rg.png" alt="profile"/>
                    <h2>Roger Gómez</h2>
                    <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
                    </Fade>
                </Cell>
                
                <Cell col={6}>
                    <Fade right>
                        <h2>Skills</h2>
                        <hr/>
                    </Fade>
                    <div className="contact-list">
                        <Fade right>
                        <h4>JS: </h4><ProgressBar progress={65} />

                        <h4>React: </h4><ProgressBar progress={75} />

                        <h4>Redux: </h4><ProgressBar progress={60} />

                        <h4>CSS/SCSS: </h4><ProgressBar progress={80} />

                        <h4>Bootstrap: </h4><ProgressBar progress={80} />
                        </Fade>
                    </div>       
                </Cell>
                
            </Grid>
            
        </div>
       
    )
}

import React, { useState } from 'react'
import {Tabs, Tab, Grid, Cell, Card, CardTitle,
CardActions, CardText} from 'react-mdl'
import {Slide} from 'react-reveal'

const styles={
    width:'400px', margin:'auto', textAlign:'center',
    borderRadius:'10px',background: '#25584A'
}

const textStyle ={
    color:'white'
}


export default function Projects() {
   const  [activeTab, setActiveTab] = useState(0)

    const ToggleCategories = () =>{
        
        switch(activeTab){

            case 0:

                return(

                <div className="projects-grid" >
                    
                    <Card style={styles}>
                        <CardTitle style={{color:'white' ,height:'220px',  background:'url(/fut-react.jpg) center / cover'}}></CardTitle>
                            <CardText>
                            <h4 style={textStyle}>Ultimate Team App</h4>
                            <p  style={textStyle}>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                                    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.</p>
                            </CardText>
                            <CardActions style={{textAlign:'center', background:'#1f4037'}} border>
                                <a href="https://github.com/RogerJGomez/FIFA-Ultimate-Team-App-ReactJS"style={textStyle} className="mdl-button mdl-js-button">Github</a>
                                <a href="https://futhead-app.herokuapp.com"style={textStyle} className="mdl-button mdl-js-button">LiveDemo</a>
                            </CardActions>
                    </Card>

                    <Card style={styles}>
                        <CardTitle style={{color:'white',height:'220px', background:'url(/gaming-store.jpg) center / cover'}}></CardTitle>
                        <CardText>
                            <h4 style={textStyle}>Gaming Store App</h4>
                            <p style={textStyle}>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                                Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.</p>
                        </CardText>
                        <CardActions style={{textAlign:'center', background:'#1f4037'}} border>
                            <a href="https://github.com/RogerJGomez/Gaming-Store-App"style={textStyle} className="mdl-button mdl-js-button">Github</a>
                            <button style={textStyle} className="mdl-button mdl-js-button">LiveDemo</button>
                        </CardActions>
                    </Card>

                    <Card style={styles}>
                        <CardTitle style={{color:'white' ,height:'220px', background:'url(/code-react.jpg) center / cover'}}></CardTitle>
                        <CardText>
                            <h4 style={textStyle}>Markdown Previewer</h4>
                            <p style={textStyle}>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                                Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.</p>
                        </CardText>
                        <CardActions style={{textAlign:'center', background:'#1f4037'}} border>                   
                            <button style={textStyle} className="mdl-button mdl-js-button">Github</button>
                            <a href="https://codepen.io/rogerjgomez/pen/VwLazgo"style={textStyle} className="mdl-button mdl-js-button">LiveDemo</a>
                        </CardActions>
                    </Card>

                </div>

                )

            case 2:

                return(
                <Slide right>
                <div className="projects-grid">
                    
                    <Card style={styles}>
                        <CardTitle style={{color:'white',height:'220px', background:'url(/client-system.jpg) center / cover'}}></CardTitle>
                         <CardText>
                            <h4 style={textStyle}>CRUD with Login</h4>
                            <p style={textStyle}>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                                Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.</p>
                         </CardText>
                         <CardActions style={{textAlign:'center', background:'#1f4037'}} border>
                            <a href="https://github.com/RogerJGomez/System"style={textStyle} className="mdl-button mdl-js-button">Github</a>
                            <button style={textStyle} className="mdl-button mdl-js-button">LiveDemo</button>
                         </CardActions>
                    </Card>

                     <Card style={styles}>
                        <CardTitle style={{color:'white' ,height:'220px', background:'url(/todo-php.jpg) center / cover'}}></CardTitle>
                        <CardText>
                            <h4 style={textStyle}>To do App</h4>
                            <p style={textStyle}>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                                Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.</p>
                        </CardText>
                        <CardActions style={{textAlign:'center', background:'#1f4037'}} border>
                            <a href="https://github.com/RogerJGomez/To-do-app-php-mysql-ajax-jquery"style={textStyle} className="mdl-button mdl-js-button">Github</a>
                            <button style={textStyle} className="mdl-button mdl-js-button">LiveDemo</button>
                        </CardActions>
                     </Card>
                     
                 </div> 
                 </Slide>
                )

            case 1:
                
                return(
                    <Slide right>
                    <div className="projects-grid">
                        
                        <Card style={styles}>
                            <CardTitle style={{color:'white',height:'220px', background:'url(/show-off.jpg) center / cover'}}></CardTitle>
                             <CardText>
                                <h4 style={textStyle}>Show Off</h4>
                                <p style={textStyle}>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                                    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.</p>
                             </CardText>
                             <CardActions style={{textAlign:'center', background:'#1f4037'}} border>
                                <a href="https://show-off.com.ar/"style={textStyle} className="mdl-button mdl-js-button">Visit Site</a>
                             </CardActions>
                        </Card>
    
                         <Card style={styles}>
                            <CardTitle style={{color:'white' ,height:'220px', background:'url(/la-farina.jpg) center / cover'}}></CardTitle>
                            <CardText>
                                <h4 style={textStyle}>La Farina</h4>
                                <p style={textStyle}>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                                    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.</p>
                            </CardText>
                            <CardActions style={{textAlign:'center', background:'#1f4037'}} border>
                                <a href="https://lafarinapastas.com.ar/"style={textStyle} className="mdl-button mdl-js-button">Visit Site</a>
                            </CardActions>
                         </Card>

                         <Card style={styles}>
                            <CardTitle style={{color:'white' ,height:'220px', background:'url(/olanda.jpg) center / cover'}}></CardTitle>
                            <CardText>
                                <h4 style={textStyle}>Olanda</h4>
                                <p style={textStyle}>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                                    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.</p>
                            </CardText>
                            <CardActions style={{textAlign:'center', background:'#1f4037'}} border>
                                <a href="https://olanda.com.ar/"style={textStyle} className="mdl-button mdl-js-button">Visit Site</a>
                            </CardActions>
                         </Card>
                         
                     </div> 
                     </Slide>
                    )

            default:
                return(
                null
            )
        }
    }
    return (
        <>  
            <svg id="bigTriangleColor1" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 102" preserveAspectRatio="none">
            <path d="M0 0 L50 100 L100 0 Z"></path>
            </svg>
            <div className="projects-section">
                <Tabs  activeTab = {activeTab} onChange={(tabId) => setActiveTab(tabId)}>
                    <Tab>
                       <strong>React</strong>
                    </Tab>
                    <Tab>
                    <strong> WordPress</strong>
                    </Tab>
                    <Tab>
                    <strong> PHP</strong>
                    </Tab>
                </Tabs>
                    
                <Grid style={{marginTop:'40px'}}>
                    <Cell col={12}>
                        <div className="content">

                            <ToggleCategories />

                        </div>
                    </Cell>
                </Grid>
            </div>
            <svg id="bigTriangleColor2" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 102 " preserveAspectRatio="none">
            <path d="M0 0 L50 100 L100 0 Z"></path>
            </svg>
        </>
    )
}


import React, { useState } from 'react'
import {Tabs, Tab, Grid, Cell, Card, CardTitle,
CardActions, CardText} from 'react-mdl'
import {Slide} from 'react-reveal'

const styles = {
    width:'28%', margin:'auto', textAlign:'center',
    borderRadius:'10px',background: '#25584A'
}

const textStyle = {
    color:'white'
}

const titleStyle={
    color:'white', textShadow: '2px 2px 5px black'
}

const techStyle = {
    color:'white', textAlign:'center'
}


export default function Projects() {
    
   const  [activeTab, setActiveTab] = useState(0)

    const ToggleCategories = () =>{
        
        switch(activeTab){

            case 0:

                return(

                <div className="projects-grid" >
                    
                    <Card style={styles}>
                        <CardTitle style={{color:'white' ,height:'30vh',  background:'url(/fut-react.jpg) center / cover'}}></CardTitle>
                        <CardText>
                            <h4 style={titleStyle}>FIFA Ultimate Team</h4>
                            <p style={textStyle}>Add and remove players dynamically to the field to create the perfect squad, you can also search players by name in each position.</p>
                            <p style={techStyle}>Bootstrap</p>
                        </CardText>
                        <CardActions style={{textAlign:'center', background:'#1f4037'}} border>
                            <a href="https://github.com/RogerJGomez/fifa-ultimate-team-app-reactjs" target="_blank" rel="noopener noreferrer" 
                            style={textStyle} className="mdl-button mdl-js-button">Github</a>
                            <a href="https://ultimateteam.netlify.app" target="_blank" rel="noopener noreferrer" 
                            style={textStyle} className="mdl-button mdl-js-button">LiveDemo</a>
                        </CardActions>
                    </Card>

                    <Card style={styles}>
                        <CardTitle style={{color:'white',height:'30vh', background:'url(/gaming-store.jpg) center / cover'}}></CardTitle>                  
                        <CardText>
                            <h4 style={titleStyle}>Gaming Store App</h4>
                            <p style={textStyle}>Create a shopping cart from a list of products in the store, you can keep track of the quantity of items and total amount of the order.</p>
                            <p style={techStyle}>Redux - Reactstrap</p>
                        </CardText>
                        <CardActions style={{textAlign:'center', background:'#1f4037'}} border>
                            <a href="https://github.com/RogerJGomez/gaming-store-app" target="_blank" rel="noopener noreferrer" 
                            style={textStyle} className="mdl-button mdl-js-button">Github</a>
                            <button style={textStyle} className="mdl-button mdl-js-button">LiveDemo</button>
                        </CardActions>
                    </Card>

                    <Card style={styles}>
                        <CardTitle style={{color:'white' ,height:'30vh', background:'url(/headline.jpg) center / cover'}}></CardTitle>
                        <CardText>
                            <h4 style={titleStyle}>Headline Music Events</h4>
                            <p style={textStyle}>Find incoming events of your favorite music artists, you can search them by name. Events are tracked using the Bandsintown API.</p>
                            <p style={techStyle}>React-MDL</p>
                        </CardText>
                        <CardActions style={{textAlign:'center', background:'#1f4037'}} border>                   
                            <a href="https://github.com/RogerJGomez/Headline-Music-Events" target="_blank" rel="noopener noreferrer" 
                            style={textStyle} className="mdl-button mdl-js-button">Github</a>
                            <a href="https://headlinemusic.netlify.com/" target="_blank" rel="noopener noreferrer"
                            style={textStyle} className="mdl-button mdl-js-button">LiveDemo</a>
                        </CardActions>         
                    </Card>

                </div>

                )

            case 2:

                return(

                <Slide right>
                    <div className="projects-grid">
                        
                        <Card style={styles}>
                            <CardTitle style={{color:'white',height:'30vh', background:'url(/client-system.jpg) center / cover'}}></CardTitle>
                            <CardText>
                                <h4 style={titleStyle}>Company Administrator App</h4>
                                <p style={textStyle}> Manage your company staff and clients data by adding, editing and deleting their info asynchronously.</p>
                                <p style={techStyle}>JQuery - Ajax - MySQL</p>
                            </CardText>
                            <CardActions style={{textAlign:'center', background:'#1f4037'}} border>
                                <a href="https://github.com/RogerJGomez/Company-Staff-Handler" target="_blank" rel="noopener noreferrer" 
                                style={textStyle} className="mdl-button mdl-js-button">Github</a>
                                <button style={textStyle} className="mdl-button mdl-js-button">LiveDemo</button>
                            </CardActions>
                        </Card>

                        <Card style={styles}>
                            <CardTitle style={{color:'white',height:'30vh', background:'url(/todo-php.jpg) center / cover'}}></CardTitle>
                            <CardText>
                                <h4 style={titleStyle}>Task Scheduler</h4>
                                <p style={textStyle}>Keep track of pending activities, you can download a text version of your to-do lists.</p>
                                <p style={techStyle}>JQuery - Ajax - MySQL</p>
                            </CardText>
                            <CardActions style={{textAlign:'center', background:'#1f4037'}} border>
                                <a href="https://github.com/RogerJGomez/To-do-app-php-mysql-ajax-jquery" target="_blank" rel="noopener noreferrer"
                                style={textStyle} className="mdl-button mdl-js-button">Github</a>
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
                                <CardTitle style={{color:'white',height:'30vh', background:'url(/show-off.jpg) center / cover'}}></CardTitle>
                                <CardText>
                                    <h4 style={titleStyle}>Show Off</h4>
                                    <p style={textStyle}>Website and personal portfolio of argentinian designer Fer Devito.</p>
                                </CardText>
                                <CardActions style={{textAlign:'center', background:'#1f4037'}} border>
                                    <a href="https://show-off.com.ar/" target="_blank" rel="noopener noreferrer" 
                                    style={textStyle} className="mdl-button mdl-js-button">Visit Site</a>
                                </CardActions>
                            </Card>
        
                            <Card style={styles}>
                                <CardTitle style={{color:'white',height:'30vh', background:'url(/la-farina.jpg) center / cover'}}></CardTitle>
                                <CardText>
                                    <h4 style={titleStyle}>La Farina</h4>
                                    <p style={textStyle}>Website for argentinian food distributer La Farina.</p>
                                </CardText>
                                <CardActions style={{textAlign:'center', background:'#1f4037'}} border>
                                    <a href="https://lafarinapastas.com.ar/" target="_blank" rel="noopener noreferrer" 
                                    style={textStyle} className="mdl-button mdl-js-button">Visit Site</a>
                                </CardActions>
                            </Card>

                            <Card style={styles}>
                                <CardTitle style={{color:'white',height:'30vh', background:'url(/olanda.jpg) center / cover'}}></CardTitle>
                                <CardText>
                                    <h4 style={titleStyle}>Olanda</h4>
                                    <p style={textStyle}>Online clothing store made with Woocommerce. It accepts multiple payment methods.</p>
                                </CardText>
                                <CardActions style={{textAlign:'center', background:'#1f4037'}} border>
                                    <a href="https://olanda.com.ar/" target="_blank" rel="noopener noreferrer"
                                    style={textStyle} className="mdl-button mdl-js-button">Visit Site</a>
                                </CardActions>
                            </Card>
                            
                        </div> 

                     </Slide>

                    )

            default:
                return null

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
                    
                <Grid style={{marginTop:'5vh'}}>              
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


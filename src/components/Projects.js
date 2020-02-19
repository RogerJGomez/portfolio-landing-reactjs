import React, { Component } from 'react'
import {Tabs, Tab, Grid, Cell, Card, CardTitle,
CardActions, CardText} from 'react-mdl'

const styles={
    width:'400px', margin:'auto', textAlign:'center',
    borderRadius:'10px',background: '#25584A'
}

const textStyle ={
    color:'white'
}
export default class Projects extends Component {
    
    constructor(props){
        super(props)
        this.state = {activeTab: 0};
    }

    toggleCategories = () =>{
        
        switch(this.state.activeTab){

            case 0:
                return(
                <div className="projects-grid">
                   <Card style={styles}>
                       <CardTitle style={{color:'white' ,height:'220px',  background:'url(/fut-react.jpg) center / cover'}}></CardTitle>
                        <CardText>
                        <h4 style={textStyle}>Ultimate Team App</h4>
                        <p  style={textStyle}>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                                Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.</p>
                        </CardText>
                        <CardActions style={{textAlign:'center', background:'#1f4037'}} border>
                            <a href="/"style={textStyle} className="mdl-button mdl-js-button">Github</a>
                            <a href="/"style={textStyle} className="mdl-button mdl-js-button">LiveDemo</a>
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
                            <a href="/"style={textStyle} className="mdl-button mdl-js-button">Github</a>
                            <a href="/"style={textStyle} className="mdl-button mdl-js-button">LiveDemo</a>
                        </CardActions>
                    </Card>

                    
                    <Card style={styles}>
                        <CardTitle style={{color:'white' ,height:'220px', background:'url(/todo-react.jpg) center / cover'}}></CardTitle>
                        <CardText>
                            <h4 style={textStyle}>To do App</h4>
                            <p style={textStyle}>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                                Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.</p>
                        </CardText>
                        <CardActions style={{textAlign:'center', background:'#1f4037'}} border>
                            <a href="/"style={textStyle} className="mdl-button mdl-js-button">Github</a>
                            <a href="/"style={textStyle} className="mdl-button mdl-js-button">LiveDemo</a>
                        </CardActions>
                    </Card>
                </div>
                )
            case 1:
                return(
                <div className="projects-grid">
                    <Card style={styles}>
                        <CardTitle style={{color:'white',height:'220px', background:'url(/client-system.jpg) center / cover'}}></CardTitle>
                         <CardText>
                            <h4 style={textStyle}>Client System</h4>
                            <p style={textStyle}>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                                Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.</p>
                         </CardText>
                         <CardActions style={{textAlign:'center', background:'#1f4037'}} border>
                            <a href="/"style={textStyle} className="mdl-button mdl-js-button">Github</a>
                            <a href="/"style={textStyle} className="mdl-button mdl-js-button">LiveDemo</a>
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
                        <a href="/"style={textStyle} className="mdl-button mdl-js-button">Github</a>
                        <a href="/"style={textStyle} className="mdl-button mdl-js-button">LiveDemo</a>
                        </CardActions>
                     </Card>
                 </div> 
                )
            default:
                return(
                null
            )
        }
    }

    render() {
        return (
        <>  
            <svg id="bigTriangleColor1" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 102" preserveAspectRatio="none">
            <path d="M0 0 L50 100 L100 0 Z"></path>
            </svg>
            <div className="projects-section" id="projects">
                <Tabs ripple activeTab = {this.state.activeTab} onChange={(tabId) => this.setState({activeTab:tabId})}>
                    <Tab>
                       <strong> React</strong>
                    </Tab>
                    <Tab>
                    <strong> PHP</strong>
                    </Tab>
                </Tabs>
                    
                <Grid style={{marginTop:'40px'}}>
                    <Cell col={12}>
                        <div className="content">
                            {this.toggleCategories()}
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
}


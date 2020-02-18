import React, { Component } from 'react'
import {Tabs, Tab, Grid, Cell, Card, CardTitle,
CardActions, Button, CardText} from 'react-mdl'

const styles={
    minWidth:'450', margin:'auto', textAlign:'center',
    borderRadius:'10px'
}

const cardStyles = {
    color:'#fff' ,height:'176px', background:'url(/react.png) center / cover'
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
                   <Card shadow={5} style={styles}>
                       <CardTitle style={cardStyles}>React Project 1</CardTitle>
                        <CardText>
                            <p>SFSDFDGDSGDGSDFGSDGS</p>
                        </CardText>
                        <CardActions style={{textAlign:'center'}} border>
                            <Button colored>Github</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                   </Card>

                    <Card shadow={5} style={styles}>
                    <CardTitle style={cardStyles}>React Project 2</CardTitle>
                    <CardText>
                        loreasdadasdasdadafaasdf dASDASD AFASD
                    </CardText>
                    <CardActions style={{textAlign:'center'}} border>
                        <Button colored>Github</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    </Card>

                    
                    <Card shadow={5} style={styles}>
                    <CardTitle style={cardStyles}>React Project 3</CardTitle>
                    <CardText>
                        loreasdadasdasdadafaasdf dASDASD AFASD
                    </CardText>
                    <CardActions style={{textAlign:'center'}} border>
                        <Button colored>Github</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    </Card>
                </div>
                )
            case 1:
                return(
                <div className="projects-grid">
                    <Card shadow={5} style={styles}>
                        <CardTitle style={cardStyles}>PHP Project 1</CardTitle>
                         <CardText>
                             loreasdadasdasdadafaasdf dASDASD AFASD
                         </CardText>
                         <CardActions style={{textAlign:'center'}} border>
                             <Button colored>Github</Button>
                             <Button colored>LiveDemo</Button>
                         </CardActions>
                    </Card>
 
                     <Card shadow={5} style={styles}>
                     <CardTitle style={cardStyles}>PHP Project 2</CardTitle>
                     <CardText>
                         loreasdadasdasdadafaasdf dASDASD AFASD
                     </CardText>
                     <CardActions style={{textAlign:'center'}} border>
                         <Button colored>Github</Button>
                         <Button colored>LiveDemo</Button>
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
            <div className="projects-section">
                <Tabs ripple activeTab = {this.state.activeTab} onChange={(tabId) => this.setState({activeTab:tabId})}>
                    <Tab>
                       <strong> ReactJS</strong>
                    </Tab>
                    <Tab>
                    <strong> PHP</strong>
                    </Tab>
                </Tabs>
                    
                <Grid>
                    <Cell col={12}>
                        <div className="content">
                            {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}


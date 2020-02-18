import React, { Component } from 'react'
import {Tabs, Tab, Grid, Cell, Card, CardTitle,
CardActions, Button, CardText} from 'react-mdl'

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
                   <Card shadow={5} style={{minWidth:'450', margin:'auto', textAlign:'center'}}>
                       <CardTitle style={{color:'#fff' ,height:'176px', background:'url(/react.png) center / cover'}}>React Project 1</CardTitle>
                        <CardText>
                            loreasdadasdasdadafaasdf dASDASD AFASD
                        </CardText>
                        <CardActions style={{textAlign:'center'}} border>
                            <Button colored>Github</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                   </Card>

                    <Card shadow={5} style={{minWidth:'450', margin:'auto', textAlign:'center'}}>
                    <CardTitle style={{color:'#fff' ,height:'176px', background:'url(/react.png) center / cover'}}>React Project 2</CardTitle>
                    <CardText>
                        loreasdadasdasdadafaasdf dASDASD AFASD
                    </CardText>
                    <CardActions style={{textAlign:'center'}} border>
                        <Button colored>Github</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    </Card>

                    
                    <Card shadow={5} style={{minWidth:'450', margin:'auto', textAlign:'center'}}>
                    <CardTitle style={{color:'#fff' ,height:'176px', background:'url(/react.png) center / cover'}}>React Project 3</CardTitle>
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
                    <Card shadow={5} style={{minWidth:'450', margin:'auto', textAlign:'center'}}>
                        <CardTitle style={{color:'#fff' ,height:'176px', background:'url(/react.png) center / cover'}}>PHP Project 1</CardTitle>
                         <CardText>
                             loreasdadasdasdadafaasdf dASDASD AFASD
                         </CardText>
                         <CardActions style={{textAlign:'center'}} border>
                             <Button colored>Github</Button>
                             <Button colored>LiveDemo</Button>
                         </CardActions>
                    </Card>
 
                     <Card shadow={5} style={{minWidth:'450', margin:'auto', textAlign:'center'}}>
                     <CardTitle style={{color:'#fff' ,height:'176px', background:'url(/react.png) center / cover'}}>PHP Project 2</CardTitle>
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
            <div>
                <Tabs ripple activeTab = {this.state.activeTab} onChange={(tabId) => this.setState({activeTab:tabId})}>
                    <Tab>
                        ReactJS
                    </Tab>
                    <Tab>
                        PHP
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


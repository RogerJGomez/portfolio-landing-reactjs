import React from 'react'
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl'

const Styles={
    fontSize:'45px',
    color:'white'
}

export default function About() {
    return (


        <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                    <img className="profile-pic" src="/cartoon-rg.png" alt="profile"/>
                <h2>Roger Gómez</h2>
                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
                </Cell>
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr/>
                    <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={Styles}>
                                    
                                </ListItemContent>
                            </ListItem>
                        </List>
                    </div>
                </Cell>
            </Grid>
            
        </div>
       
    )
}

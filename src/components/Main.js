import React from 'react'
import LandingPage from './LandingPage'
import About from './About'
import Projects from './Projects'
import {Layout, Header, Content, Navigation, Drawer} from 'react-mdl'

export default function Main() {

    return (
        <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title="Portfolio" transparent scroll style={{color: 'white'}}>
                <Navigation>
                    <a className="link" href="#home">Home</a>
                    <a className="link" href="/#projects">Projects</a>
                    <a className="link" href="#about">About Me</a>
                </Navigation>
            </Header>
            <Drawer>
                <Navigation>
                    <a className="link" href="#home">Home</a>
                    <a className="link" href="#projects">Projects</a>
                    <a className="link" href="#about">About Me</a>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <LandingPage />
                <Projects />
                <About />
            </Content>
        </Layout>
    </div>

    )
}

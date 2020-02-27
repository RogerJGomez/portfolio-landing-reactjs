import React, {useEffect, useState} from 'react'
import LandingPage from './LandingPage'
import About from './About'
import Projects from './Projects'
import {Layout, Header, Content, Navigation, Drawer} from 'react-mdl'
import { scroller, Element } from 'react-scroll';

const scrollType = {
    duration: 550,
    delay: 50,
    smooth: true,
    offset: -10,
 };


export default function Main() {

    const [classState, setClassState] = useState("header-color")

    useEffect(() => {

        window.addEventListener('scroll', handleScroll, true )

        document.querySelector('.mdl-layout__drawer').addEventListener('click', function () {
            document.querySelector('.mdl-layout__obfuscator').classList.remove('is-visible')
            this.classList.remove('is-visible')
        }, false)

    })
  
    const handleScroll =  () => {

        let classState = 'header-color-shadow'
        if( window.scrollY === 0){
            classState = 'header-color'
        }
        setClassState(classState)

    } 
    
    return (
        
        <div className="demo-big-content">

        <Layout>

            <Header className={`${classState}`} title="Portfolio" transparent scroll style={{color: 'white'}}>
                <Navigation>
                    <a onClick={()=>{scroller.scrollTo("home", scrollType)}}className="link" href="#home">Home</a>
                    <a onClick={()=>{scroller.scrollTo("projects", scrollType)}} className="link" href="/#projects">Projects</a>
                    <a onClick={()=>{scroller.scrollTo("about", scrollType)}} className="link" href="/#about">About Me</a>
                </Navigation>
            </Header>
            
            <Drawer>
                <Navigation>
                    <a onClick={()=>{scroller.scrollTo("home", scrollType)}}className="link" href="#home">Home</a>
                    <a onClick={()=>{scroller.scrollTo("projects", scrollType)}} className="link" href="/#projects">Projects</a>
                    <a onClick={()=>{scroller.scrollTo("about", scrollType)}} className="link" href="/#about">About Me</a>
                </Navigation>
            </Drawer>

            <Content>
                <Element name="home">
                    <LandingPage />
                </Element>

                <Element name="projects">
                    <Projects />
                </Element>

                <Element name="about">
                    <About />
                </Element>
            </Content>

        </Layout>

    </div>

    )
}

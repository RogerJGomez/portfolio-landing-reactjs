import React from 'react'
import {Layout, Header, Content, Navigation, Drawer} from 'react-mdl'
import Main from './components/Main'
import "animate.css/animate.min.css";
function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Portfolio" transparent scroll style={{color: 'white'}}>
            <Navigation>
                <a className="link" href="/">Home</a>
                <a className="link" href="/about">About Me</a>
                <a className="link" href="/projects">Projects</a>
            </Navigation>
        </Header>
        <Drawer>
            <Navigation>
                <a className="link" href="/">Home</a>
                <a className="link" href="/about">About Me</a>
                <a className="link" href="/projects">Projects</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
  );
}

export default App;

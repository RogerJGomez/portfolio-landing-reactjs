import React from 'react'
import {Layout, Header, Content, Navigation, Drawer} from 'react-mdl'
import Main from './components/Main'
import {Link} from 'react-router-dom'
function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Portfolio" transparent scroll style={{color: 'white'}}>
            <Navigation>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/about">About Me</Link>
                <Link className="link" to="/projects">Projects</Link>
                <Link className="link" to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer>
            <Navigation>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/about">About Me</Link>
                <Link className="link" to="/projects">Projects</Link>
                <Link className="link" to="/contact">Contact</Link>
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

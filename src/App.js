import React from 'react'
import {Layout, Header, Content, Navigation, Drawer} from 'react-mdl'
import Main from './components/Main'
import {Link} from 'react-router-dom'
function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header title="Roger Gómez" scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
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

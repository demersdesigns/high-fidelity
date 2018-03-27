import React, { Component } from 'react'
import { Layout } from "antd";
import './App.css'

const { Header, Footer, Content } = Layout

class App extends Component {
  render () {
    return (
      <Layout>
        <Header className='primary-header'>
          <p>This is the header</p>
        </Header>
        <Content>
          <h1>Hello from the content section</h1>
        </Content>
        <Footer className='primary-footer'>
          <p>This is the footer</p>
        </Footer>
      </Layout>
    )
  }
}

export default App

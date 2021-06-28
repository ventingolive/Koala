import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

// Components
import { Countdown } from './components/countdown';
import { Header } from './components/header'
interface StateProps {
  theme: any;
}
const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    background: #fbf8f7;
  }
  `;
class App extends React.Component {
  state: StateProps = {
    theme: null,
  }
  componentDidMount() {
    fetch("https://api.koala.io/marketing/v1/device-configurations/alias/web-config", {
      method: 'GET',
      headers: {
        'X-Organization-Id': '1',
      }
    })
      .then(res => res.json())
      .then(
        (result) => this.setState({ theme: result }),
        (error) => console.log(error))
  }
  render() {
    const data = this.state.theme && this.state.theme.data && this.state.theme.data.data;
    return (
      this.state.theme && (
        <ThemeProvider theme={data}>
          <GlobalStyle />
          <Header />
          <Countdown />
        </ThemeProvider>
      )
    )
  }
}

export default App;

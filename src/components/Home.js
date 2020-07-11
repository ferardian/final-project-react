import React from 'react';
import {ThemeContext} from '../themeContext';
import MyComponent from './MyComponent';
//presentational component in pure function
// const Home = () =>
//   <div>
    
//   </div>;

class Home extends React.Component{
  constructor(){
    super();
    this.onChangeTheme = () => { 
      this.setState(prevState => ({
        colorTheme: prevState.colorTheme === 'dark' ? 'white' : 'dark'
      }))
     }
    this.state={
      colorTheme : 'dark',
      onChangeTheme: this.onChangeTheme
      // onChangeLanguage: this.onChangeLanguage
    }
  }

  // _handleThemeChange = () => {
  //   this.setState(prevState => ({
  //     theme: prevState.theme === 'dark' ? 'white' : 'dark'
  //   }))
  // }

  render(){
    return (
      
      <ThemeContext.Provider value={this.state}>
        <MyComponent />
      </ThemeContext.Provider>
      
    );
  }
}




export default Home;

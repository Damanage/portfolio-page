import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { TransitionGroup, CSSTransition} from "react-transition-group";

import './App.css';

//components
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contacts from './pages/Contacts';
import Resume from './pages/Resume';

//data
import totalDataEN from './data/tech-data.js';
import totalDataRU from './data/tech-data-RU.js';

// pages components
import NotFound from './pages/NotFound';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      isMount: false,
      currentUrl: window.location.href,
      totalData: totalDataEN,
      currentLang: 'EN'
    }

    this.headerStatusChange = this.headerStatusChange.bind(this);
    this.aboutRender = this.aboutRender.bind(this);
    this.languageSetMachine = this.languageSetMachine.bind(this);
  }



  headerStatusChange(){
    this.setState({isMount: !this.state.isMount});
  }

  aboutRender(){
    this.setState({currentUrl: window.location.href});
  }

  languageSetMachine(){
    if(this.state.totalData === totalDataEN)
      this.setState({totalData: totalDataRU, currentLang: 'RU'})
    else if(this.state.totalData === totalDataRU)
      this.setState({totalData: totalDataEN, currentLang: 'EN'})
  }

  render() {
    return (
      <Router>
        <Route render={({location})=>(

          <div className="App">
          
            <Route exact path="/portfolio-page/" render={() => <Redirect to="/portfolio-page/home" />} />

            
          
            <CSSTransition in={!this.state.isMount} key={location.key} classNames='test' timeout={500}>
              
              {!this.state.isMount ? <Header headerData={this.state.totalData.headerData} currentUrl={this.state.currentUrl}/>:<div></div>}

            </CSSTransition> 
          
          
            
            <div className="content">

              <TransitionGroup className='tr-group'>

                <CSSTransition  key={location.key} classNames="fade" timeout={800}>  
                  <Switch location={location}>

                    <Route exact path='/portfolio-page/home' 
                      render={()=>
                        <Home 
                          headerStatusChange={this.headerStatusChange} 
                          homeData={this.state.totalData.homeData} 
                          language={this.languageSetMachine}
                          currentLang={this.state.currentLang}
                        />
                      }/>

                    <Route exact path='/portfolio-page/about' 
                      render={()=>
                        <About aboutRender={this.aboutRender} techData={this.state.totalData.techData}/>
                      }/>

                    <Route exact path='/portfolio-page/Portfolio'
                      render={()=>
                        <Portfolio aboutRender={this.aboutRender} portfolioData={this.state.totalData.portfolioData}/>
                      }/>

                    <Route exact path='/portfolio-page/contacts'render={()=> <Contacts aboutRender={this.aboutRender}/> }/>
                    <Route exact path='/portfolio-page/resume' render={()=> <Resume aboutRender={this.aboutRender}/> }/>
                    <Route component={NotFound}/> 

                  </Switch>
                </CSSTransition>

              </TransitionGroup>

            </div>


          </div>

        )}/>
      </Router>
    );
  }
}

export default App;

import React from "react";
import Resultscontainer from "../Resultscontainer/Resultscontainer";
import Searchbox from "../Searchbox/Searchbox";
import Header from "./../Header/Header";
import './App.css';

const name= require('@rstacruz/startup-name-generator');

class App extends React.Component{
    constructor(){
        super();
        this.state={
            headertext: 'Name It!',
            headerExpanded: true,
            suggestedNames: [],
        }
    }

    HandleInputChange =(inputText) =>{
      this.setState({
         headerExpanded: !inputText,
         suggestedNames: inputText ? name(inputText): [],
        });
    }
    render (){
        return (
            <div>
                <Header headerExpanded={this.state.headerExpanded} headtitle={this.state.headertext}/>
                <Searchbox onInputChange={this.HandleInputChange} />
                <Resultscontainer suggestedNames={this.state.suggestedNames} />
            </div>
        );
    }
}


export default App;
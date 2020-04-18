import React from 'react';
import logo from './logo.png';
import './App.css';

/*
//functional based component
function App(){
  return (
    // react expects us to return atlest one componenet
    // we should return only one parene element
    //means we can't return h1 and p separately, 
    //instead we should wrap then together ans return as one
    
    //  In case of state, we should use class based component. If we want to use state in
    //  function based component, we shouls use hooks.

    // instead of class we should use className
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" />
        <p> Shashikamal R C </p>
      </header>
    </div>
  );
}
*/

// class based components

class App extends React.Component {

  // creating states/props using constructor
  constructor(props){
    super(props);
    this.state = {
      newItem: "",
      list: []
    }
  }

  additem(todoValue){
    if(todoValue !== ""){
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem);

      //whenever you want to update a state you must doit with this method
      this.setState({
        list,
        newItem: ""
      });
    }
  }


  deleteItem(id){
    const list = [...this.state.list]
    const updatedList = list.filter(item => item.id !== id);
    this.setState({
      //update list with updated list
      list: updatedList
    })
  }

  updateInput(input){
    this.setState({
      newItem : input
    });
  }


  render(){
    return (
      <div>
        <img src={logo} width="100" height="100" className="logo"/>
        <div className="container">
          <h1 className="app-title">
            Todo app
          </h1>
          Add an Item...
          <br/>
          <input 
            type="text"
            className="input-text"
            placeholder="write a todo"
            required
            value={this.state.newItem}
            // on change will call method and update the newItem variable
            onChange={e => this.updateInput(e.target.value)}
          />

          <button className="btn"
            onClick={() => this.additem(this.state.newItem)}
            disabled={!this.state.newItem.length}
            >
            Add todo
          </button>

          <div className="list">
            <ul>
              {this.state.list.map(item => {
                return (
                  <li key={item.id}>
                    <input 
                        type="checkbox"  
                        name="idDone"
                        checked={item.isDone}
                        onChange={() => {}}
                        id=""
                        />

                    {item.value}

                    <button 
                        className="btn"
                        onClick={() => this.deleteItem(item.id)} 
                    >Delete</button>

                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
import React from 'react';
import './App.scss';
import { Header, CreateCard, TodoCard } from './Components';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      todoCards: [
        {
        title: "John Doe",
        date: "28/06/2019"
      },
      {
        title: "John Doe1",
        date: "28/06/2019"
      }
    ]
    }
  }

  /*
    card Structure = { 
      title: "Hello",
      date: 28/06/2019
    }
  */

  addTodoCard = (title, date) => {

    const { todoCards } = this.state

    if(title && date) {
      todoCards.push({
        title,
        date
      })
      this.setState({todoCards})
    }
  }

  removeCard = index => {
    const { todoCards } = this.state
    const newCards = todoCards.filter((card, pos) => pos !== index)
    this.setState({todoCards: newCards})
  }

  getTodoList = () => {
    const { todoCards } = this.state

    return todoCards && todoCards.map((card, index) => {
      return <TodoCard
                title={card.title}
                date={card.date}
                index={index}
                removeCard={this.removeCard}
                switchCardPlace={this.switchCardPlace}
                />
    })
  }

  switchCardPlace = (to, from) => {
    const { todoCards } = this.state;
    let toValue = todoCards[to]
    let fromValue = todoCards[from]
    todoCards[from] = toValue
    todoCards[to] = fromValue
    this.setState({todoCards})
  }
  
  render() {
    return (
      <div className="container">
        <Header />
        <CreateCard 
          addTodoCard={this.addTodoCard}
        />
        <div className="todo-list"
        >
          {this.getTodoList()}
        </div>
        </div>
    );
  }
  
}

export default App;

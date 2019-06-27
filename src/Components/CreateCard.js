import React from 'react';
import './CreateCard.scss';

class CreateCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "",
            date: null,
        }
    }

    setTitle = event => event.target.value && this.setState({title: event.target.value})

    setDate = event => event.target.value && this.setState({date: event.target.value})

    addTodo = () => {
        const { title, date } = this.state
        const { addTodoCard } = this.props
        addTodoCard(title, date)
    }

    render() {

        const { title, date } = this.state
        return (
            <div className="create-todo">
                <input className="create-todo-title" placeholder="Enter Title of your card" value={title} onChange={this.setTitle}/>
                <input className="create-todo-date" placeholder="Select Date" type="date" value={date} onChange={this.setDate}/>
                <button className="create-todo-btn" onClick={this.addTodo}>
                    Add Todo
                    </button>
            </div>
        );
    }
}

export default CreateCard;
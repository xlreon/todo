import React from 'react';
import './TodoCard.scss';
import DeleteIcon from '../assets/delete.svg';

class TodoCard extends React.Component {

    handleDragStart = event => {
        const { index } = this.props;
        event.dataTransfer.setData("cardIndex", index);
    }

    handleDrop = event => {
        const { switchCardPlace } = this.props
        const currentIndex = event.currentTarget.getAttribute("currentIndex")
        const dropIndex = event.dataTransfer.getData("cardIndex")
        switchCardPlace(currentIndex, dropIndex)
    }

    render() {
        const { title, date, index, removeCard } = this.props

        return (
            <div className="card-container"
                draggable={true}
                onDragStart={this.handleDragStart}
                onDragOver={event => event.preventDefault()}
                onDrop={this.handleDrop}
                currentIndex={index}
            >
                <div className="card-title">
                    {title ? title : "Default Title"}
                </div>
                <img className="card-delete" src={DeleteIcon} onClick={() => removeCard(index)}/>
                <div className="card-date">
                    {date ? date : "Default Date"}
                </div>
            </div>
        );
    }
}

export default TodoCard;
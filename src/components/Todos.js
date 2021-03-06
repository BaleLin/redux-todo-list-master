import React, { Component } from 'react';

export default class ListContent extends Component {
    constructor(props) {
        super(props);
    } 

    changeToEditable(event) {
        event.target.setAttribute('contentEditable', 'true');
        event.target.focus();
    }

    changeToOnlyRead(event,id) {
    const keycode = (event.keyCode
                ? event.keyCode
                : event.which);
    if(keycode===13){
     event.target.setAttribute('contentEditable', 'false');
           event.target.focus();
           this.props.updateItemContent(id, event.target.innerHTML);
    }


 }
    toggleActive = (id) => {
        this.props.toggleActiveHandler(id);
    }

    render() {
        return (
            <div >
                <ol>
                    {this.props.todos.map(item =>
                        <li className = {item.isComplete ? 'checked':''}>
                            <input
                                type="checkbox"
                                className="done-todo"
                                // defaultChecked={item.isCompleted}
                                checked={item.isComplete?'checked':''}
                                onClick={e => this.toggleActive(item.id)}
                            />

                            <span onKeyPress={e => this.changeToOnlyRead(e,item.id)} onDoubleClick={e => this.changeToEditable(e)}>
                                {item.content}
                                  </span>
                        </li>
                    )}
                   
                </ol>
            </div>             
        );
    }
}

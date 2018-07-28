import React from "react"


// In react, everything is a component, but you need to explain that it is a component
class App extends React.Component {
    state = {
        todos: [
            {
                description: "Celebrate Caturday",
                isDone: true,
            },
            {
                description: "Close your HTML tags",
                isDone: false,
            },
            {
                description: "Feed apv krill",
                isDone: false,
            },
        ],
        newTodoDescription: "",
    };

    handleOnChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value, //name is the same as newTodoDescription
        });
    }


    handleTodoClick = (currentTodo) => {
        /* if (currentTodo.isDone === true) {
            currentTodo.isDone = false;
        } else {
            currentTodo.isDone = true;
        }*/
        currentTodo.isDone = !currentTodo.isDone; //this replaces the if-else statement above. This works both ways.
        
        const updatedState = { //here we are setting what the updated state should be
            todos: this.state.todos //currentTodo is actually an object in this.state.todos. This is a variable assignment
        }
        this.setState(updatedState); //This is the line that actually updates the state
    };

    handleAddTodo = () => {
        //Get new toodo descrption
        const newTodoDescription = this.state.newTodoDescription
        // create new todo object form the description
        const newTodo = {
            description: newTodoDescription,
            isDone: false,
        };
        // update react component state
        const newTodos = [
            ...this.state.todos, // dots add the new object into the current array,instesd of adding the existing array in a new array
            newTodo, //this is the new object
        ];
        
        this.setState ({ //we always update the state afterwards
        todos: newTodos,
        newTodoDescription: "", //clears the input field
        });
    }
    
    render() {
        
        return <div> 
        <img src="https://www.filestack.com/wp-content/uploads/2018/05/Kitten-min.png" alt="staring cat" width="720"/>    
            
            <div>
                <h1>Don't forget to:</h1>
                <label htmlFor="newTodoDescription">Add</label>
                
                <input 
                    type="text" 
                    value={this.state.newTodoDescription} 
                    name="newTodoDescription" 
                    id="newTodoDescription"
                    onChange={this.handleOnChange}
                />
                <button onClick={this.handleAddTodo}>+</button>
                <ul>
                    {this.state.todos.map(todoItem => { //here we refer to the todos state
                            let completeClass = "";

                            if (todoItem.isDone) {
                                completeClass="complete";
                            }
                        return <li 
                        className={completeClass} 
                        onClick={() => this.handleTodoClick(todoItem)} //onClick is an event handler
                        >{todoItem.description}</li>
                    })}
                </ul>
            </div>

        </div>
    }
}

export default App
import React, {Component} from 'react';

export default class TodosListComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos: [
                {id: 1, description: 'Getting to know React', status: 'In Progress', dueDate: new Date()},
                {id: 2, description: 'Getting to know Spring Boot', status: 'In Progress', dueDate: new Date()},
                {id: 3, description: 'Lane Detection for Driverless Cars', status: 'Not Yet Started', dueDate: new Date()},
                {id: 4, description: 'Leet Code', status: 'Dormant', dueDate: new Date()},
                {id: 5, description: 'Independent Study Work', status: 'Start Today', dueDate: new Date()},
                {id: 6, description: 'System Designing', status: 'Not Yet Started', dueDate: new Date()}
            ]
        }
    }
    
    render() {
        return(
            <div className='container todos'>
                <h1>My TODOS</h1>
                <hr/>
                <div className='container'>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DECRIPTION</th>
                            <th>STATUS</th>
                            <th>ESTIMATED DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                (todo) => 
                                    <tr key = {todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.status}</td>
                                        <td>{todo.dueDate.toString()}</td>
                                    </tr>
                        )
                        }
                    </tbody>
                </table>
                </div>
            </div>
        );
    }
}
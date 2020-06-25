import React from 'react';
import TaskList from './TaskList';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {name: "task 1", id: 1}
      ],
      associateTasks: []
    }
  }

  addAssociateTask = (task) => {
    //generates a new id, for the list
    task.id = uuidv4();
    this.setState({
      associateTasks: this.state.associateTasks.concat(task),
    });
  }

  removeAssociateTask = (task) => {
    this.setState({
      associateTasks: [], //this.state.associateTasks.filter(listTask => listTask.id === task.id),
    })
  }

  render() {
    return (
      <div>
        <TaskList tasks={this.state.tasks} buttonAction={this.addAssociateTask} buttonText={"add"} />
        <TaskList tasks={this.state.associateTasks} buttonAction={this.removeAssociateTask} buttonText={"remove"} />
      </div>
    );
  }
}

export default App;

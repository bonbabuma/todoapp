import React                   from 'react';
import TodoApp                 from './TodoApp';
import TodoList                from './TodoList';

class App extends React.Component {
  state = {
    items: [],
    text: '',
  };

  _handleChange = (e) => this.setState({text: e.target.value});

  _handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  };

  _handleDelete = (e) => {
    const newItem = this.state.items.filter((i) => i !== e);
    this.setState({
      items: newItem
    });
  };

  render() {
    return (
      <main className="todo">

        {/* Header */}
        <header className="todo-header">Todo App</header>

        {/* TodoApp Component */}
        <TodoApp
          handleSubmit={this._handleSubmit}
          handleChange={this._handleChange}
          handleDelete={this._handleDelete}
          items={this.state.items}
          text={this.state.text}
        />

        {/* TodoList Component */}
        <TodoList
          handleDelete={this._handleDelete}
          items={this.state.items}
        />

        {/* Footer */}
        <footer>
          <div>
            Made with <i className="fa fa-heart icon" aria-hidden="true"></i> by <a href="http://dikshantpatodia.github.io">Dikshant Patodia</a>
          </div>
        </footer>
      </main>
    );
  }
}

export default App;

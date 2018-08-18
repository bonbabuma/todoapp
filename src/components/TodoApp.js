import React                   from 'react';
import PropTypes               from 'prop-types';

class TodoApp extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    handleDelete: PropTypes.func,
    text: PropTypes.string,
    items: PropTypes.array
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit} className="todo-app">
        <input
          autoFocus
          type="text"
          value={this.props.text}
          onChange={this.props.handleChange}
        />
        <button>ADD #{this.props.items.length + 1}</button>
      </form>
    );
  }
}

export default TodoApp;

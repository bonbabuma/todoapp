import React                   from 'react';
import PropTypes               from 'prop-types';

class TodoList extends React.Component {
  static propTypes = {
    handleDelete: PropTypes.func,
    items: PropTypes.array,
  };

  render() {
    return (
      <div className="todo-list">
      {
        this.props.items.map((i, index) => {
          return (
            <div key={index} className="todo-list-items">
              <p className="todo-list-items-name">{i.text}</p>
              <i className="fa fa-trash todo-list-items-delete" aria-hidden="true" onClick={this.props.handleDelete.bind(null, i)} ></i>
            </div>
          );
        })
      }
      </div>
    );
  }
}

export default TodoList;

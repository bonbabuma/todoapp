import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style.css';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit(e) {
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
  }

  handleDelete(e) {
    const newItem = this.state.items.filter((item) => item !== e );
    this.setState({
      items: newItem
    });
  }

  render() {
    return (
      <main className="todoapp">
        <header>
          <h1>Todo App</h1>
        </header>
        <section className="for_input">
          <form onSubmit = {this.handleSubmit}>
            <input
              type="text"
              onChange = {this.handleChange}
              value = {this.state.text}
              autoFocus
            />
            <button>
              ADD #{this.state.items.length + 1}
            </button>
          </form>
        </section>
        <TodoList items = {this.state.items} handleDelete = {this.handleDelete.bind(this)}/>
        <footer>
          <h5>Made with&nbsp;&nbsp;<i class="fa fa-heart" aria-hidden="true"></i>
          &nbsp;&nbsp;by&nbsp;<a href="http://dikshantpatodia.github.io">Dikshant Patodia</a></h5>
        </footer>
      </main>
    );
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <main className="todolist">
        <section className="for_displaying_data">
          {this.props.items.map(item => (
            <section className="item_list">
              <p key={item} className="data">{item.text}</p>
              <i onClick={this.props.handleDelete.bind(null, item)} className="fa fa-trash" aria-hidden="true"></i>
            </section>
          ))}
        </section>
      </main>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));

import React from 'react';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <main>
        <header>
          <h1>Todo App</h1>
        </header>
        <section class="for_input">
          <form>
            <input type="text" autoFocus />
            <input type="submit" value="ADD" />
          </form>
        </section>
        <section class="for_displaying_data">
          <p class="data">1</p>
          <p class="data">2</p>
          <p class="data">3</p>
          <p class="data">4</p>
          <p class="data">5</p>
        </section>
        {/*<footer>
          <h5>Handcrafted with&nbsp;<i class="fa fa-heart" aria-hidden="true"></i>&nbsp;by&nbsp;<a href="http://dikshantpatodia.github.io">Dikshant Patodia</a></h5>
        </footer> */}
      </main>
    );
  }
}

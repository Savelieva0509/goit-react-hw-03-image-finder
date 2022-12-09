import { Component } from 'react';
import css from './Searchbar.module.css';

class Searchbar extends Component {
    state = {
    img: '',
  };

  handleNameChange = event => {
    this.setState({ img: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.img);
    this.setState({ pokemonName: '' });
  };


  render() {
    return (
      <header className={css.searchbar} onSubmit = {this.handleSubmit}>
        <form className={css.form}>
                <button type="submit" className={css.button}>
                    <span className={css.button__label}>Search</span>
          </button>
          <input
            className={css.input}
            type="text"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar
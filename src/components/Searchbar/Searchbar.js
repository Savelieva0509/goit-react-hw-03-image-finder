import { Component } from 'react';
// import { toast } from 'react-toastify';
import css from './Searchbar.module.css';

class Searchbar extends Component {
    state = {
    imgName: '',
  };

  handleChange = event => {
    this.setState({ imgName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
      event.preventDefault();

      if (this.state.imgName.trim() === '') {
      alert('Введите имя');
      return;
    }

    this.props.onSubmit(this.state.imgName);
    this.setState({ imgName: '' });
  };


  render() {
    return (
      <header className={css.searchbar} onSubmit = {this.handleSubmit}>
        <form className={css.searchForm }>
                <button type="submit" className={css.searchFormButton}>
                    <span className={css.searchFormButton__label}>Search</span>
          </button>
          <input
            className={css.searchForm__input}
            type="text"
            name= "imgName"
            placeholder="Search images and photos"
            value={this.state.imgName}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar
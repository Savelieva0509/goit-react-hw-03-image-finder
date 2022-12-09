import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';

export class App extends Component {
  handleFormSubmit = img => {
    console.log(img);
  }

  state = {
    img: null,
    loading: false,
  }
  componentDidMount() {
    this.setState({ loading: true })
    fetch(
      'https://pixabay.com/api/?q=cat&page=1&key=30573092-ee1d5b60b5a26f0dd8b37d65c&image_type=photo&orientation=horizontal&per_page=12'
    )
      .then(res => res.json())
      .then(img => this.setState(img))
      .finally (()=>this.setState({ loading: false }))
  }

  render() {
    return <div>
      <Searchbar onSubmit={ this.handleFormSubmit} />
    </div>;
  }
}

import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './Searchbar/Searchbar';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

export class App extends Component {
  state = {
    imgName: '',
  };

  handleFormSubmit = imgName => {
    this.setState({ imgName });
    console.log(imgName);
  }

  render() {
    return <div>
      <Searchbar onSubmit={this.handleFormSubmit} />
      <ImageGalleryItem imgName={ this.state.imgName} />
      <ToastContainer autoClose={5000}/>
    </div>;
  }
}

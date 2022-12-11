// import { Component } from 'react';
// // import { toast } from 'react-toastify';
// import css from './Searchbar.module.css';

// class Searchbar extends Component {
//     state = {
//     imgName: '',
//   };

//   handleNameChange = event => {
//     this.setState({ imgName: event.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = event => {
//       event.preventDefault();
      
//       if (this.state.imgName.trim() === '') {
//       alert('Введите имя');
//       return;
//     }

//     this.props.onSubmit(this.state.imgName);
//     this.setState({ imgName: '' });
//   };


//   render() {
//     return (
//       <header className={css.searchbar} onSubmit = {this.handleSubmit}>
//         <form className={css.form}>
//                 <button type="submit" className={css.button}>
//                     <span className={css.button__label}>Search</span>
//           </button>
//           <input
//             className={css.input}
//             type="text"
//             name= "imgName"
//             placeholder="Search images and photos"
//             value={this.state.imgName}
//             onChange={this.handleNameChange}
//           />
//         </form>
//       </header>
//     );
//   }
// }

// export default Searchbar
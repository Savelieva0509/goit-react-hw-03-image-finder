// import { Component } from 'react';
// import css from './ImageGalleryItem.module.css';

// export default class ImageGalleryItem extends Component {
//   state = {
//     img: null,
//     loading: false,
//     error: null,
//     };
    
//   componentDidUpdate(prevProps, prevState) {
//     const prevName = prevProps.imgName;
//     const nextName = this.props.imgName;

//     if (prevName !== nextName) {
//         this.setState({ loading: true, img:null });
//       fetch(
//         `https://pixabay.com/api/?q=${nextName}&page=1&key=30573092-ee1d5b60b5a26f0dd8b37d65c&image_type=photo&orientation=horizontal&per_page=12`
//       )
//         .then(res => {
//           if (res.ok) {
//             return res.json();
//             }
//             return Promise.reject(
//                 new Error (`Нет изображений по запросу ${nextName}`)
//             )
//         })
//         .then(img => this.setState({ img }))
//         .catch(error => this.setState({ error }))
//         .finally(() => this.setState({ loading: false }));
//     }
//   }

//     render() {
//         const {  loading, error } = this.state;
        
//     return (
//       <li className={css.galleryItem}>
//         {error && <div>{error.message}</div>}
//         {loading && <div>Загружаем...</div>}
//         <img src="" alt="" />
//         {/* {this.props.imgName && <div>{this.state.imgName.hits }</div>}; */}
//       </li>
//     );
//   }
// }

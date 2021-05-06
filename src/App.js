
import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar'
import ImageGallery from './ImageGallery/ImageGallery'
import Button from './Button/Button'
import axios from 'axios';
import Loader from "./Loader/Loader";
import Modal from './Modal/Modal'

class App extends Component {

  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    largeImageURL: '',
    showModal:false,
  }


  componentDidUpdate(prevprops,prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
   }
 }
    
  onChangeQuery = query => {
    this.setState({searchQuery:query,currentPage: 1,images: []})
    
  }

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state
    this.setState({isLoading:true})
    axios
      .get(`https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=20704457-b02886aee8bbd15c3245ed4eb&image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => {
        this.setState(prevState => (
          {
            images: [...prevState.images, ...res.data.hits],
            currentPage: prevState.currentPage + 1,
            
          }))
        
     res.data.hits.map(({largeImageURL})=>console.log(largeImageURL));}).finally(() => this.setState({isLoading:false}))
    
    // setTimeout(() => {
    //   window.scrollTo({
    //     top: document.documentElement.scrollHeight,
    //     behavior: 'smooth',
    //   })
    // }, 800)
  }
  toggleModal = () => {
    this.setState(state => ({ showModal: !state.showModal,}))
  }
  
  render() {
    const { images,isLoading,showModal } = this.state;
    
    return (
      <div>
        {showModal && <Modal image={images} onClose={ this.toggleModal}/>}
        <Searchbar onSubmit={this.onChangeQuery} />
        {isLoading &&  <Loader/>}
        <ImageGallery images={images} onOpen={this.toggleModal}/>
        {images.length >0 && !isLoading &&<Button fetchImages={this.fetchImages}/>}
        
        </div>
    )
  }
  


}
export default App;
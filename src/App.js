
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
    selectedImg: '',
    showModal: false,
    error: null,
    shouldScroll:false,
  }


  componentDidUpdate(prevprops,prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
    if (this.state.shouldScroll) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }
    
  onChangeQuery = query => {
    this.setState({searchQuery:query,currentPage: 1,images: []})
    
  }

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state
    this.setState({ isLoading: true })
    axios
      .get(`https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=20704457-b02886aee8bbd15c3245ed4eb&image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => {
        this.setState(prevState => (
          {
            images: [...prevState.images, ...res.data.hits],
            currentPage: prevState.currentPage + 1,
          }))
      }).catch(error => this.setState({ error })).finally(() => this.setState({ isLoading: false }))
  }

  toggleModal = img => {
    this.setState(state => ({
      selectedImg: !state.showModal ? img : '',
      showModal: !state.showModal,
    }))
  }
  onClickButton = () => {
    this.fetchImages();
    if (this.state.currentPage > 1) {
      this.setState({ shouldScroll: true })
    }
  }

  render() {
    const { images,isLoading,showModal,selectedImg,error } = this.state;
    return (
      <div>
        {showModal && <Modal selectedImg={selectedImg} onClose={this.toggleModal} />}
        <Searchbar onSubmit={this.onChangeQuery} />
        {error && <h1 className="Error">Error, please try later</h1>}
        {isLoading && <Loader />}
        <ImageGallery images={images} onOpen={this.toggleModal}  />
        {images.length > 0 && !isLoading && <Button   onClick={this.onClickButton}/>}
        
      </div>
    )
  }
  
}
export default App;
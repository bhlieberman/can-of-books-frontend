import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import BookFormModal from './BookFormModal';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      show: false
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  getBooks = async() =>{
    try{
      let response = await axios.get(`${process.env.REACT_APP_HEROKU}/books`);
      this.setState({books: response.data});
    } catch (error) {
      console.log('error: ' + error);
    }
  };

  createBooks = async (data) => {
    try {
      let response = await axios.post(`${process.env.REACT_APP_SERVER}/books`, data)
      console.log(response);
      this.setState({ books: this.state.books.concat(response.data) });
    } catch (error) {
      console.log('error posting new book');
    };
  }

  componentDidMount() {
    this.getBooks();
  }

  showModal = () => {
    this.setState(prevState=> ({show: !prevState.show}));
  }

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <Container className="d-flex justify-content-center">
        {this.state.books.length ? (
          <Carousel
            slide={false}
            className="h-auto d-flex justify-content-center"
          >
            {this.state.books.map((book) => {
              return (
                <Carousel.Item key={book._id}>
                  <img
                    // className="w-"
                    src="https://via.placeholder.com/800x400"
                    alt="HELLO WORLD!"
                  />
                  <Carousel.Caption>
                    <h2>{book.title}</h2>
                    <p>{book.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
        {this.state.show && <BookFormModal show={this.state.show} handleClose={this.showModal} update={this.createBooks}/>}
        {!this.state.show && <Button className="btn-secondary m-2" 
        onClick={this.showModal}>Add a Book</Button>}
      </Container>
    );
  }
}

export default BestBooks;

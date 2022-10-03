import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  getBooks = async() =>{
    try{
      let response = await axios.get(`${process.env.HEROKU}/books`);
      this.setState({books: response.data});
    }catch (error){
      console.log('error: ' + error);
    }
  };

  componentDidMount(){
    this.getBooks();
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
      </Container>
    );
  }
}

export default BestBooks;

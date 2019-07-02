import React, {Component} from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import BookCard from '../containers/BookCard';
import { Card } from 'semantic-ui-react'
import Filter from "../containers/Filter";
import Menu from "../containers/Menu";

class App extends Component {
  componentWillMount() {
    const { setBooks } = this.props;
    axios.get('/books.json').then(({ data }) => {
      setBooks(data);
    })
  }
  render () {
    const {books, isReady, counter} = this.props;
    return (
      <Container>
        <Menu />
        <Filter count={counter} />
        <Card.Group itemsPerRow={4}>
          {!isReady ? 'Загрузка братан, подожди' : books.map((book, i )=> <BookCard key={i} {...book} />)}
        </Card.Group>
      </Container>
     
    );
    }
  }


  export default App;
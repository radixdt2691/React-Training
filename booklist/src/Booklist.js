import React, { Component } from 'react'
import Book from './Book';
import booksData from "./booksData";

export default class Booklist extends Component {
  constructor(props){
    super(props)
    this.state ={
        books:booksData
    }
  }
  handleclick = (id) =>{
    const sortedBooks = this.state.books.filter(item => item.id !== id);
    this.setState({
      books:sortedBooks
    });
  }
  render() {
    // console.log(this.state.books);
    return (
      <section className='main-wrapper'>
        {this.state.books.map((item,index)=>(<Book key={item.id} info={item} handleclick = {this.handleclick}/>))}
      </section>
    )
  }
}

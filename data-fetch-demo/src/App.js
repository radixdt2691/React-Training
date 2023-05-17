import './App.css';
import { Oval } from 'react-loader-spinner';

import React, { Component } from 'react'
export default class App extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        DataisLoaded: false
    };
    this.loadMore = this.loadMore.bind(this);
  }


  componentDidMount() {
    fetch(
"https://dummyjson.com/posts/")
        .then((res) => res.json())
        .then((json) =>  {
            this.setState({
                data: json.posts,
                DataisLoaded: true
            });
            
        })
  }

  loadMore(){
    fetch("https://dummyjson.com/posts/?limit=120&skip=30")
    .then((res)=>res.json()).then((json)=>{
      
      this.setState({
        data: json.posts,
        DataisLoaded: true
      })
    })

  }

  render() {
    const { data , DataisLoaded } = this.state;

    if (!DataisLoaded) return(
      <div className='loader'>
         <Oval
          height="80"
          width="80"
          radius="9"
          color="red"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
          timeout = {1000000000}
          />
      </div>
    );
    return (
      <div className='all-wrapper'>
            {
                data.map((item,index) => ( 
                  <div className='main-wrapper' key={index}>
                    <ul className='data-wrapper'>
                      <li><b>Title:</b> { item.title } </li>
                      <li><b>Para:</b> { item.body } </li>
                      <li><b>Tags:</b> </li>
                        {item.tags.map((tag, index) => {
                        return <span key={index}>{tag}</span>
                        })}
                      <li><b>Reactions:</b> {item.reactions}</li>      
                    </ul>
                    
                  </div>

                  
                ))
            }
            <button disabled={this.state.data.length===120} onClick={this.loadMore}>Load More</button>
            
      </div>
    );
  }
}

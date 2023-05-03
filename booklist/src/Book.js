import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faArrowsRotate , faTrash } from '@fortawesome/free-solid-svg-icons';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

export default class Book extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:0,
            price:0
        };
        // this.handleclick = this.handleclick.bind(this);
    }

  
    // handleclick() {
    //     console.log("clicked");
    //     console.log(this.state.count);
    // }
    addCount = () => {
      this.setState({
        count: this.state.count + 1,
        price: this.state.price + 499
      });
    };
    lowerCount = () => {
        if(this.state.count > 0){
            this.setState({
                count: this.state.count - 1,
                price: this.state.price - 499
            });
        }
    };
    resetCount = () => {
      this.setState({
        count: 0,
        price: 0
      })
    }
  render() {
    // console.log(this.props);
    const {id,img,title,author,subject,breif} = this.props.info;
    const {handleclick} = this.props;
    return (
            <div className='content-wrapper'>
                <Flippy flipOnHover={true} flipOnClick={false} flipDirection="horizontal" ref={(r) => this.flippy = r} className='card-wrapper'>
                    <FrontSide>
                        <div className='book-wrapper'>
                            <article className='books'>
                                <img src={img} alt="books" width="250" height="250"/>
                                <h4>Title : {title}</h4>
                                <h6>Author : {author}</h6>
                                <h3>Total Price : {this.state.price}</h3>
                            </article>
                        </div>
                    </FrontSide>
                    <BackSide>
                        <div className='desc'>
                            <h1>{author}</h1>
                            <div className='subjects'>
                                <h4>Subject</h4>
                                <h3>{subject}</h3>
                            </div>
                            <div className='breif-desc'>
                                <h4>Description</h4>
                                <h5>{breif}</h5>
                            </div>
                        </div>
                    
                    </BackSide>
                </Flippy>
                <div className='qty-price-wrapper'>
                <div className='price-wrapper'>
                    <h3 className='qty'>Qty : {this.state.count}</h3>
                    <h3>Price : {this.state.price}</h3>     
                </div>
                <div className='btn-grp'>
                    <button type="button" className='add' onClick={this.addCount} title="Add"><FontAwesomeIcon icon={faPlus} /></button>
                    <button type="button" className='reset' onClick={this.resetCount} title="Reset"><FontAwesomeIcon icon={faArrowsRotate} /></button>
                    <button disabled={this.state.count===0} type="button" className='remove' onClick={this.lowerCount} title="Remove"><FontAwesomeIcon icon={faMinus} /></button>
                    <button type="button" onClick={()=>{handleclick(id)}}><FontAwesomeIcon icon={faTrash} title="Delete Book"/></button>
                </div>
                </div>
            </div>
            
            
    )
  }
}

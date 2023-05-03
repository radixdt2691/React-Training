import React, { Component } from 'react'
import Person from './Person';

export default class Personalinfolist extends Component {
    state={
        persons:[
            {
                id:111,
                fname:'Jainish',
                lname:'Gajjar',
                dob:'11/09/2000'
            },
            {
                id:112,
                fname:'Jeet',
                lname:'Mehta',
                dob:'23/03/1999'
            },
            {
                id:113,
                fname:'Akshit',
                lname:'Patel',
                dob:'28/10/2001'
            },
            {
                id:114,
                fname:'Gorav',
                lname:'Ved',
                dob:'03/04/1999'
            }
        ]
    };
    render() {
    return (
      <section>
        {this.state.persons.map((item)=>(<Person key={item.id} info={item}/>))}
      </section>
    )
  }
}

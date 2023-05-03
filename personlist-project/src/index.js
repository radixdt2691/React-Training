import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'

const Person = ({img,name,job,children}) =>{
    const url= `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
    return(
        <article className='card-wrapper'>
            <img src={url} alt="img_person" className='img'/>
            <h3 className='name'>{name}</h3>
            <h4 className='job'>{job}</h4>
        </article>
    )
}
const PersonList = () => {
    return(
        <section className='list-wrapper'>
            <Person img="62" name="Miller" job="Software Developer"/>
            <Person img="42" name="Stoakes" job="MLOPS"/>
            <Person img="99" name="Jainish" job="Data Scientist"/>
        </section>
    )     
};


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<PersonList/>)
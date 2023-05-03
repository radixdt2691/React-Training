import React from 'react';
import './App.css';
import "./index.css";
// import Personalinfolist from './Personalinfolist';
function Student(){
  return(
    <section className='student-card'>
        <StudentIDCard />
        <StudentIDCard />
        <StudentIDCard />
        <StudentIDCard />
        {/* <Personalinfolist/> */}
    </section>
  );
}

const StudentIDCard = () => {
 const data=[{clgname:'LJ University',clgadd:'Near Sarkhej Cross Road, S.G Highway',clglogo:'https://www.ljku.edu.in/web/image/res.company/1/institute_meta_image'}]
  return(
    <article className='card-wrapper'>
      <h1 className='card-heading'>Student ID-Card</h1>
      <Studentimage />
      <Personalinfo/>
      <Collegeinfo clginfo={data[0]}>
        <p>This txt is coming from props.children</p>  
      </Collegeinfo>
    </article>
  );
}

const Studentimage = () => ( <img height="220" className='img-student' src="https://media.istockphoto.com/id/1201229397/photo/happy-young-man-smiling-at-camera.jpg?s=612x612&w=is&k=20&c=mPzI95erBezI1ZlUda9rllQPYyh-kFyF3Tk7BSKHvYg=" alt="student img"></img> )


const Personalinfo=()=>{
  return(
    <React.Fragment>  
      <h1>Personal Details</h1>
      <p className='id'>ID:- 111</p>
      <p>First Name:- Jainish</p>
      <p>Last Name:- Gajjar</p>
      <p>DOB:- 11/09/2000</p>
    </React.Fragment>
  )
}

const Collegeinfo=props=>{

  const{clgname,clgadd,clglogo} = props.clginfo;
  
  return(
    <React.Fragment>
      <h1>College Details</h1>
      {props.children}
      <p>{clgname}</p>
      <p>{clgadd}</p>
      <img width="150" src={clglogo} alt='logo_clg'></img>
   </React.Fragment>
  )
}

export default Student;

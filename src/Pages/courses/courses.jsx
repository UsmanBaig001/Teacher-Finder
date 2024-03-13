import {  TextField } from '@mui/material';
import './courses.scss'
import CourseCard from '../../components/CourseCard/CourseCard';
import { Coursedata } from '../../Appdata';
import { useState } from 'react';

const Courses = () => {
  const [displayCount, setDisplayCount] = useState(6);
  const [inputValue, setInputValue] = useState('');


  const handleLoadMore = () => {
    setDisplayCount(prevCount => prevCount + 6);
  };

  const filteredData = Coursedata.filter((elem) =>
  elem.Subject.toLowerCase().includes(inputValue.toLowerCase())
);

  const showLoadMoreButton = Coursedata.length > displayCount;

  return (
    <section className='courses-page'>
        <div className="search">
        <TextField 
          id="outlined-basic"
          label="Search Courses"
          variant="outlined" 
          style={{width:'70%', background:'#fff'}} 
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          />
        </div>

        {/* ------------------ Courses ------------------ */}

        <div className="course-card-container">
         {filteredData.slice(0, displayCount).map((elem, index)=>{
            const {Heading, Subject, Img, CourseLink, UploadDate, Author} = elem ;
            return <CourseCard 
             key={index}
             BlogTopic={Subject}
             BlogHeading={Heading}
             BlogImg={Img}
             date={UploadDate}
             Account={Author}
             BlogLink={CourseLink}
             />
          })}
        </div>
        
        <div className="search">
        {showLoadMoreButton && (
        <button className='primary-btn'onClick={handleLoadMore} >Load More</button>
      )}
        </div>
    </section>
  )
}

export default Courses;
import {  TextField } from '@mui/material';
import '../courses/courses.scss'
import { useState } from 'react';
import { TeachersData } from '../../Appdata';
import TeacherCard from '../../components/TeacherCard/TeacherCard';

const Teachers = () => {
  const [displayCount, setDisplayCount] = useState(4);
  const [inputValue, setInputValue] = useState('');

  const handleLoadMore = () => {
    setDisplayCount((prevCount) => prevCount + 4);
  };

  const filteredData = TeachersData.filter((teacher) => {
    const lowercasedInput = inputValue.toLowerCase();
    return (
      teacher.name.toLowerCase().includes(lowercasedInput) ||
      teacher.subject.some((subj) => subj.toLowerCase().includes(lowercasedInput))
    );
  });

  const showLoadMoreButton = TeachersData.length > displayCount;

  return (
    <section className='courses-page'>
      <div className='search'>
        <TextField
          id='outlined-basic'
          label='Search Instructors'
          variant='outlined'
          style={{ width: '70%', background: '#fff' }}
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>

      {/* ----------------- Teacher Cards --------------------- */}

      <div className='course-card-container'>
      {filteredData.slice(0, displayCount).map((elem, index)=>{
            const {name, img, facebook, linkedIn, twitter, subject} = elem;
            return <TeacherCard 
                key={index} 
                name={name}
                teacherImg={img}
                Facebook={facebook}
                LinkedIn={linkedIn}
                Twitter={twitter}
                subject={subject.slice(0,1).map((item, index)=>{
                return <div key={index}>{item}</div>
            })}
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
export default Teachers;

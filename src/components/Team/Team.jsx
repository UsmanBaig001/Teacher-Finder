import "./team.css";
import Img1 from '../../assets/teacher1.png'
import Img2 from '../../assets/teacher2.png'
import Img3 from '../../assets/teacher3.png'
import Img4 from '../../assets/teacher4.png'
import TeacherCard from "../TeacherCard/TeacherCard";

const Case = () => {
  return (
    <>
      <div className="case">
        <div className="case-top">
          <div className="bar"></div>
          <span>TEAM MEMBERS</span>
          <div className="bar"></div>
        </div>
        <div className="case-heading">
          <h2>
           Our Expert{" "} 
            <span>Instructors</span>
          </h2>
        </div>
        <div className="case-card-continer">
          <TeacherCard teacherImg={Img1} name={'Erics Widget'}/>
          <TeacherCard teacherImg={Img2} name={'Daniel Steven'}/>
          <TeacherCard teacherImg={Img3} name={'Nelson Decosta'}/>
          <TeacherCard teacherImg={Img4} name={'Selina Gomez'}/>
        </div>
      </div>
    </>
  );
};
export default Case;


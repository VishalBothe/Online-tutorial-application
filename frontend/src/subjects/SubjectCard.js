import React, { useState } from 'react'
import { IMAGE_URL } from '../Backend';
import { setSubject } from './helper/subjectAPICalls';
import { Redirect } from 'react-router-dom';

const SubjectCard = ({subject}) => {

    const subId = subject ? subject.id : "";
    const subName = subject ? subject.name : "Subject";
    const subProf = subject ? subject.professor : "Unknown";
    const subImage = subject ? `${IMAGE_URL}/${subject.image}` : "https://knowledgeone.ca/wp-content/uploads/2020/04/transition-online.jpg"
    const uploadTime = subject ? subject.updated_at : "not known";

    const [redirect, setRedirect] = useState(false);

    const handleClick = () => {
        setSubject(subject, () => {
            setRedirect(true);
        })
    };

    const performRedirect = () => {
        if(redirect){
            return <Redirect to="/start-learning" />
        }
    }

    return (
      <div className="m-1">
        <div
          className="subject-card border-top border-bottom"
          onClick={handleClick}
        >
          <div className="row">
            <div className="col-3">
              <div className="p-1">
                <img
                  width="110%"
                  height="50%"
                  src={subImage}
                  alt="Accounting"
                />
              </div>
            </div>
            <div className="col-9">
              <div className="text-left m-4">
                <h4 className="subject-title">{subName}</h4>
                <span className="subject-description">
                  <b>Lecture by: </b>{subProf} &nbsp;
                   <b className="ml-4">Uploaded on:</b> {uploadTime}
                </span>
                {/* TODO: WORK ON PROGRESS BAR WIDTH */}
                <p className="mt-2">
                  4
                  <progress width="100%" id="file" value="4" max="10">
                  </progress>
                  10
                </p>
              </div>
            </div>
          </div>
        </div>
        {performRedirect()}
      </div>
    );
}

export default SubjectCard;
import React, { useState, useEffect } from 'react'
import Menu from '../core/Menu';
import SubjectCard from './SubjectCard';
import { getSubjects } from './helper/subjectAPICalls';
import { isAuthenticated } from '../auth/helper';

const MySubjects = () => {

    const [subjects, setSubjects] = useState([]);
    const [user, setUser] = useState(isAuthenticated().user)

    const getMySubjects = () => {
        getSubjects()
        .then(data => setSubjects(data))
        .catch(err => console.log(err));
    }

    useEffect(() => {
        getMySubjects()
    }, [])

    const abc = [0,1,2,3,4];
    return (
      <div>
        <Menu />
        <div className="bg-custom my-2 mx-3">
          <h4
            className="text-white ml-5"
            >
              Hi, {user.name}
            </h4>
            <h5
                className="text-white ml-5 pb-4"
            >
                Welcome to Smart learning platform..
            </h5>
        </div>
        <div className="container mt-2">
            {subjects.map((subject) => {
                return(
                    <SubjectCard
                        key={subject.id}
                        subject={subject}
                    />
                )
            })}
        </div>
      </div>
    );
}

export default MySubjects;

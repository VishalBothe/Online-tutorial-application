import React, { useEffect, useState } from 'react'

import { getTopics } from "../topics/helper/topicAPICalls"
import { Redirect } from 'react-router-dom';
const TutorialPage = () => {

    const [topics, setTopics] = useState([]);

    const [values, setValues] = useState({
        link:"",
        redirect: false
    })

    const {link, redirect} = values;
    const getMyTopics = () => {
        getTopics()
        .then(data => {
            setTopics(data);
            setValues({
                ...values,
                link: data[0].link
            })
        })
        .catch(err => console.log(err));
    }

    useEffect(() => {
        getMyTopics()
    }, [])

    const handleTopicClick = name => event => {
        setValues({
            ...values,
            link:name
        })
    }

    const performRedirect = () => {
        if(redirect){
            return <Redirect to="/subject-list" />
        }
    }

    const showTopicList = () => {
        if(topics.length > 0){
            return (
              <div>
                {topics.map((topic, index) => {
                  return (
                    <div
                      key={index}
                      className="p-2 bg-light border topic-card"
                      style={{cursor:"default"}}
                      onClick={handleTopicClick(topic.link)}
                    >
                      <b>{index + 1}</b>. {topic.title}
                    </div>
                  );
                })}
              </div>
            );
        }else{
            return(
                <div className="text-danger">
                    <h3>No topics to show</h3>
                </div>
            )
        }
    }

    return (
      <div>
        <div className="container-fluid">
          {/* Header-Start */}
          <div className="row bg-custom">
            <button
              className="btn text-white"
              onClick={() => {
                setValues({ ...values, redirect: true });
              }}
            >
              <i class="fa fa-angle-double-left" aria-hidden="true"></i>
              &nbsp; Back
            </button>
          </div>
          {/* Header-End */}

          {/* Maain-Content-Start */}
          <div className="row">
            <div className="col-9">
              {/* Iframe-Start */}
              <div className="row">
                <iframe src={values.link} width="100%" height="550"></iframe>
              </div>
              {/* Iframe-End */}
            </div>
            <div className="col-3">{showTopicList()}</div>
          </div>
          {/* Main-Content-End */}
        </div>
        {performRedirect()}
      </div>
    );
}

export default TutorialPage;

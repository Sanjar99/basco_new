import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
import "./_questions.scss";

const Questions = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <>
      <div className="questions container">
        <h3 className="questions__subject">Eng ko‘p so‘raladigan savollar </h3>
        <div className="questions__wrapper">
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Questions;

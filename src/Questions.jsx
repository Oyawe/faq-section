import React from "react";
import Question from "./Question";

const Questions = ({ questions, activeId, toogleQuestion }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <Question
            key={question.id}
            {...question}
            activeId={activeId}
            toogleQuestion={toogleQuestion}
          />
        );
      })}
    </section>
  );
};

export default Questions;

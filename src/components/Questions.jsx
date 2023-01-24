import React, { useCallback, useState } from "react";

function determineClasses(indexes, cardIndex) {
  if (indexes.currentIndex === cardIndex) {
    return "active";
  } else if (indexes.nextIndex === cardIndex) {
    return "next";
  } else if (indexes.previousIndex === cardIndex) {
    return "prev";
  }
  return "inactive";
}

const Questions = ({
  topics,
  handleAnswerOptionClick,
  i,
  currentTopic,
  setCurrentTopic,
  answers,
}) => {
  const [indexes, setIndexes] = useState({
    previousIndex: 0,
    currentIndex: 0,
    nextIndex: 1,
  });

  const handleCardTransition = useCallback(() => {
    // If we've reached the end, start again from the first card,
    // but carry previous value over
    if (indexes.currentIndex >= topics.length - 1) {
      setIndexes({
        previousIndex: topics.length - 1,
        currentIndex: 0,
        nextIndex: 1,
      });
    } else {
      setIndexes((prevState) => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex:
          prevState.currentIndex + 2 === topics.length
            ? 0
            : prevState.currentIndex + 2,
      }));
    }
  }, [indexes.currentIndex, topics.length]);

  const handleBackCardTransition = useCallback(() => {
    // Remove last item from answers list
    answers.pop();
    // If we've reached the end, start again from the first card,
    // but carry previous value over
    if (indexes.currentIndex >= topics.length - 1) {
      setIndexes({
        previousIndex: topics.length - 1,
        currentIndex: 0,
        nextIndex: 1,
      });
    } else {
      setIndexes((prevState) => ({
        previousIndex:
          prevState.currentIndex - 2 === topics.length
            ? 0
            : prevState.currentIndex - 2,
        currentIndex: prevState.currentIndex - 1,
        nextIndex: prevState.currentIndex,
      }));
    }
  }, [indexes.currentIndex, topics.length, answers]);

  return (
    <>
      <div>
        <button
          onClick={() => {
            setCurrentTopic(currentTopic - 1);
            handleBackCardTransition();
          }}
        >
          Back
        </button>
      </div>
      <div className="questions-wrapper">
        <ul className="card-carousel">
          {topics.map((topic, index) => (
            <li
              key={topic.id}
              className={`card ${determineClasses(indexes, index)}`}
            >
              <div className="question-section">
                <div className="icon" style={{ backgroundColor: topic.color }}>
                  {topic.icon}
                </div>
                <div className="title">
                  <h2 style={{ color: topic.color }}>{topic.categoryTitle}</h2>
                  <div className="count">
                    Step {topic.id + 1} of {topics.length}
                  </div>
                </div>
              </div>

              <div>
                <p className="description">{topic.categoryDescription}</p>
              </div>

              <div className="answer-section">
                {topic.answerOptions.map((answerOption, index) => (
                  <div className="item" key={index}>
                    <button
                      onClick={() => {
                        handleAnswerOptionClick(
                          answerOption.ageRating,
                          topic.categoryTitle
                        );
                        handleCardTransition();
                      }}
                      key={i++}
                    >
                      {answerOption.answerText}
                    </button>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Questions;

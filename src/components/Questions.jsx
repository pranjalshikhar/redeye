const Questions = ({
  topics,
  handleAnswerOptionClick,
  currentTopic,
  setCurrentTopic,
}) => {
  return (
    <div className="wrapper column mb-30">
      <div className="question-section">
        <div className="question-title">
          <h2>{topics[currentTopic].categoryTitle}</h2>
          <div className="question-count">
            Step {currentTopic + 1} of {topics.length}
          </div>
        </div>
        <div className="question-description">
          <p>{topics[currentTopic].categoryDescription}</p>
        </div>
      </div>
      <div className="answer-section d-flex">
        {topics[currentTopic].answerOptions.map((answerOption, i) => (
          <div className="answer-item" key={i}>
            <button
              onClick={() =>
                handleAnswerOptionClick(
                  answerOption.ageRating,
                  topics[currentTopic].categoryTitle
                )
              }
              key={i++}
            >
              <span className="d-flex align-items-center">
                <img
                  src={`/images/circle-${answerOption.ageRating}.svg`}
                  alt=""
                />
                {answerOption.answerText}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;

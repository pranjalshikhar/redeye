import React from "react";

const FinalRating = ({ finalAgeRating, ratingColor, ratingsList, answers }) => {
  return (
    <>
      <div className="ratings-final align-items-center">
        {finalAgeRating || finalAgeRating === 0 ? (
          <>
            <div className="ratings-content">
              <img
                src={`/img/icon-${ratingsList[finalAgeRating]}.svg`}
                alt="Final film rating icon"
              />
              <div className="ratings-title">
                <h2>
                  Your film is a{" "}
                  <span style={{ color: ratingColor }}>
                    {ratingsList[finalAgeRating]}
                  </span>{" "}
                  rated film
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  consequat ornare maximus. Praesent porta felis eu tortor
                  facilisis placerat. Phasellus rutrum dapibus auctor. Phasellus
                  vulputate, nisl sit amet elementum imperdiet, metus leo
                  pellentesque turpis, sed fermentum quam nulla quis libero. Ut
                  sit amet orci semper, euismod leo sit amet, bibendum mi. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="overview-section">
        <h3>The ratings are:</h3>
        <div className="overview-item-container">
          {answers.map((answer, i) => (
            <div key={i} className="overview-item">
              <img src={`/img/icon-${answer.categoryRating}.svg`} alt="" />
              <p className="d-flex flex-column justify-content-center">
                {answer.categoryTitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FinalRating;

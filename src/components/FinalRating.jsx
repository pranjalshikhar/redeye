import React from "react";

const FinalRating = ({ finalAgeRating, ratingColor, ratingsList, answers }) => {
  return (
    <>
      <div className="ratings-final d-flex align-items-center">
        {finalAgeRating || finalAgeRating == 0 ? (
          <div>
            <h3>
              The BBFC would probably rate this film:{" "}
              <span style={{ color: ratingColor }}>
                {ratingsList[finalAgeRating]}
              </span>
            </h3>
            <img
              src={`/images/icon-${ratingsList[finalAgeRating]}.svg`}
              alt="Final film rating icon."
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              consequat ornare maximus. Praesent porta felis eu tortor facilisis
              placerat. Phasellus rutrum dapibus auctor. Phasellus vulputate,
              nisl sit amet elementum imperdiet, metus leo pellentesque turpis,
              sed fermentum quam nulla quis libero. Ut sit amet orci semper,
              euismod leo sit amet, bibendum mi. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin a lorem in mauris auctor mattis at
              eget leo. Suspendisse finibus viverra nisi, a fringilla leo
              pellentesque id. Vestibulum ac tortor neque.
            </p>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="ratings-section d-flex flex-column p-2">
        <h2>The ratings are:</h2>
        <div className="ratings-overview d-flex flex-row flex-wrap">
          {answers.map((answer, i) => (
            <div key={i} className="ratings-overview-item">
              <img src={`/images/icon-${answer.categoryRating}.svg`} />
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

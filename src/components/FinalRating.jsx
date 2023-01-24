import React, { useEffect, useState } from "react";
import Film from "./Film";
import { ReactComponent as RatingGraphic } from "../images/rating-graphic.svg";

let ratedCategories = [];
let ratedCategoryList = [];
let ratedCategoryLastItem = [];

function search(objectItem, answersArray) {
  for (var i = 0; i < answersArray.length; i++) {
    if (answersArray[i].categoryRating === objectItem) {
      ratedCategories.push(answersArray[i].categoryTitle.toLowerCase());
    }
  }
}

const ratingDescription = {
  U: `Your film is likely to be suitable for audiences of any age. Even though it might feature some very light violence, threat, horror, nudity or bad language, audiences are reassured and the film has a mostly-positive ending.`,
  PG: `Your film might contain some scenes that are unsuitable for very young children, but is likely to be generally acceptable for children eight years or older. Children can generally watch films like this on their own, but parents should think about whether it could be upsetting for more sensitive children.`,
  12: `Your film might contain some content that is unsuitable for younger children (for example those under 12). Your film might feature some bad language or distressing scenes, but they are light enough (or featured in a minor enough way) to be suitable for pre-teens.`,
  15: `Your film contains content that is unsuitable for viewers in their early-teens (13 or 14) as it could upset younger viewers. Films like this are not adult-only, but may contain some strong language or distressing scenes.`,
  18: `Films like yours are unsuitable for anyone that is under the age of 18, and should only be viewed by adults. These kinds of films contain more extreme content or themes.`,
};

const FinalRating = ({ finalAgeRating, ratingColor, ratingsList, answers }) => {
  const [filmData, setFilmData] = useState(null);

  const filmListUrl = `https://api.themoviedb.org/3/discover/movie?api_key=8af1272c35921dca7a2a0cba4b65f165&certification_country=GB&certification=${ratingsList[finalAgeRating]}&with_original_language=en&sort_by=revenue.desc`;

  useEffect(() => {
    const getFilmData = async () => {
      const response = await fetch(filmListUrl);
      const jsonData = await response.json();
      setFilmData(jsonData.results);
    };

    getFilmData();
  }, [filmListUrl]);

  useEffect(() => {
    search(ratingsList[finalAgeRating], answers);

    ratedCategoryList.push(ratedCategories.slice(0, -1).join(", "));

    if (ratedCategories.length === 1) {
      ratedCategoryLastItem.push(`${ratedCategories.splice(-1)}`);
    } else if (ratedCategories.length > 1) {
      ratedCategoryLastItem.push(`and ${ratedCategories.splice(-1)}`);
    } else {
      console.log(`No conditions have been met`);
    }
  }, [ratingsList, finalAgeRating, answers]);

  return (
    <main className="main-wrapper column">
      <div className="content-box column">
        <div className="rating-section">
          {finalAgeRating || finalAgeRating === 0 ? (
            <>
              <div className="title">
                <h2>
                  Your film is suitable for{" "}
                  <span style={{ color: ratingColor }}>
                    {ratingsList[finalAgeRating] === "U"
                      ? "people of any age"
                      : ratingsList[finalAgeRating] === "PG"
                      ? "children"
                      : ratingsList[finalAgeRating] === "12"
                      ? "older children"
                      : ratingsList[finalAgeRating] === "15"
                      ? "teenagers"
                      : ratingsList[finalAgeRating] === "18"
                      ? "adults"
                      : null}
                  </span>
                  .
                </h2>
                <p>{ratingDescription[`${ratingsList[finalAgeRating]}`]}</p>

                {ratedCategoryList.length !== 0 ? (
                  <p>
                    Your film has been rated this way because it features{" "}
                    <span style={{ color: ratingColor, fontWeight: 700 }}>
                      {ratedCategoryList} {ratedCategoryLastItem}
                    </span>{" "}
                    deemed appropriate for this audience.
                  </p>
                ) : (
                  <p>Please while we load your rating information...</p>
                )}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className="content-box">
        <div className="other-films-section">
          {filmData ? (
            <>
              <h2>
                Other films suitable for{" "}
                <span style={{ color: ratingColor }}>
                  {ratingsList[finalAgeRating] === "U"
                    ? "people of any age"
                    : ratingsList[finalAgeRating] === "PG"
                    ? "children when watching with adults"
                    : ratingsList[finalAgeRating] === "12"
                    ? "older children"
                    : ratingsList[finalAgeRating] === "15"
                    ? "teenagers"
                    : ratingsList[finalAgeRating] === "18"
                    ? "adults"
                    : null}
                </span>
              </h2>

              <div className="items">
                {filmData.slice(0, 6).map((film, index) => (
                  <Film key={`${index}-${film.original_title}`} film={film} />
                ))}
              </div>
            </>
          ) : (
            <p>Please wait...</p>
          )}
        </div>
      </div>

      <div className="content-box column start-again">
        <button
          onClick={(e) => {
            e.preventDefault();
            window.location.reload();
          }}
          className="start-button"
        >
          Start Again
        </button>
      </div>
    </main>
  );
};

export default FinalRating;

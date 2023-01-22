import { useEffect } from "react";
import { useState } from "react";

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
  U: `A U-rated film is likely to be suitable for audiences aged four years and over, although it is impossible to predict what might upset any particular child. U films should be set within a positive framework and should offer reassuring counterbalances to any violence, threat or horror that might exist.`,
  PG: `A PG-rated film might feature scenes unsuitable for young children, though it should not unsettle a child aged around eight or older. Unaccompanied children of any age may watch a film like this, but parents are advised to consider whether the content may upset younger, or more sensitive, children.`,
  12: `A 12 or 12A-rated film contain material that is not generally suitable for children aged under 12. The 12A rating is given to films when they are displayed in a cinema, and mean that no one younger than 12 may see this unless accompanied by an adult. Adults planning to take a child under 12 to view a 12A film should consider whether the film is suitable for that child, and the BBFC provide ratings information to help adults decide. No one younger than 12 may rent or buy a 12 rated video work.`,
  15: `A 15-rated film is likely to contain content that is unsuitable for younger children, and so no one younger than 15 may see one of these films in a cinema, or rent or buy a 15-rated video work.`,
  18: `An 18-rated film is considered to be unsuitable for children, and so no one younger than 18 may see an 18 film in a cinema. In addition to this, no one younger than 18 may rent or buy an 18 rated video work. However, the BBFC say that adults should be free to choose their own entertainment.`,
};

const FinalRating = ({ finalAgeRating, ratingColor, ratingsList, answers }) => {
  const [filmData, setFilmData] = useState(null);
  const filmListURL = `https://api.themoviedb.org/3/discover/movie?api_key=ed6d6a1005f39467d292d967980f2f11&certification_country=GB&certification=${ratingsList[finalAgeRating]}&with_original_language=en&sort_by=revenue.desc`;

  useEffect(() => {
    const getFilmData = async () => {
      const response = await fetch(filmListURL);
      const data = await response.json();
      setFilmData(data.results);
    };
  }, [filmListURL]);

  useEffect(() => {
    search(ratingsList[finalAgeRating], answers);

    ratedCategoryList.push(ratedCategories.slice(0, -1).join(", "));

    if (ratedCategories.length === 1) {
      ratedCategoryLastItem.push(`${ratedCategories.splice(-1)}`);
    } else if (ratedCategories.length > 1) {
      ratedCategoryLastItem.push(`and ${ratedCategories.splice(-1)}`);
    } else {
      console.log(`No conditions have been met.`);
    }
  }, [ratingsList, finalAgeRating, answers]);

  return (
    <>
      <div className="wrapper">
        <div className="ratings-final align-items-center">
          {finalAgeRating || finalAgeRating === 0 ? (
            <div className="ratings-content">
              <img
                src={`/images/icon-${ratingsList[finalAgeRating]}.svg`}
                alt="Final film rating icon"
              />
              <div className="ratings-title">
                <h2>
                  Your film is a{" "}
                  <span style={{ color: ratingColor }}>
                    {ratingsList[finalAgeRating]}
                  </span>{" "}
                  rated film.
                </h2>
                <p>{ratingDescription[`${ratingsList[finalAgeRating]}`]}</p>
                {ratedCategoryList.length !== 0 ? (
                  <p>
                    Your film has been rated this way because it features{" "}
                    <span style={{ color: ratingColor, fontWeight: 900 }}>
                      {ratedCategoryList} {ratedCategoryLastItem}
                    </span>{" "}
                    deemed appropriate for an audience of this age.
                  </p>
                ) : (
                  <p>Please while we load your rating information...</p>
                )}
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className="wrapper">
        <div className="overview-section">
          <h3>Ratings by Category.</h3>
          <div className="overview-item-container">
            {answers.map((answer, i) => (
              <div key={i} className="overview-item">
                <img src={`/images/icon-${answer.categoryRating}.svg`} alt="" />
                <p className="d-flex flex-column justify-content-center">
                  {answer.categoryTitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="wrapper column">
        {filmData ? (
          <>
            <h3>
              Other{" "}
              <span style={{ color: ratingColor }}>
                {ratingsList[finalAgeRating]}
              </span>{" "}
              rated films.
            </h3>
            <div className="film-items">
              <div className="item">
                <img
                  src={`https://image.tmdb.org/t/p/original/${filmData[0].poster_path}`}
                />
                <h5 className="info-item">
                  {filmData[0].original_title} (
                  {filmData[0].release_date.substr(0, 4)})
                </h5>
                <p>{filmData[0].overview.substr(0, 200)}...</p>
              </div>

              <div className="item">
                <img
                  src={`https://image.tmdb.org/t/p/original/${filmData[1].poster_path}`}
                />
                <h5 className="info-item">
                  {filmData[1].original_title} (
                  {filmData[1].release_date.substr(0, 4)})
                </h5>
                <p>{filmData[1].overview.substr(0, 200)}...</p>
              </div>

              <div className="item">
                <img
                  src={`https://image.tmdb.org/t/p/original/${filmData[2].poster_path}`}
                />
                <h5 className="info-item">
                  {filmData[2].original_title} (
                  {filmData[2].release_date.substr(0, 4)})
                </h5>
                <p>{filmData[2].overview.substr(0, 200)}...</p>
              </div>
            </div>
          </>
        ) : (
          <p>Please wait...</p>
        )}
        {/* <h5 className="info-item">{filmData[0].original_title}</h5> */}
        {/* <h5 className="info-item">{filmData.location}</h5>
            <h5 className="info-item">{filmData.blog}</h5>
            <h5 className="info-item">{filmData.company}</h5> */}
      </div>
    </>
  );
};

export default FinalRating;

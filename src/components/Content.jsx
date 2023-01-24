import { useEffect, useState } from "react";
import { ReactComponent as DangerIcon } from "../images/danger-icon.svg";
import { ReactComponent as DiscriminationIcon } from "../images/discrimination-icon.svg";
import { ReactComponent as DrugsIcon } from "../images/drugs-icon.svg";
import { ReactComponent as LnaguageIcon } from "../images/language-icon.svg";
import { ReactComponent as SexNudityIcon } from "../images/sex-nudity-icon.svg";
import { ReactComponent as ThreatHorrorIcon } from "../images/threat-horror-icon.svg";
import { ReactComponent as ViolenceIcon } from "../images/violence-icon.svg";
import { FinalRating, Questions } from "./index";

const topics = [
  // Dangerous behaviour
  {
    id: 0,
    icon: <DangerIcon fill="#fff" />,
    color: "#6102d2",
    categoryTitle: "Dangerous Behaviour",
    categoryDescription:
      "Please select the option that best describes how dangerous behaviour features in your film:",
    answerOptions: [
      {
        answerText:
          "Potentially dangerous or anti-social behaviour is clearly disapproved of, and no emphasis is placed on weapons.",
        ageRating: "U",
      },
      {
        answerText:
          "Potentially dangerous behaviour is presented as safe or fun, but no detail is shown. Weapons (such as knives) are featured, but are not glamorised. No focus on anti-social behaviour.",
        ageRating: "PG",
      },
      {
        answerText:
          "Potentially dangerous behaviour features but is not promoted, and weapons are featured, also (but not glamorised). Anti-social behaviour is not endorsed in the film.",
        ageRating: "12",
      },
      {
        answerText:
          "Dangerous behaviour (for example, suicide, self-harming and asphyxiation) feature but with little detail, so they cannot be copied. Weapons are featured but are contextually appropriate.",
        ageRating: "15",
      },
      {
        answerText:
          "Characters are shown engaging in dangerous behaviour such as self-harming and some gory detail is shown. If weapons are featured, they are used regularly throughout the film.",
        ageRating: "18",
      },
    ],
  },
  // Discrimination
  {
    id: 1,
    icon: <DiscriminationIcon fil="#fff" />,
    color: "#fe346e",
    categoryTitle: "Discrimination",
    categoryDescription:
      "Please select the option that best describes how discrimination features in your film:",
    answerOptions: [
      {
        answerText: "No discriminatory language.",
        ageRating: "U",
      },
      {
        answerText:
          "It features a small amount but is disapproved of is contextually appropriate.",
        ageRating: "PG",
      },
      {
        answerText:
          "Aggressive discriminatory language or behaviour features but is clearly condemned.",
        ageRating: "12",
      },
      {
        answerText:
          "Some racist, homophobic or other discriminatory themes and language feature on occasion.",
        ageRating: "15",
      },
      {
        answerText:
          "Discriminatory language or behaviour features regularly throughout the film.",
        ageRating: "18",
      },
    ],
  },
  // Drugs
  {
    id: 2,
    icon: <DrugsIcon fil="#fff" />,
    color: "#fcdb00",
    categoryTitle: "Drugs",
    categoryDescription:
      "Please select the option that best describes how drugs feature in your film:",
    answerOptions: [
      {
        answerText: "None featured, or clear anti-drug themes.",
        ageRating: "U",
      },
      {
        answerText: "Some very mild references.",
        ageRating: "PG",
      },
      {
        answerText: "Some drug use shown, but it is infrequent.",
        ageRating: "12",
      },
      {
        answerText:
          "Drug taking is shown, but it does promote or encourage drug misuse.",
        ageRating: "15",
      },
      {
        answerText: "Strong, frequent drug use features throughout.",
        ageRating: "18",
      },
    ],
  },
  // Language
  {
    id: 3,
    icon: <LnaguageIcon fil="#fff" />,
    color: "#0cd68a",
    categoryTitle: "Language",
    categoryDescription:
      "Please select the option that best describes how bad language features in your film:",
    answerOptions: [
      {
        answerText: "Infrequent use only of very mild bad language.",
        ageRating: "U",
      },
      {
        answerText:
          "Mild bad language only. Aggressive or very frequent use of mild bad language may result in a work being passed at a higher category.",
        ageRating: "PG",
      },
      {
        answerText:
          "Moderate bad language, with rare instances of strong language.",
        ageRating: "12",
      },
      {
        answerText:
          "Strong languages features with rare instances of very strong language.",
        ageRating: "15",
      },
      {
        answerText: "Very strong language features frequently.",
        ageRating: "18",
      },
    ],
  },
  // Sex and Nudity
  {
    id: 4,
    icon: <SexNudityIcon fil="#fff" />,
    color: "#2238af",
    categoryTitle: "Sex and Nudity",
    categoryDescription:
      "Please select the option that best describes how sex or nudity feature in your film:",
    answerOptions: [
      {
        answerText: "Occasional nudity, but with no sexual context.",
        ageRating: "U",
      },
      {
        answerText:
          "Some nudity, with no sexual context. Sexual activity is implied, or innuendo features.",
        ageRating: "PG",
      },
      {
        answerText:
          "Some nudity, but in a sexual context it is brief and only implied.",
        ageRating: "12",
      },
      {
        answerText:
          "Sexual activity, but without strong detail. There may be strong verbal references to sexual behaviour, but any depiction of the stronger forms of sexual violence is not detailed or prolonged.",
        ageRating: "15",
      },
      {
        answerText:
          "Sexual activity, with some strong detail. Repeated strong verbal references to sexual behaviour, and references to sexual threat are more prolonged.",
        ageRating: "18",
      },
    ],
  },
  // Threat and Horror
  {
    id: 5,
    icon: <ThreatHorrorIcon fil="#fff" />,
    color: "#fe346e",
    categoryTitle: "Threat and Horror",
    categoryDescription:
      "Please select the option that best describes how threat or horror feature in your film:",
    answerOptions: [
      {
        answerText:
          "Scary or potentially unsettling sequences are mild, brief and unlikely to upset children.",
        ageRating: "U",
      },
      {
        answerText:
          "Frightening sequences where characters are in danger are not prolonged or intense.",
        ageRating: "PG",
      },
      {
        answerText:
          "Moderate physical and psychological threat and horror sequences. Although some scenes may be disturbing, the overall tone is not. Horror sequences are frequent or sustained.",
        ageRating: "12",
      },
      {
        answerText:
          "Strong threat and horror, however there is not sustained focus on sadistic threat.",
        ageRating: "15",
      },
      {
        answerText:
          "Strong threat and horror feature regularly, and sadistic threat is more prolonged.",
        ageRating: "18",
      },
    ],
  },
  // Violence
  {
    id: 6,
    icon: <ViolenceIcon fil="#fff" />,
    color: "#6102d2",
    categoryTitle: "Violence",
    categoryDescription:
      "Please select the option that best describes how violence features in your film:",
    answerOptions: [
      {
        answerText: "Violence is generally very mild, unrealistic or comedic.",
        ageRating: "U",
      },
      {
        answerText:
          "Violence is mild. Some moderate violence, without detail, and it is justified by its context (for example, history, comedy or fantasy).",
        ageRating: "PG",
      },
      {
        answerText:
          "Moderate violence but it does not dwell on detail. No emphasis on injuries or blood, but occasional gory moments feature and are justified by the context.",
        ageRating: "12",
      },
      {
        answerText:
          "Some strong violence but no focus on the infliction of pain or injury. No strong gore.",
        ageRating: "15",
      },
      {
        answerText:
          "Strong or gory violence, with some focus on the infliction of pain or injury.",
        ageRating: "18",
      },
    ],
  },
];

const colors = [
  // purple
  "#6102d2",
  // pink
  "#fe346e",
  // yellow
  "#fcdb00",
  // turqoise
  "#0cd68a",
  // blue
  "#2238af",
];

const ratingsList = ["U", "PG", "12", "15", "18"];

const addRatingItem = (category, ageRating) => {
  return {
    categoryTitle: category,
    categoryRating: ageRating,
  };
};

const Content = () => {
  const [currentTopic, setCurrentTopic] = useState(0);
  const [showRating, setShowRating] = useState(false);
  const [finalAgeRating, setFinalAgeRating] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [ratingColor, setRatingColor] = useState("");

  const handleAnswerOptionClick = (ageRating, category) => {
    setAnswers([...answers, addRatingItem(category, ageRating)]);

    // console.log(answers);
    const ratingRank = ratingsList.findIndex((rating) => rating === ageRating);
    // console.log(ratingRank);

    if (finalAgeRating < ratingRank) {
      setFinalAgeRating(ratingRank);
    }

    const nextQuestion = currentTopic + 1;
    if (nextQuestion < topics.length) {
      setCurrentTopic(nextQuestion);
    } else {
      setShowRating(true);
    }

    if (finalAgeRating < ratingRank) {
      setFinalAgeRating(ratingRank);
    }

    useEffect(() => {
      setRatingColor(colors[finalAgeRating]);
    }, [finalAgeRating]);
  };

  return (
    <>
      {showRating ? (
        <FinalRating
          finalAgeRating={finalAgeRating}
          ratingColor={ratingColor}
          ratingsList={ratingsList}
          answers={answers}
        />
      ) : (
        <Questions
          topics={topics}
          handleAnswerOptionClick={handleAnswerOptionClick}
          currentTopic={currentTopic}
          setCurrentTopic={setCurrentTopic}
        />
      )}
    </>
  );
};

export default Content;

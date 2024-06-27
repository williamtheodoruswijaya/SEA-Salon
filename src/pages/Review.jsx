import Navbar from "../components/Navbar";
import review from "../assets/review.png";
import star_on from "../assets/star_on.png";
import star_off from "../assets/star_off.png";
import { useState } from "react";

function Review() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [comments, setComments] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const submitReview = () => {
    console.log(firstName, lastName, rating, comments);
  };
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      ></link>
      <Navbar />
      <div className="bg-[url('./assets/dashboard-background.png')] w-full h-auto">
        <div className="flex flex-row items-center justify-center">
          <div>
            <h1 className="text-5xl font-bold text-primary mx-10 my-2">
              How was your experience?
            </h1>
            <p className="text-sm font-medium text-primary mx-10">
              {" "}
              Your feedback is valuable to us.
            </p>
            <div className="flex flex-row">
              <div className="min-w-[20vh] mt-10 ml-10">
                <input
                  value={firstName}
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                  className="p-3 rounded-xl bg-white text-black min-w-90"
                />
              </div>
              <div className=" min-w-[20vh] mt-10 ml-10">
                <input
                  value={lastName}
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                  className="p-3 rounded-xl bg-white text-black min-w-90"
                />
              </div>
            </div>
            <div className="flex">
              <button
                onClick={() => setRating(1)}
                onMouseEnter={() => setHoverRating(1)}
                onMouseLeave={() => setHoverRating(0)}
                className="hover:bg-transparent pr-3"
              >
                <img
                  src={`${rating > 0 || hoverRating > 0 ? star_on : star_off}`}
                  alt=""
                  className="w-10 ml-10 my-5"
                />
              </button>
              <button
                onClick={() => setRating(2)}
                onMouseEnter={() => setHoverRating(2)}
                onMouseLeave={() => setHoverRating(0)}
                className="hover:bg-transparent pr-3"
              >
                <img
                  src={`${rating > 1 || hoverRating > 1 ? star_on : star_off}`}
                  alt=""
                  className="w-10 ml-10 my-5"
                />
              </button>
              <button
                onClick={() => setRating(3)}
                onMouseEnter={() => setHoverRating(3)}
                onMouseLeave={() => setHoverRating(0)}
                className="hover:bg-transparent pr-3"
              >
                <img
                  src={`${rating > 2 || hoverRating > 2 ? star_on : star_off}`}
                  alt=""
                  className="w-10 ml-10 my-5"
                />
              </button>
              <button
                onClick={() => setRating(4)}
                onMouseEnter={() => setHoverRating(4)}
                onMouseLeave={() => setHoverRating(0)}
                className="hover:bg-transparent pr-3"
              >
                <img
                  src={`${rating > 3 || hoverRating > 3 ? star_on : star_off}`}
                  alt=""
                  className="w-10 ml-10 my-5"
                />
              </button>
              <button
                onClick={() => setRating(5)}
                onMouseEnter={() => setHoverRating(5)}
                onMouseLeave={() => setHoverRating(0)}
                className="hover:bg-transparent pr-3"
              >
                <img
                  src={`${rating > 4 || hoverRating > 4 ? star_on : star_off}`}
                  alt=""
                  className="w-10 ml-10 my-5"
                />
              </button>
            </div>
            <div className=" pb-5 ml-10 flex">
              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder="Comments"
                className="bg-white rounded-xl p-3 text-lg min-w-[70vh] min-h-[20vh]"
              />
            </div>
            <button
              onClick={submitReview}
              className="bg-secondary hover:bg-tertiary rounded-xl p-3 ml-10 min-w-[40vh] min-h-[7vh] text-white"
            >
              Submit
            </button>
          </div>
          <img
            src={review}
            alt="salon_dashboard"
            className="w-1/3 md:w-[90vh] h-auto mx-10 mt-10 md:mt-[10vh]"
          />
        </div>
      </div>
    </>
  );
}

export default Review;

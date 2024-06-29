import Navbar from "../components/Navbar";
import review from "../assets/review.png";
import star_on from "../assets/star_on.png";
import star_off from "../assets/star_off.png";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { v4 as uuidv4 } from "uuid";

function Review() {
  const { userData } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [comments, setComments] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const storeReview = async () => {
    try {
      const docRef = await setDoc(doc(db, "MsReview", uuidv4()), {
        name: userData.name,
        comment: comments,
        rating: rating,
      });
      console.log("Document written: ", docRef);
      alert("Review submitted successfully");
    } catch (e) {
      console.log("Error adding document: ", e);
      alert("Error submitting review");
    }
  };
  const submitReview = async () => {
    if (rating === 0) {
      alert("Please rate the service");
      return;
    } else if (comments === "") {
      alert("Please write a comment");
      return;
    } else if (userData.email === "") {
      alert("Please login to submit a review");
      navigate("/login");
      return;
    }
    try {
      await storeReview();
    } catch (e) {
      console.log(e);
      alert("Error submitting review");
    } finally {
      setComments("");
      setRating(0);
      setHoverRating(0);
    }
  };
  useEffect(() => {
    if (userData.email !== "") {
      setIsLogin(true);
    }
  }, [userData]);
  const namaDepan = userData?.name.split(" ")[0];
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      ></link>
      <Navbar />
      <div className="bg-[url('./assets/dashboard-background.png')] bg-cover w-screen h-screen">
        <div className="flex flex-row items-center justify-center">
          <div>
            {isLogin ? (
              <h1 className="text-[6vh] font-bold text-primary mx-10 my-5">
                How was your experience, {namaDepan}?
              </h1>
            ) : (
              <h1 className="text-[6vh] font-bold text-primary mx-10 my-2">
                How was your experience?
              </h1>
            )}
            <p className="text-[2vh] font-medium text-primary mx-10">
              {" "}
              Your feedback is valuable to us.
            </p>
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
              className="bg-secondary hover:bg-tertiary transition duration-300 ease-in-out rounded-xl p-3 ml-10 min-w-[40vh] min-h-[7vh] text-white"
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

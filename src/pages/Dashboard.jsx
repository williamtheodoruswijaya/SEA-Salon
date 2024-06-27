import Navbar from "../components/Navbar";
import salon_dashboard from "../assets/salon_dashboard.png";
import hair_cut from "../assets/Haircut_Services.jpeg";
import manicure from "../assets/Manicure-Pedicure.jpg";
import facial from "../assets/Facial-Treatments.jpg";

function Dashboard() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      ></link>
      <Navbar />
      <div className="bg-background w-full h-auto">
        <div className="flex flex-row items-center justify-center">
          <div>
            <h1 className="text-6xl font-bold text-primary mx-10">Sea Salon</h1>
            <p className="text-sm font-medium text-primary mx-10">
              {" "}
              “Beauty and Elegance Redefined”
            </p>
          </div>
          <img
            src={salon_dashboard}
            alt="salon_dashboard"
            className="w-1/3 md:w-[90vh] h-auto mx-10 my-5"
          />
        </div>
        <div className="flex flex-col items-center justify-center bg-primary w-full h-auto ">
          <h1 className="text-6xl font-bold text-background mx-10 my-10">
            Our Services
          </h1>

          {/* Haircuts and Styling services */}
          <div className="items-start justify-start flex flex-row">
            <div className="pl-[15vh] py-5">
              <img
                src={hair_cut}
                alt="hair_cut"
                className="rounded-3xl drop-shadow-md min-w-80 h-auto"
              />
            </div>
            <div>
              <h2 className="text-4xl font-semibold text-background px-[15vh] my-5">
                Haircuts and Styling
              </h2>
              <p className="text-lg font-medium text-background px-[15vh] my-3">
                Discover the latest trends in haircuts and styling with our
                expert stylists who specialize in creating looks that not only
                enhance your natural features but also align perfectly with your
                personality and lifestyle. Whether you are seeking a bold new
                haircut, a subtle trim, or a complete style overhaul, our
                stylists are dedicated to crafting personalized looks that leave
                you feeling confident and stylish.
              </p>
            </div>
          </div>

          {/* Manicure and Pedicure sections */}
          <div className="items-start justify-start flex flex-row mb-10">
            <div>
              <h2 className="text-4xl font-semibold text-background px-[15vh] my-5 order-2 text-right">
                Manicure and Pedicure
              </h2>
              <p className="text-lg font-medium text-background px-[15vh] my-3 order-2 text-right">
                Indulge in our luxurious manicure and pedicure services,
                meticulously designed to pamper and rejuvenate your hands and
                feet with the utmost care and attention to detail. Our skilled
                technicians use premium products and techniques to ensure a
                relaxing experience that leaves your hands and feet feeling
                refreshed, hydrated, and beautifully groomed.
              </p>
            </div>
            <div className="pr-[15vh] py-5 order-1">
              <img
                src={manicure}
                alt="manicure"
                className="rounded-3xl drop-shadow-md object-contain min-w-80 h-auto"
              />
            </div>
          </div>

          {/* Facial Treatments */}
          <div className="items-start justify-start flex flex-row">
            <div className="pl-[15vh] py-5">
              <img
                src={facial}
                alt="facial"
                className="rounded-3xl drop-shadow-md object-contain min-w-80 h-auto"
              />
            </div>
            <div>
              <h2 className="text-4xl font-semibold text-background px-[15vh] my-5">
                Facial Treatments
              </h2>
              <p className="text-lg font-medium text-background px-[15vh] my-3">
                Experience radiant and glowing skin with our customized facial
                treatments, expertly curated to cleanse, exfoliate, and nourish
                your skin. Our tailored approach ensures that each treatment
                addresses your specific skin concerns, whether it is hydration,
                rejuvenation, or purification. Using high-quality products and
                advanced techniques, our facials leave your skin feeling
                refreshed, revitalized, and noticeably radiant. Treat yourself
                to a pampering session that enhances your natural beauty and
                promotes a healthy complexion.
              </p>
            </div>
          </div>

          {/* Contact Details */}
          <div className="items-start justify-start my-3 mx-10">
            <div className="items-center justify-center flex flex-row">
              <h2 className=" text-6xl font-bold text-background my-5">
                Contact Us
              </h2>
            </div>
            <div className="flex flex-row">
              <h3 className="text-lg font-medium text-background mx-10">
                Thomas: 08123456789
              </h3>
              <h3 className="text-lg font-medium text-background mx-10">
                Sekar: 08164829372
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

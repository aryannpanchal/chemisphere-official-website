import Link from "next/link";
import React from "react";

const Card = ({ title, description, imageUrl, link}) => (
  <>  
  <article className="flex flex-wrap md:flex-nowrap  group cursor-pointer transform duration-500 hover:-translate-y-1 max-w-md md:max-w-none laptop:mx-4">
    <img
      className="w-full max-h-[300px] object-cover md:w-52 rounded-lg"
      src={imageUrl}
      alt={title}
    />
    <div className="flex-1">
      <div className="py-5 pb-10 text-left">
        <h1 className="text-lg font-semibold text-left text-chemisphere">{title}</h1>
        <p className="text-sm mt-2 leading-relaxed">{description}</p>
        <p className="text-gray-900 font-bold py-4">Online Mode</p>
        <Link href={link} className="max-h-fit justify-center text-center flex items-center bg-chemisphere py-2 px-2 rounded-lg text-white">
            Inquiry
          </Link>
      </div>

    </div>
  </article></>

);

const ExamCard = () => {
  const cardsData = [
    {
      title: "JEE Main/Advanced coaching",
      description:
        "Located in Our JEE Main & Advanced batch offers full syllabus coverage, flexible monthly payment plans, regular doubt-solving sessions, and personalized assignments after each lecture. You'll be well-prepared for the upcoming JEE Main with our comprehensive program!",
      imageUrl: "/jee-banner.png",
      link: "/ab",
    },
    {
      title: "NEET coaching",
      description:
        "Our NEET batch is designed to cover the entire NEET syllabus, focusing deeply on all the important concepts and tricks, frequent question patterns, and strategies to ace the medical entrance exam. Join us to boost your chances of getting into a top medical school! Join our NEET specialized course now.",
      imageUrl: "/neet-banner.png",
      link: "",
    },
    {
      title: "XI-XII Boards coaching",
      description:
        "Our comprehensive board exam preparation batches are tailored to help students excel in their Class XII and XI exams. With a focus on concept clarity, application-based learning, and thorough syllabus coverage, we ensure students are well-prepared to score top marks. Join now.",
      imageUrl: "/board-banner.png",
      link: "",
    },
  ];

  return (
    <section className="container mx-auto px-10 md:p-20 antialiased ">
      <p className='font-semibold text-center mb-12 text-4xl'>Our programs</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-lg">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default ExamCard;

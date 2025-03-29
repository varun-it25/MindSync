import React from "react";

const articles = [
  {
    title: "The Science of Stress: What’s Happening in Your Brain?",
    description: "Understand the biological and psychological effects of stress.",
    image: "https://uncovercounseling.com/wp-content/uploads/2025/02/this-girl-is-a-having-a-science-stress.jpg",
  },
  {
    title: "10-Minute Mindfulness: Quick Practices to Instantly Reduce Stress",
    description: "Simple mindfulness techniques to calm your mind.",
    image: "https://i.ytimg.com/vi/O-6f5wQXSu8/maxresdefault.jpg",
  },
  {
    title: "Breaking the Stress Cycle: Simple Steps to a Calmer Life",
    description: "Easy-to-follow methods to break free from stress.",
    image: "https://emmanewlynyoga.com/wp-content/uploads/2020/01/illustration-stress-.jpg",
  },
  {
    title: "Why You’re Always Stressed & How to Fix It",
    description: "Identify stress triggers and find effective solutions.",
    image: "https://img.freepik.com/free-vector/business-stress-flat-composition-with-view-tired-male-employee-workplace-with-clock-fire-vector-illustration_1284-81289.jpg",
  },
  {
    title: "The Power of Deep Breathing: A Secret Weapon for Stress Relief",
    description: "Harness deep breathing techniques for instant relaxation.",
    image: "https://images.everydayhealth.com/images/seo-graphic-content-initiative/eh-potential-health-benefits-of-deep-breathing-seo-graphics-gs.png?sfvrsn=a078741c_3",
  },
];

const StressLibrary = () => {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Library</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <div className="relative w-full h-96">
            <img
              src={articles[0].image}
              alt={articles[0].title}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
           

            <div className="absolute  bottom-4 mx-10 bg-black bg-opacity-70 p-4 rounded-lg">
              <h2 className="text-xl font-semibold">{articles[0].title}</h2>
              <p className="text-gray-300">{articles[0].description}</p>
            </div>
          </div>
        </div>
        {articles.slice(1).map((article, index) => (
          <div
            key={index}
            className="flex gap-4 bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-32 h-32 object-cover rounded-lg"
            />
            <div>
              <h2 className="text-lg font-semibold">{article.title}</h2>
              <p className="text-gray-300">{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StressLibrary;

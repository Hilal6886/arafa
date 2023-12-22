import React from 'react';
import aboutUsImage1 from ".././assets/imagest/about.jpg";
const AboutUsSection = () => {
  return (
    <section className="py-16 px-4 lg:px-0 bg-gray-100">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Images Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={aboutUsImage1}
            alt="About Us Image 1"
            className="w-full h-auto rounded-md shadow-lg"
          />
         
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 lg:pl-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Arafah International School
          </h2>
          <p className="text-gray-700 mb-4">
            Arafah International School offers an enriching and seamless educational journey within a supportive community dedicated to excellence in both the present and the beyond. Each facet of our educational approach is meticulously crafted to captivate our students' intellect and talents, reshaping their perspectives to navigate the competitive global landscape while nurturing their personal aspirations.
          </p>
          <p className="text-gray-700 mb-4">
            In our eyes, every child is a unique individual endowed with distinct abilities. From grasping the intricacies of science and mathematics to cultivating the art of eloquent public speaking, our students are meticulously cultivated to articulate what distinguishes them as global citizens.
          </p>
          <p className="text-gray-700 mb-4">
            As you peruse our website, you will uncover the foundational principles that underpin our institution. The genesis of our school is rooted in a visionary commitment to empower young minds, sculpting them into formidable leaders poised for the challenges of tomorrow.
          </p>
          <p className="text-gray-700 mb-4">
            At Arafah, we comprehend that the formative years of education are akin to the molding of clay—a phase where a child can be delicately shaped, nurtured, and refined to fulfill their unique purpose with a steadfast foundation for learning. Infused with a fusion of ethical values and academic rigor, imparted by seasoned educators and mentors, our students are encouraged to explore their curiosities, embrace innovative challenges, solve intricate problems, and express their creativity.
          </p>
          <p className="text-gray-700 mb-4">
            The odyssey at Arafah International School transcends mere education; it is an immersive experience steeped in profound learning, enduring memories, meaningful friendships, and robust connections that contribute to the forging of a resilient society.
          </p>
          <button className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

import { useState, useEffect } from 'react';
import { SlArrowRight } from "react-icons/sl";




const Testimonials = () => {
  const groups = [];
  const [testimonials, setTestimonials] = useState([]);
  const [photoGroups, setPhotoGroups] = useState([]);

  function createTestimonials(number) {
    const startSentences = [
      "This was the best cruise I have ever been on! I told all of my friends and family about our ",
      "Thanks Brett Spenderson! We had such a great time on our cruise. I loved the ",
      "Our recent cruise experience was absolutely amazing! We really liked the ",
      "What an incredible journey! We relaxed and spent our time enjoying the ",
      "We had an unforgettable vacation.We had a great time interacting with the ",
      "This cruise exceeded all our expectations. Alaska is known for ",
      "Our family had a fantastic time on this cruise. Alaska is known for ",
      "I am so grateful for the wonderful experience we had. Mexico was great and",
      "We had an incredible time on the Journey of Discovery. We couldn't get enough of the stunning.",
      "The Journey of Discovery cruise through the South Pacific was breathtaking.",
      "Exploring the South Pacific on the Journey of Discovery was amazing.",
      "We loved our time on the Journey of Discovery. The adventure had the most ",
      "The Journey of Discovery took us to places that were breathtaking. We couldn't get enough of the ",
      "Our cruise on the Journey of Discovery was unforgettable.",
      "Every moment on the Journey of Discovery was remarkable.",
      "Our South Pacific adventure on the Journey of Discovery was incredible.",
      "Our cruise on the Journey of Dreams was unforgettable.",
      "Sailing the South Pacific on the Journey of Dreams was spectacular.",
      "We had the best time on the Journey of Dreams. I can't wait to tell everyone I know how great this trip was. I'm still thrilled about our ",
      "The Journey of Dreams cruise was remarkable. We thoroughly enjoyed our ",
      "Exploring the South Pacific with the Journey of Dreams was amazing. We were blown away by the ",
      "We loved every moment on the Journey of Dreams.",
      "The Journey of Dreams took us to places that were breathtaking. We couldn't get enough of the ",
      "Our cruise on the Journey of Dreams was outstanding.",
      "Every day on the Journey of Dreams was fantastic. The adventure had the most ",
      "Our South Pacific journey on the Journey of Dreams was incredible.",
      "Our Mediterranean adventure on the Journey of Paradise was unforgettable. The adventure had the most ",
      "Sailing the Mediterranean on the Journey of Paradise was spectacular.",
      "We had the best time on the Journey of Paradise. The culture was ",
      "The Journey of Paradise cruise was remarkable. We thoroughly enjoyed our ",
      "Exploring the Mediterranean with the Journey of Paradise was amazing.",
      "We loved our time on the Journey of Paradise. We were blown away by the ",
      "The Journey of Paradise took us to places that were breathtaking. We couldn't get enough of the ",
      "Our cruise on the Journey of Paradise was outstanding.",
      "Every day on the Journey of Paradise was fantastic. The adventure had the most ",
      "Our Mediterranean journey on the Journey of Paradise was incredible. ",
      "Journey of the Oceans was outstanding.",
      "Every day on the Journey of the Oceans was fantastic. The adventure had the most ",
      "Our Alaskan journey on the Journey of the Oceans was incredible.",
      "Our Alaskan adventure on the Journey of the Stars was unforgettable. The adventure had the most ",
      "Sailing through Alaska on the Journey of the Stars was spectacular.",
      "We had the best time on the Journey of the Stars. I can't wait to tell everyone I know how great this trip was. I'm still thrilled about our ",
      "The Journey of the Stars cruise was remarkable. We thoroughly enjoyed our ",
      "Exploring Alaska with the Journey of the Stars was amazing.",
      "We loved every moment on the Journey of the Stars. We were blown away by the ",
      "The Journey of the Stars took us to places that were breathtaking. We couldn't get enough of the ",
      "Our cruise on the Journey of the Stars was outstanding.",
      "Every day on the Journey of the Stars was fantastic. We couldn't get enough of the ",
      "Our Alaskan journey on the Journey of the Stars was incredible.",
      "Our cruise on the Journey of the Seas was unforgettable.",
      "Sailing the Mexican Riviera on the Journey of the Seas was spectacular.",
      "We had the best time on the Journey of the Seas. I can't wait to tell everyone I know how great this trip was. I'm still thrilled about our ",
      "The Journey of the Seas cruise was remarkable. We thoroughly enjoyed our ",
      "Exploring the Mexican Riviera with the Journey of the Seas was amazing. We were blown away by the ",
      "We loved every moment on the Journey of the Seas.",
      "The Journey of the Seas took us to places that were breathtaking. We couldn't get enough of the ",
      "Our cruise on the Journey of the Seas was outstanding.",
      "Every day on the Journey of the Seas was fantastic. The adventure had the most ",
      "Our Mexican Riviera journey on the Journey of the Seas was incredible.",
      "Our Alaskan adventure on the Journey of the Stars was unforgettable. The adventure had the most ",
      "Sailing through Alaska on the Journey of the Stars was spectacular.",
      "We had the best time on the Journey of the Stars. I can't wait to tell everyone I know how great this trip was. I'm still thrilled about our ",
      "The Journey of the Stars cruise was remarkable. We thoroughly enjoyed our ",
      "Exploring Alaska with the Journey of the Stars was amazing.",
      "We loved every moment on the Journey of the Stars. We were blown away by the ",
      "The Journey of the Stars took us to places that were breathtaking. We couldn't get enough of the ",
      "Our cruise on the Journey of the Stars was outstanding.",
      "Every day on the Journey of the Stars was fantastic. The adventure had the most ",
      "Our Alaskan journey on the Journey of the Stars was incredible.",
      "Our Caribbean adventure on the Journey of the Voyager was unforgettable. The adventure had the most ",
      "Sailing the Caribbean on the Journey of the Voyager was spectacular.",
      "We had the best time on the Journey of the Voyager. I can't wait to tell everyone I know how great this trip was. I'm still thrilled about our ",
      "The Journey of the Voyager cruise was remarkable. We thoroughly enjoyed our ",
      "The Journey of Serenity cruise was remarkable. We thoroughly enjoyed our ",
      "Exploring the Mediterranean with the Journey of Serenity was amazing. We were blown away by the ",
      "We enjoyed every moment on the Journey of Serenity. The adventure had the most ",
      "The Journey of Serenity took us to places that were breathtaking. We couldn't get enough of the ",
      "Our cruise on the Journey of Serenity was outstanding.",
      "Every day on the Journey of Serenity was fantastic.",
      "Our Mediterranean journey on the Journey of Serenity was incredible."
    ]

    const adjectives = [
      "scenic", "breathtaking", "beautiful", "sunny", "incredible",
      "magnificent", "stunning", "gorgeous", "awe-inspiring", "spectacular",
      "picturesque", "wonderful", "fantastic", "amazing", "enchanting",
      "charming", "delightful", "exquisite", "marvelous", "majestic",   "splendid", "unforgettable", "serene", "idyllic",
      "dreamy", "luxurious", "tranquil", "romantic",
      "refreshing", "captivating", "ethereal", "lush",
      "mesmerizing", "invigorating", "thrilling"
    ];

    const femaleNames = [
      "Emma F.", "Olivia I.","Ava","Charlotte C.","Sophia E.","Amelia Z.","Mia D.","Harper M.","Evelyn F.","Abigail P.","Ella N.","Scarlett R.","Grace Z.","Victoria H.","Aria J.","Luna L."
    ];
    const maleNames = [
      "Liam Q.","Eric R.","Noah J.","Elijah A.","James S.","Eric R.","Benjamin F.","Lucas Z.","Mason B.","Ethan R.","Eric R.","Logan L.","Alexander R.","Jackson I.","Eric R.","Aiden O.","Sebastian R.","Matthew J."
    ];

    const generatePhotoUrl = (index) => {
      const baseUrl = 'https://randomuser.me/api/portraits/';
      const gender = femaleNames.includes(name) ? 'women' : 'men';
      const randomIndex = Math.floor(Math.random() * 99);
      return `${baseUrl}${gender}/${randomIndex}.jpg`
    }

      return Array.from({ length: number }, () => {
        const sentence = startSentences[Math.floor(Math.random() * startSentences.length)];
        const adjective = sentence[sentence.length -1] === '.' ? '' : adjectives[Math.floor(Math.random() * adjectives.length)] + '... ';
        const name = Math.random() > .5 ? femaleNames[Math.floor(Math.random() * femaleNames.length)] : maleNames[Math.floor(Math.random() * maleNames.length)]
        const photoUrl = generatePhotoUrl(name)

        return { text: sentence + adjective + ' -' + name, photo: photoUrl };
      });
    }


    console.log(photoGroups)

    const refreshTestimonials = function() {
      setTestimonials(createTestimonials(testimonials.length));
    }

    useEffect(() => {
      setTestimonials(createTestimonials(4));
    }, [])




  return <div>
      <div className="px-8 flex flex-row justify-center gap-x-4 mb-6 overflow-hidden">
        {testimonials.map((testimonial, index) => (
        <div key={index} className="p-6 pb-8 bg-white font-roboto-flex w-1/5 shrink-0 border-2 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:z-10 hover:shadow-lg">
          {testimonial.text}
          <img src={testimonial.photo} alt="reviews of cruise ship with photos"/>
          <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-accent" disabled/>
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-accent" disabled
              />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-accent" disabled/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-accent" disabled/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-accent" disabled defaultChecked/>
          </div>
        </div>
        ))}
      <div className="flex items-center">
        <button className="" onClick={refreshTestimonials}>See More <SlArrowRight /></button>
      </div>

      </div>
    </div>
}

export default Testimonials

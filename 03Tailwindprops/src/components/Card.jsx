import React from 'react'

const Card = ({name}) => {
    console.log(name);
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <img
          className="w-full h-48 object-cover"
          src="https://images.pexels.com/photos/20248990/pexels-photo-20248990/free-photo-of-kangaroos-on-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Card Image"
        />
        <div className="p-4 bg-slate-400">
          <h2 className="text-xl font-bold mb-2 ">{name}</h2>
          <p className="text-gray-700 mb-4">
            This is a brief description of the card content. It provides some
            insights into what the card is about.
          </p>
          <a
            href="#"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Read More
          </a>
        </div>
      </div>
  )
}

export default Card
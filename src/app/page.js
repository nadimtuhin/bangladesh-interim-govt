import React from 'react';
import cabData from '../data/cabinet.json';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary text-white px-4">
      <h1 className="text-4xl font-bold mb-8">New Interim Government Cabinet</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cabData.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 scale-100 hover:scale-105"
          >
            <img
              src={member.placeholderImage}
              alt={`Portrait of ${member.name}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-primary mb-2">{member.name}</h2>
              <p className="text-gray-600 mb-4">{member.shortDescription}</p>
              <Link href={`/cabinet/${member.slug}`} className="inline-block bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                  View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

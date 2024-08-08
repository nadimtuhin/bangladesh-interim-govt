"use client";
import React from 'react';
import { useRouter } from 'next/navigation'
import cabData from '../../../data/cabinet.json';

export default function MemberPage({ params }) {
  const router = useRouter();
  const { slug } = params;
  const memberIndex = cabData.findIndex((m) => m.slug === slug);
  const member = cabData[memberIndex];
  const nextMember = cabData[memberIndex + 1];

  if (!member) {
    return <div>Loading...</div>;
  }

  const handleGoBack = () => {
    router.back();
  };

  const handleGoNext = () => {
    if (nextMember) {
      router.push(`/cabinet/${nextMember.slug}`);
    } else {
      // Optionally handle the case where there is no next member
      alert("You have reached the end of the list.");
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden relative">
        <button
          className="absolute top-0 left-0 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-br-lg"
          onClick={handleGoBack}
        >
          &lt; Go Back
        </button>
        <button
          className="absolute top-0 right-0 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-bl-lg"
          onClick={handleGoNext}
          disabled={!nextMember}
        >
          Next &gt;
        </button>
        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              src={member.placeholderImage}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 md:w-1/2">
            <h1 className="text-3xl font-bold mb-2 text-gray-800">{member.name}</h1>
            <p className="text-red-500 mb-4">{member.position}</p>
            <p className="text-gray-700 mb-4">{member.bio}</p>
            <div>
              <h2 className="text-lg font-bold mb-2 text-gray-800">
                News Articles:
              </h2>
              <ul className="list-disc pl-6 text-gray-700">
                {member.newsArticles.map((article, articleIndex) => (
                  <li key={articleIndex}>
                    <a
                      href={article.url}
                      className="text-green-500 hover:text-green-600"
                    >
                      {article.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-4">
              <a
                href={member.wikiLink}
                className="text-green-500 hover:text-green-600"
              >
                Read more on Wikipedia
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

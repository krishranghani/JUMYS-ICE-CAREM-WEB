import React from 'react';
// import Navbar from '../components/Navbar';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <>
  {/* <Navbar/> */}

    <div className="border-b border-gray-200 py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={onToggle}
      >
        <h3 className="text-sm font-medium">{question}</h3>
        <span className="text-xl font-bold">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
    </>
  );
};

export default FAQItem;
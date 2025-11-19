'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: 'How can Code It help my business stay competitive in the digital age?',
    answer:
      'In today’s fast-paced digital landscape, staying competitive requires leveraging advanced technologies and strategies. Code It empowers your business with cutting-edge digital solutions, enabling you to streamline operations, enhance customer experiences, and drive growth through innovation.',
  },
  {
    question: 'Is Code It experienced in handling projects of varying sizes and complexities?',
    answer:
      "Absolutely. Our team comprises seasoned professionals with extensive experience in managing projects of all sizes and complexities. Whether you're a startup or a large enterprise, we have the expertise and resources to deliver tailored solutions that meet your specific requirements and goals.",
  },
  {
    question: 'How does Code It ensure data security and privacy for its clients?',
    answer:
      'Data security and privacy are paramount concerns for us at Code It. We employ robust cybersecurity measures and adhere to industry best practices to safeguard your sensitive information against cyber threats and breaches. Our team is dedicated to maintaining the confidentiality and integrity of your data at every stage of our engagement.',
  },
  {
    question: 'Can Code It assist with ongoing support and maintenance post-project implementation?',
    answer:
      'Yes, we offer comprehensive support and maintenance services to ensure the smooth functioning of your digital solutions post-implementation. Our dedicated support team is available to address any issues, provide timely updates, and optimize your systems for maximum efficiency and performance.',
  },
];

const AccordionItem = ({
  item,
  isOpen,
  onClick,
}: {
  item: { question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className={`border-b border-gray-200 transition-colors duration-300 ${isOpen ? 'bg-[#eef5ff]' : 'bg-white'}`}>
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <span className="text-lg font-semibold text-gray-800">{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="h-6 w-6 text-gray-500" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-gray-600">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Questions = () => {
  // Default: Q1 open
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleItemClick = (index: number) => {
    // If the clicked item is already open, close it. Otherwise, open the new one.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-[1100px] px-4">
        <h2 className="mb-12 text-center text-4xl font-extrabold text-gray-800 sm:text-5xl">
          Any questions?
        </h2>
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;
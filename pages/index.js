import { useEffect, useState } from 'react';
import Link from 'next/link';

const transitionDelayClasses = {
  1: 'delay-1000',
  2: 'delay-2000',
  3: 'delay-3000',
  4: 'delay-4000',
  5: 'delay-5000',
  6: 'delay-6000',
  7: 'delay-7000',
  8: 'delay-8000',
  9: 'delay-9000',
  10: 'delay-10000',
};

const textLines = [
  "You're Invited!",
  'To a 4th of July Celebration',
  '4015 Marsol Ave.',
  'Grove City, OH 43123',
  'July 4th, 2022',
  '5:00 PM',
];

const Home = () => {
  const [transitionClass, setTransitionClass] = useState('opacity-0');
  useEffect(() => {
    window.scrollTo(0, 1);
    setTransitionClass('opacity-100');
  }, []);
  return (
    <div className="flex flex-col gap-2 text-center justify-center text-2xl text-zinc-100">
      {textLines.map((text, index) => (
        <div
          key={index}
          className={`transition-opacity duration-1000 ${
            transitionDelayClasses[index + 1]
          } ${transitionClass}`}
        >
          {text}
        </div>
      ))}
      <Link href="/rsvp">
        <button
          className={`border text-base mx-auto mt-2 bg-teal-600 rounded cursor-pointer text-slate-50 px-4 py-2 hover:bg-teal-700 disabled:pointer-events-none disabled:bg-zinc-400 z-50 ${transitionClass} ${
            transitionDelayClasses[textLines.length + 1]
          }`}
        >
          RSVP
        </button>
      </Link>
    </div>
  );
};

export default Home;

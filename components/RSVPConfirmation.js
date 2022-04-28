import useLocalStorage from '../hooks/useLocalStorage';
import { useRef, useEffect } from 'react';

const RSVPConfirmation = ({ clickEvent }) => {
  const [formData] = useLocalStorage('formData');
  const submit = () => {};
  if (!formData) return;
  formData.attending = formData.attending ? 'Yes' : 'No';
  const root = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      root.current.classList.remove('translate-y-full', 'opacity-0');
      root.current.classList.add('translate-y-0', 'opacity-100');
    });
  }, []);
  return (
    <div
      ref={root}
      className="w-3/4 mx-auto bg-zinc-900 bg-opacity-75 p-6 transition-all transform duration-300 translate-y-full opacity-0"
    >
      <h1 className="text-2xl mb-4 text-center">Look Good?</h1>
      <div className="flex flex-col gap-3 justify-between">
        {Object.keys(formData).map((key, index) => {
          return (
            <div
              className="flex justify-between items-end flex-wrap"
              key={index}
            >
              <span className="text-xl capitalize">{key}:</span>{' '}
              <span>{formData[key]}</span>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center w-full mt-4 gap-2">
        <button
          className="w-full border text-base mx-auto mt-2 bg-teal-600 rounded cursor-pointer text-slate-50 px-4 py-2 hover:bg-teal-700 disabled:pointer-events-none disabled:bg-zinc-400 z-50"
          onClick={clickEvent}
        >
          Edit
        </button>
        <button
          className="w-full border text-base mx-auto mt-2 bg-teal-600 rounded cursor-pointer text-slate-50 px-4 py-2 hover:bg-teal-700 disabled:pointer-events-none disabled:bg-zinc-400 z-50"
          onClick={submit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default RSVPConfirmation;

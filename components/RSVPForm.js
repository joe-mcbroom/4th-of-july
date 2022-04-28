import useLocalStorage from '../hooks/useLocalStorage';
import InputField from '../components/InputField';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const RSVPForm = ({ clickEvent = () => {} }) => {
  const [formData, setFormData] = useLocalStorage('formData', {
    name: '',
    email: '',
    phone: '',
    adults: '',
    children: '',
    attending: true,
    dish: '',
  });
  const root = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      root.current.classList.remove('-translate-y-full', 'opacity-0');
      root.current.classList.add('translate-y-0', 'opacity-100');
    });
  }, []);
  return (
    <div
      ref={root}
      className="bg-zinc-900 bg-opacity-75 z-10 transition-all transform duration-300 -translate-y-full opacity-0"
    >
      <form
        className="flex flex-col gap-3 justify-center items-center p-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-2xl">RSVP </h1>
        <label>
          Name:
          <InputField
            type="text"
            placeholder="The Smith Family"
            required={true}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </label>
        <label>
          Email:
          <InputField
            type="email"
            placeholder="smith.fam@example.com"
            required={true}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </label>
        <label>
          Phone:
          <InputField
            type="tel"
            placeholder="(555) 555-5555"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </label>
        <label>
          Adults:
          <InputField
            type="number"
            placeholder="0"
            value={formData.adults}
            onChange={(e) =>
              setFormData({ ...formData, adults: e.target.value })
            }
          />
        </label>
        <label>
          Children:
          <InputField
            type="number"
            placeholder="0"
            value={formData.children}
            onChange={(e) =>
              setFormData({ ...formData, children: e.target.value })
            }
          />
        </label>
        <label>
          What will you be bringing (optional)?
          <InputField
            type="text"
            placeholder="Side dish or dessert"
            value={formData.dish}
            onChange={(e) => setFormData({ ...formData, dish: e.target.value })}
          />
        </label>
        <div className="flex justify-around items-center w-full">
          Will you be attending?
          <input
            className="accent-teal-500 w-3/12"
            type="checkbox"
            value={formData.attending}
            onChange={(e) =>
              setFormData({
                ...formData,
                attending: e.target.checked,
              })
            }
            checked={formData.attending}
          />
        </div>
        <button
          className="w-full border text-base mx-auto mt-2 bg-teal-600 rounded cursor-pointer text-slate-50 px-4 py-2 hover:bg-teal-700 disabled:pointer-events-none disabled:bg-zinc-400 z-50"
          onClick={clickEvent}
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default RSVPForm;

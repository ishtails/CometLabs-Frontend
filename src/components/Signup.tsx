import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BiLogInCircle } from "react-icons/bi";

function SignUpModal() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="flex items-center space-x-2 bg-slate-800 text-white p-2"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <p>Sign up</p>
        <BiLogInCircle />
      </button>

      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-50 inset-0 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="flex items-center justify-center min-h-screen">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="bg-white rounded w-[50%] p-8">
                <div className="w-full max-w-md">
                  <div className="flex justify-between mb-8">
                    <h2 className="text-2xl font-bold font-lexend">Sign Up</h2>
                    <button className="text-slate-500" onClick={closeModal}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <form>
                    <div className="mb-6">
                      <label
                        htmlFor="name"
                        className="block text-slate-700 text-sm font-bold mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full p-3 rounded border border-slate-300"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="block text-slate-700 text-sm font-bold mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full p-3 rounded border border-slate-300"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="password"
                        className="block text-slate-700 text-sm font-bold mb-2"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="w-full p-3 rounded border border-slate-300"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="terms" className="mr-2 cursor-pointer accent-slate-600" />
                      <label htmlFor="terms" className="cursor-pointer text-sm text-slate-700 active:bg-slate-300 ">
                        I agree to the Terms of Service
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="w-full mt-8 bg-slate-700 transition hover:bg-slate-600 text-white font-bold py-3 px-4"
                    >
                      Sign Up
                    </button>
                  </form>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export default SignUpModal;

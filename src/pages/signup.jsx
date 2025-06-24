import { useState, useEffect } from 'react'
import '../App.css'
import Form from '../components/formfields'
import { Listbox } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { motion, useAnimation } from "framer-motion"
import { useNavigate } from 'react-router-dom'

function Signup() {
  const navigate = useNavigate();
  const options = [
    { id: 1, name: 'India', avatar: 'https://cdn.pixabay.com/photo/2018/08/21/18/07/indian-flag-3621824_1280.png' },
    { id: 2, name: 'USA', avatar: 'https://via.placeholder.com/150' },
    { id: 3, name: 'UK', avatar: 'https://via.placeholder.com/150' },
  ]
  const [selected, setSelected] = useState(options[0])

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        backgroundPosition: {
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }
      }
    });
  }, [controls]);

  return (
    <>
      <motion.div
        animate={controls}
        className="fixed left-0 bottom-0 w-full h-[100vh] -z-10 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, #a18cd1, #6dd5fa, #fbc2eb, #fbc2ac)",
          backgroundSize: "200% 200%",
          backgroundPosition: "0% 50%",
          clipPath: "polygon(0 100%, 100% 60%, 100% 100%, 0% 100%)"
        }}
      />
      <div className='absolute left-53 h-screen border-1 border-gray-100 -z-20'/>
      <div className='absolute right-52 h-screen border-1 border-gray-100 -z-20'/>
      <div className='absolute left-127 h-screen border-1 border-gray-100 border-dashed -z-20'/>
      <div className='absolute left-200 h-screen border-1 border-gray-100 border-dashed -z-20'/>
      <div className='absolute left-265 h-screen border-1 border-gray-100 border-dashed -z-20'/>

      <div className='w-full   border-b-2 border-dashed border-gray-100 p-4'>
        <h2 className='text-2xl font-bold  text-gray-700 ml-56'>Stripe</h2>
      </div>
      <div className='flex  justify-evenly border-l-2 border-gray-100'>
        <div className='flex flex-col gap-4 w-1/4 pt-10 '>
          <div>
            <h2 className='text-base font-semibold text-gray-700'>
            <span className='text-indigo-600 text-xl mr-3 font-thin'>|</span>
            Get started quickly</h2>
            <p className='text-gray-700 ml-4'>Integrate with developer-friendly APIs or choose low-code or pre-built solutions.</p>
          </div>
          <div>
            <h2 className='text-base font-semibold text-gray-700'>
            <span className='text-indigo-600 text-xl mr-3 font-thin '>|</span>
            Support any business model</h2>
            <p className='text-gray-700 ml-4'>Ecommerce, subscriptions, SaaS platforms, marketplaces, and more—all within a unified platform.</p>
          </div>
          <div>
            <h2 className='text-base font-semibold text-gray-700'>
            <span className='text-indigo-600 text-xl mr-3 font-thin'>|</span>
            Join millions of businesses</h2>  
            <p className='text-gray-700 ml-4'>Stripe is trusted by ambitious startups and enterprises of every size.</p>
          </div>
        </div>

        <form className='flex justify-center  flex-col gap-4 h-auto w-lg  rounded-md border-2 border-gray-100 shadow-xl/30 bg-white '>
          <div className='flex flex-col gap-4 p-12 pb-4'>
            <h1 className='text-2xl font-bold  text-gray-700 '>Create your Stripe account</h1>
            <Form lable="Email" type="email" />
            <Form lable="Full name" type="text" />
            <Form lable="Password" type="password" />
            <Form >
              <label htmlFor="country" className="text-gray-600 font-semibold flex items-center gap-1">
                Country
                <span className="relative group">
                  <span className="text-xs text-gray-500 border border-gray-400 rounded-[4px] px-[5px] py-[1px] font-semibold cursor-pointer">
                    i
                  </span>
                  <span className="absolute left-full top-1/2 -translate-y-1/2 ml-3 w-80 rounded-lg bg-white px-4 py-3 text-gray-700 text-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                    <span className="block">
                      Select the country or region where your business is incorporated. If you're an individual, select where you're doing business from.
                    </span>
                    <span className="absolute left-[-8px] top-1/2 -translate-y-1/2 w-4 h-4">
                      <svg className="absolute text-white drop-shadow-lg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <polygon points="0,8 8,0 8,16" fill="white" className="translate-x-[1px]" />
                      </svg>
                    </span>
                  </span>
                </span>
              </label>

              <div>
                <Listbox value={selected} onChange={setSelected}>
                  <Listbox.Button className="grid w-full cursor-pointer grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                    <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                      <img alt="" src={selected.avatar} className="size-4 w-5 shrink-0 rounded-sm" />
                      <span className="block truncate">{selected.name}</span>
                    </span>
                    <ChevronUpDownIcon
                      aria-hidden="true"
                      className="col-start-1 row-start-1 size-3 self-center justify-self-end text-gray-500 sm:size-4 "
                    />

                  </Listbox.Button>
                  <Listbox.Options className='cursor-pointer'>
                    {options.map((option) => (
                      <Listbox.Option key={option.id} value={option}>
                        <div className='flex items-center gap-2'>
                          <img alt="" src={option.avatar} className="size-4 w-5 shrink-0 rounded-sm" />
                          <span className="block truncate">{option.name}</span>
                        </div>
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Listbox>
              </div>
            </Form>
            <button type='submit' className='w-full border-2  rounded-md p-2 bg-blue-600 text-white cursor-pointer' >Create Account</button>
            <div className="flex items-center gap-4">
              <div className="border-t border-gray-300 flex-grow"></div>
              <p className="text-gray-500 text-sm">OR</p>
              <div className="border-t border-gray-300 flex-grow"></div>
            </div>
            <button className="w-full border-2 border-gray-300 rounded-md p-2 flex items-center justify-center gap-2 cursor-pointer">
              <img src="../src/assets/google.png" alt="Google" className="w-5 h-5" />
              <span>Sign Up with Google</span>
            </button>

          </div>
          <div className="flex justify-center items-center bg-gray-100 h-16 mt-0 cursor-pointer">
            <p className="text-gray-900 text-center mr-2 font-normal">Already have an account?</p>
          <a href="#" className="text-blue-900 cursor-pointer" onClick={() => navigate('/')}>Sign in</a>
          </div>
        </form>

      </div>
      <div className=' mt-7 flex  gap-4 ml-55 mb-10'>
        <a href="" className='cursor-pointer text-white'>&copy; Stripe</a>
        <a href="" className='cursor-pointer text-white'>Privacy & terms</a>
      </div>
    </>
  )
}

export default Signup

import '../App.css'
import Form from '../components/formfields'
import { motion, useAnimation } from "framer-motion"
import { useEffect } from 'react'

function Signin() {

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
        className="fixed left-0 top-0 w-full h-[100vh] -z-10 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, #a18cd1, #6dd5fa, #fbc2eb, #fbc2ac)",
          backgroundSize: "200% 200%",
          backgroundPosition: "0% 50%",
          clipPath: "polygon(0 0, 100% 0, 100% 20%, 0% 60%)"
        }}
      />
            <div>
                <div className='w-full  p-4'>
                    <h2 className='text-[25px] font-bold  text-white ml-56'>Stripe</h2>
                </div>

                <div className='absolute left-53 h-[675px] border-1 border-gray-100 -z-20'/>
                <div className='absolute right-52 h-[675px] border-1 border-gray-100 -z-20'/>
                <div className='absolute left-123 h-[675px] border-1 border-gray-100 border-dashed -z-20'/>
                <div className='absolute left-190 h-[675px] border-1 border-gray-100 border-dashed -z-20'/>
                <div className='absolute left-257 h-[675px] border-1 border-gray-100 border-dashed -z-20'/>

                <div className='flex flex-col gap-4 justify-center  items-center'>
                    
                    <form className='flex justify-center p-1 flex-col gap-4 h-auto w-[540px]  rounded-md  shadow-xl/20  bg-white '>

                    <div className='flex flex-col gap-3 p-13 pb-3'>
                        <h1 className='text-[26px] font-bold  text-gray-700 '>Sign in to your account</h1>
                        <Form lable="Email" type="email" />
                        <Form >
                            <div className='flex justify-between items-center'>
                            <label htmlFor="password" className='text-gray-700'>Password</label>
                            <a href="" className='text-blue-900 text-sm cursor-pointer font-semibold'>Forget your password?</a>
                            </div>
                            <div className='flex flex-col gap-2 '>
                                <div>
                                    <input type="password" className='w-full text-gray-600 h-10 border-1 border-gray-300 rounded-md p-2 ' />
                                </div>
                                <label >
                                    <input type="checkbox" /> Remember me on this device
                                </label>
                            </div>
                        </Form>
                        <button type='submit' className='w-full border-2  rounded-md p-2 bg-blue-600 text-white cursor-pointer' >Signin</button>
                        <div className="flex items-center gap-4">
                            <div className="border-t border-gray-300 flex-grow"></div>
                            <p className="text-gray-500 text-sm">OR</p>
                            <div className="border-t border-gray-300 flex-grow"></div>
                        </div>
                        <div className='flex flex-col gap-2'>
                        <button className="w-full border-2 border-gray-300 rounded-md p-2 flex items-center justify-center gap-2 cursor-pointer">
                            <img src="../src/assets/google.png" alt="Google" className="w-3 h-3" />
                            <span>Sign in with Google</span>
                        </button>
                        <button className="w-full border-2 border-gray-300 rounded-md p-2 flex items-center justify-center gap-2 cursor-pointer">
                            <span>Sign in with passkey</span>
                        </button>
                        <button className="w-full border-2 border-gray-300 rounded-md p-2 flex items-center justify-center gap-2 cursor-pointer">
                            <span>Sign in with SSO</span>
                        </button>
                        </div>
                        </div>
                        <div>
                        <div className="flex justify-center items-center bg-gray-100 h-16 mt-0 cursor-pointer">
                            <p className="text-gray-900 text-center mr-1 font-normal">New to stripe?</p>
                            <a href="/signup" className="text-blue-900 cursor-pointer">Create an account</a>
                        </div>
                        </div>
                    </form>

                    <div className='flex justify-center w-lg'>
                        <p className='text-sm text-gray-900 text-start'>
                        Bookmark this page and only use the bookmark to sign in to avoid phishing attempts. Phishing websites pretend to be Stripe to access your password.
                        </p>
                    </div>

                </div>


                <div className=' mt-7 flex  gap-4 ml-55 mb-10'>
                    <a href="" className='cursor-pointer text-black'> &copy; Stripe</a>
                    <a href="" className='cursor-pointer text-black'>Privacy & terms</a>
                </div>
            </div>
        </>
    )
}

export default Signin;
import { useState, useEffect } from 'react'
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { PiSecurityCameraFill } from "react-icons/pi";
import { motion } from "framer-motion";


export default function Profile() {

  const [timer, setTimer] = useState(59);

  useEffect(() => {
    if (timer <= 0) return;
    const countdown = setInterval(() => {
      setTimer(timer - 1);
    }, 1000)

    return () => clearInterval(countdown);
  }, [timer]);



  return (

    <div className='flex justify-center items-center h-screen bg-gray-900'>
      <div className='bg-white/10 h-160 w-120 rounded-2xl flex flex-col items-center p-10 space-y-10 text-white'>

        <ul className='flex items-center flex-col gap-3  '>
          <li className='text-6xl p-3 shadow-md shadow-purple-500 text-white bg-linear-to-br  from-blue-500 to-purple-900 rounded-2xl hover:scale-110 transition-all'><MdOutlineMarkEmailRead /></li>
          <li className="text-4xl font-bold bg-linear-to-bl from-blue-500 to-purple-900 bg-clip-text text-transparent"
          >
            Email Verification
          </li>

          <li className='font-light'>Please Enter the 4-digit code send to </li>
        </ul>

        <ul className='flex justify-evenly items-center h-30 px-2 gap-3 bg-cyan-700/40 shadow-md shadow-blue-500/50 w-80 rounded-lg'>
          <li className='text-blue-300 text-xl'><IoIosMail /></li>
          <li><input type="email"
            required
            className='peer bg-transparent outline-none ml-10 text-blue-100 placeholder-blue-200'
            placeholder='Enter your email' />
            <button className='bg-purple-300 p-1 peer-invalid:bg-red-500 peer-valid:bg-green-500 transition-colors duration-200 text-black rounded-2xl'>
              <FaCheck />
            </button>
          </li>
        </ul>

        <ul className='flex justify-center items-center h-20 w-80 rounded-2xl gap-5 px-5'>
          <li><input maxLength="1"
            className='otp w-15 h-15 hover:scale-110 transition-all text-center text-xl rounded-lg shadow-md hover:shadow-blue-500 border  bg-gray-400/20 text-black focus:border-blue-500 focus:outline-none'
            type="text"
            inputMode='numeric'

            oninput="this.value = this.value.replace(/[^0-9]/g,'')"
          />

          </li>

          <li><input maxLength="1"
            className='otp w-15 h-15 text-center hover:scale-110 transition-all text-xl rounded-md shadow-md border hover:shadow-blue-500  bg-gray-400/20 text-black focus:border-blue-500 focus:outline-none'
            type="text"
            inputMode='numeric'

            oninput="this.value = this.value.replace(/[^0-9]/g,'')"
          />

          </li>

          <li><input maxLength="1" className='otp w-15 h-15 text-center hover:scale-110 transition-all text-xl rounded-md shadow-md border hover:shadow-blue-500  bg-gray-400/20 text-black focus:border-blue-500 focus:outline-none'
            type="text"
            inputMode='numeric'

            oninput="this.value = this.value.replace(/[^0-9]/g,'')"
          />

          </li>

          <li><input maxLength="1" className='otp w-15 h-15 text-center hover:scale-110 transition-all text-xl rounded-md shadow-md border hover:shadow-blue-500  bg-gray-400/20 text-black focus:border-blue-500 focus:outline-none'
            type="text"
            inputMode='numeric'

            oninput="this.value = this.value.replace(/[^0-9]/g,'')"
          />

          </li>
        </ul>

        <ul className='flex flex-col gap-2 items-center'>
          <li>
            <button className='bg-linear-to-br flex justify-center items-center from-blue-500 to-purple-900 p-3 rounded-xl gap-2 hover:scale-105 transition-transform duration-200 w-80'>
              <FaCheckCircle />
              Verify Account
            </button>
          </li>
          <li className="text-sm">
            {timer > 0 ? (
              <>didn't receive the code? <span className="text-gray-400">Resend in {timer}s</span></>
            ) : (
              <button
                onClick={() => setTimer(30)}
                className="text-blue-400 underline hover:text-blue-300"
              >
                Resend Code
              </button>
            )}
          </li>

        </ul>

        <motion.ul
          className='bg-cyan-700/40 shadow-md shadow-blue-500/50  rounded-2xl w-110 text-sm px-2 py-3'
          animate={{ y: [0, -5, 0] }}      // goes up then comes back
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        >


          <li className='flex flex-col'>
            <li className='flex items-center'>
              <PiSecurityCameraFill className='text-2xl mr-2' />
              <b>SECURITY TIP :</b>
            </li>
            <li>
              Never share your otp with anyone . Our team will never ask for your verification code
            </li>
          </li>
        </motion.ul>


      </div>
    </div>
  )
}
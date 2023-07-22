import React from 'react'
import {CiMail} from 'react-icons/ci'
import {MdLocationOn} from 'react-icons/md'
import { useForm } from 'react-hook-form';
import apiConnector from '../Services/apiConnector';
import { mailSender } from '../Services/Operations/apis';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';

const { SEND_MAIL } = mailSender;

const ContactForm = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
      } = useForm();

      const [loading, setLoading] = useState(false);

      
    useEffect(() => {
      if (isSubmitSuccessful) {
        reset({
          email: "",
          firstName: "",
          lastName: "",
          message: "",
          subject: "",
        });
      }
    }, [reset, isSubmitSuccessful])

   const formHandler = async (data)=>{
      const toastId = toast.loading("Loading")
      setLoading(true);
          try {
           const res = await apiConnector('post', SEND_MAIL, data);
           toast.success("Mail sent successfully")

          } catch (error) {
             console.log(error.message);
             throw new Error(error.message);
          }
          toast.dismiss(toastId);
          setLoading(false);
    }
      
  return (
    <div className='max-w-[1120px] mx-auto my-[6em]'>
       <div className='text-center text-[30px]'>Contact Me</div>
        <div className='mx-auto bg-[#00ffff] h-1 w-[8em]'></div>
        <div className='text-center my-2 text-gray-400'>Want to connect? My inbox is always open!</div>
        <div className='my-16 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-[4em]'>
            <div className='flex lg:flex-col flex-row gap-10 flex-wrap items-start justify-start relative'>
             <div className='flex items-start justify-center gap-5'> 
             <CiMail size={30} color='#00ffff'/>
             <div className='flex flex-col items-start justify-start'>
                <div>Email</div>
                <div>dandedhanesh899@gmail.com</div>
             </div>
             </div>
             <div className='flex items-start justify-center gap-5'> 
             <MdLocationOn size={30} color='#00ffff'/>
             <div className='flex flex-col items-start justify-start'>
                <div>Location</div>
                <div>Andhra Pradesh, India</div>
             </div>
             </div>
            </div>

          <form onSubmit={handleSubmit(formHandler)} className='border border-[#00ffff] rounded-md flex flex-col items-start justify-start gap-[2em] p-10'>
               <div className='flex flex-col gap-5'>
                   <div className='flex flex-col gap-5 md:flex-row'>
                   <div className='flex flex-col gap-3'>
                    <label htmlFor="firstNamw">First Name</label>
                    <input required
                    id='firstName'
                    name='firstName'
                    placeholder = "Enter your first name"
                    {...register('firstName')}
                     type="text" 
                    className='px-4 py-2 rounded-md border border-[#00ffff] outline-none bg-gray-900 '/>
                    {errors.firstName && <p className='text-[15px] text-gray-400'>First name is required.</p>}
                    </div>
                   <div className='flex flex-col gap-3'>
                    <label htmlFor="lastName">Last Name</label>
                    <input required
                     type="text"
                     id='lastName'
                    name='lastName'
                    {...register('lastName')}
                    placeholder = "Enter your last name"
                      className='px-4 py-2 rounded-md border border-[#00ffff] outline-none bg-gray-900 '/>
                       {errors.lastName && <p className='text-[15px] text-gray-400'>Last name is required.</p>}
                    </div>
                   </div>

                   <div className='flex flex-col gap-3'>
                    <label htmlFor="email">Email</label>
                    <input required 
                    type="email" 
                    id='email'
                    name='email'
                    {...register('email')}
                    placeholder = "Enter your email address"
                    className='px-4 py-2 rounded-md border border-[#00ffff] outline-none bg-gray-900 '/>
                     {errors.email && <p className='text-[15px] text-gray-400'>Email is required.</p>}
                    </div>

                   <div className='flex flex-col gap-3'>
                    <label htmlFor="subject">Subject</label>
                    <input required 
                    id='subject'
                    name='subject'
                    placeholder = "Enter the subject"
                    {...register('subject')}
                    type="text" 
                    className='px-4 py-2 rounded-md border border-[#00ffff] outline-none bg-gray-900 '/>
                     {errors.subject && <p className='text-[15px] text-gray-400'>Subject is required.</p>}
                    </div>

                   <div className='flex flex-col gap-3'>
                    <label htmlFor="message">Message</label>
                    <textarea required
                     rows={6} 
                     placeholder = "Enter your message"
                     id='message'
                    name='message'
                    {...register('message')}
                     className='px-4 py-2 rounded-md border border-[#00ffff] outline-none bg-gray-900 '/>
                      {errors.message && <p className='text-[15px] text-gray-400'>Message is required.</p>}
                    </div>

                    <button type='submit' 
                    disabled = {loading}
                    className={`
                     cursor-pointer w-fit p-4 my-5 rounded-lg ${ loading? " bg-gray-400" :"bg-gradient-to-r from-[#00ffff] via-[#000] to-[#00ffff]" }
                     shadow-[-5px_5px_80px_rgba(0,_255,_255,_1)]
                    `}> Send Message </button>

               </div>
          </form>
            
        </div>
    </div>
  )
}

export default ContactForm

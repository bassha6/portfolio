import React from 'react'
import Navbar from './components/Navbar'
import Navitem from './components/Navitem'
import Card from './components/Card';
import Carditem from './components/Carditem';
import Pricing from './components/Pricing';
import Pricingitem from './components/Pricingitem';
import Service from './components/Service';
import Typed from 'react-typed';

const App = () => {
  return (
    <div id='intro' className='min-h-screen p-2 mx-auto flex flex-col max-w-5xl justify-between'>

      {/* Navbar */}

      <Navbar >
        <Navitem href='#intro'>Home</Navitem>
        <Navitem href='#pricing'>Pricing</Navitem>
        <Navitem href='#services'>Services</Navitem>
        <Navitem href='#projects'>Projects</Navitem>
        {/* <Navitem href='#contact'>Contact</Navitem> */}
        {/* <Navitem href='#about'>About me</Navitem> */}

        {/* <button className='bg-blue-600 p-[0.3rem]   rounded-sm hover:bg-blue-700 text-white font-bold px-6  '>Hire me</button> */}
      </Navbar>


      {/* Intro */}


      <div className=' mx-auto space-y- mt-36  max-w-3xl mb-32'>
        <h1 className='text-slate-900 text-4xl text-center font-semibold'>Frontend Web Developer</h1>
        <p className='text-slate-700 text-lg text-center'> 
        Design and Design and Develop  
        
     <span className='text-blue-500 font-semibold'>
     {
            <Typed
            strings={[
                ' Responsive',
                ' Fast',
                ' Mobile First']}
                typeSpeed={40}
                backSpeed={50}
               
                loop />
               
            
        }
     </span>
         Websites for your business and Startup
        </p>

      <p className='text-slate-700 text-lg text-center'>
      Grow  your  business by making customers happy with your website.
      </p>
        <div className='w-full  text-center space-y-4'>
          <button className='bg-blue-600 p-2 px-5 outline-none hover:bg-blue-500 text-sm font-semibold tracking-wider text-white mx-3 rounded-md'>Hire me</button>
          <button className='bg-gray-200 p-2 px-5 hover:bg-gray-300 text-blue-700 border text-sm mx-3 rounded-md'>See projects</button>
        </div>
      </div>

      {/* Skills */}

      <div className='p-4 mb-32'>
        <h1 className='text-slate-800 font-bold text-2xl text-center p-3 pb-10'>I use these technologies to develop your sites</h1>


        <div className=''>
          <Card>
            <Carditem>
              <img className='h-full object-cover w-full' src="../public/html5.png" alt="" />
            </Carditem>

            <Carditem>
              <img className='h-full object-cover w-full ' src="../public/css3.png" alt="" />
            </Carditem>

            <Carditem>
              <img className='h-full object-cover w-full' src="../public/javascript.png" alt="" />
            </Carditem>

            <Carditem>
              <img className='h-full object-cover w-full' src="/public/reactjs-thumb.jpg" alt="" />
            </Carditem>


            <Carditem>
              <img className='h-full w-full object-cover' src="../public/nextjs.jpg" alt="" />
            </Carditem>


            <Carditem>
              <img className='h-full w-full object-cover' src="../public/tailwindcss.jpg" alt="" />
            </Carditem>
          </Card>
        </div>
      </div>



      {/* Projects */}


      {/* Services */}


      <div id='services' className='mb-10'>
        <h1 className='text-center text-slate-900 font-semibold text-2xl'>My Services</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mt-10'>
          <Service>
            Redesign your website
          </Service>

          <Service>
            Develop Brand New Website
          </Service>
        </div>
      </div>



      {/* Pricing */}



      <div id='pricing' className='mt-24'>
        <h1 className='text-2xl text-slate-900 font-semibold text-center'>Choose Packages that suits you</h1>




        <div className='mt-10 grid grid-cols-1 mx-auto md:grid-cols-3 gap-4'>
          <Pricing className='max-h-fit border-gray-300' title='Basic'>
            <Pricingitem>
              <li>3 pages</li>
              <li>Responsive Design</li>
              <li>Each page have 3 sections</li>
              <li>2 revisions</li>

              <p className='text-slate-900 font-medium mt-4 ml-5'>250$</p>
              <button className='bg-gray-100  text-slate-900 text-sm p-2 px-6 rounded-md mx-auto hover:bg-gray-300 w-full transition mt-6'>Choose plan</button>
            </Pricingitem>
          </Pricing>


          <Pricing className='max-h-fit' title='Standard'>
            <Pricingitem>
              <li>5 pages</li>
              <li>Responsive Design</li>
              <li>Each page have 3 sections</li>
              <li>3 revisions</li>
              <li>Include Source code</li>

              <p className='text-slate-900 font-medium mt-4 ml-5'>350$</p>
              <button className='bg-blue-600 text-sm font-bold text-white p-2 px-6 rounded-md mx-auto hover:bg-blue-500 w-full transition mt-6'>Choose plan</button>
            </Pricingitem>
          </Pricing>


          <Pricing className='border-yellow-500 ' title='Premium'>
            <Pricingitem>
              <li>7 pages</li>
              <li>Responsive Design</li>
              <li>Each page have 5 sections</li>
              <li>3 revisions</li>
              <li>Include Source Code</li>
              <li>Additional Page for 30$   </li>
              <li>Additional Section for 20$   </li>
              <li>Additional Revision for 25$   </li>


              <p className='text-slate-900 font-medium mt-4 ml-5'>500$ + Additional Packages</p>
              <button className='bg-yellow-400 text-white p-2 px-6 text-sm font-bold rounded-md mx-auto hover:bg-yellow-500 w-full transition mt-6'>Choose plan</button>
            </Pricingitem>
          </Pricing>

        </div>


      </div>




      {/* Contact */}

    </div>
  )
}

export default App
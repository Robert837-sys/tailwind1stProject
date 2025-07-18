import React from 'react'
import CustomerReviews from './sections/CustomerReviews'
import Footer from './sections/Footer'
// import Header from './sections/Header'
import Hero from './sections/Hero'
import PopularProducts from './sections/PopularProducts'
import SuperQuality from './sections/SuperQuality'
import Services from './sections/Services'
import Nav from './Components/Nav'
import SpecialOffer from './sections/SpecialOffer'
import Subscribe from './sections/Subscribe'

const App = () => {
  return (
    <div>
      <main className='relative'>
        <Nav/>
        <section className='xl:padding-l wide:padding-r padding-b'>
          <Hero/>
        </section>
        <section className='padding'>
          <PopularProducts/>
        </section>
        <section className='padding'>
          <SuperQuality/>
        </section>
        <section className='padding-x py-10'>
          <Services/>
        </section>
        <section className='bg-pale-blue padding'>
          <SpecialOffer/>
        </section>
        <section className='padding-x sm:py-32 py-16 w-full'>
          <CustomerReviews/>
        </section>
        <section className='padding'>
          <Subscribe/>
        </section>
        <section className='bg-black padding-x padding-t pb-8'>
          <Footer/>
        </section>
      </main>
    </div>
  )
}

export default App

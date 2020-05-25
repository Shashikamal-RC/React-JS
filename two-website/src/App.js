import  React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import AppSection from './AppsSection'
import Cards from './Cards'
import Footer from './Footer'

const App = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <AppSection/>
            <Cards/>
            <Footer/>
        </div>
    )
}

export default App;
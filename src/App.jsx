import React from 'react';
import styles from './style';
import NavBar from './components/NavBar';
import Billing from './components/Billing';
import Business from './components/Business';
import CardDeal from './components/CardDeal';
import Clients from './components/Clients';
import CTA from './components/CTA';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import View from './components/View';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <NavBar />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <View />
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA /> 
            <Footer /> 
          </div>
        </div>
      </div>
    </>
    
    )
}

export default App
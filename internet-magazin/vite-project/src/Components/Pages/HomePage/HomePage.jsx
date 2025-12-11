import React from 'react';
import Banner from './Banner/Banner';
import PaymentSection from './PaymentSection/PaymentSection';
import OffersCarousel from './OffersCarousel/OffersCarousel'
import SubscriptionCard from './SubscriptionCard/SubscriptionCard'
import PopularCategories from './PopularCategories/PopularCategories';
import BenefitsSection from './BenefitsSection/BenefitsSection';
const HomePage = () => {
  return (
    <div>
      <main>
        <Banner />
        <PaymentSection />
        <OffersCarousel/>
        <SubscriptionCard/>
        <PopularCategories />
        <BenefitsSection />
      </main>
    </div>
  );
};

export default HomePage;
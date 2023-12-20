import React, { useState } from 'react';
import Onboarding from './Onboarding';
// import Login from '../../authentication/Login';



const Onboard = () => {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);


  const handleOnboardingComplete = () => {
    // Navigate to the welcome screen (adjust the navigation logic based on your setup)
    navigation.navigate('Onboarding');
    // setShowOnboarding(false);
  }
//   const handleOnboardingComplete = () => {
//     setShowOnboarding(false);
//   };
//   const handleBack = () => {
  
//     if (showWelcome) {
//       setShowWelcome(false);
//     }else {
//       setShowOnboarding(true);
//     }
//   };
  return (
    <>
      {showOnboarding ? (
        <Onboarding onComplete={handleOnboardingComplete} />
    //   ) : showProfile ? (
    //     <Welcome onClose={handleBack} />
      ) : null}
    </>
  );
};

export default Onboard;
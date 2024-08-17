import { useState } from 'react';
import LoginForm from './Account';
import splashImage from '../assets/user.png'; 
import { IoIosArrowForward } from "react-icons/io";

alert("Hello! Welcome to My Todo App");
function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);

  const handleNext = () => {
    setShowSplash(false);
  };

  return (
    <div className="app-container">
      {showSplash ? (
        <div className="task-form">
          <h1 style={{ fontWeight: "550" }}>
            <span style={{ color: "#9280ff" }}>My</span>Todo
          </h1>
          <img
            src={splashImage}
            alt="Splash"
            style={styles.image}
          />
          <button onClick={handleNext}>Get Started <IoIosArrowForward /></button>
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
}

const styles = {
  image: {
    width: "200px", 
    objectFit: "center",
    display: "block",
    margin: "0 auto",
    marginBottom: "20px",
  },
};

export default SplashScreen;

import React , { useState, useEffect } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

function BgAnimation() {
    const [densityArea, setDensityArea] = useState(1000);
    const [maxBallSize, setMaxBallSize] = useState(8);


  useEffect(() => {
      if (window.innerWidth < 768) {
        setDensityArea(250);
        setMaxBallSize(4);
      }
      else{
        setDensityArea(800);
        setMaxBallSize(8);
      }
    }, []);

  const options = {
    fullScreen: {
      enable: false,
    },
    style: {
      position: "absolute",
      width: "100%",
      height: "100%"
    },
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          area: `${densityArea}`
        }
      },
      color: {
        value: ["#247625"]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 1
      },
      size: {
        value: { min: 2, max: `${maxBallSize}` }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        outModes: "bounce",
        attract: {
            enable: true
          }
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1
          }
        },
        push: {
          quantity: 4
        }
      }
    }
  };

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const particlesLoaded = async (container) => {
    console.log("Particle containers loaded", container);
  };

  return (
      <Particles options={options} init={particlesInit} loaded={particlesLoaded}/> 
  )
}

export default BgAnimation;

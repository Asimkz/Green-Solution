"use client";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    particlesJS: any;
  }
}

export default function HeroParticles() {
  const particlesInitialized = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined" && !window.particlesJS) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.js";
      script.async = true;
      script.onload = initializeParticles;
      document.body.appendChild(script);
    } else if (typeof window !== "undefined") {
      initializeParticles();
    }

    return () => {
      particlesInitialized.current = false;
    };
  }, []);

  const initializeParticles = () => {
    if (particlesInitialized.current) return;

    try {
      const particlesElement = document.getElementById("particles-js");
      if (!particlesElement) {
        console.error("Particles container not found");
        return;
      }

      // Background color transparent karo
      particlesElement.style.backgroundColor = "transparent";

      if (window.particlesJS) {
        window.particlesJS("particles-js", {
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: { 
              value: "#00ff00" // Bright green
            },
            shape: { type: "circle" },
            opacity: { 
              value: 0.8,
              random: true 
            },
            size: { 
              value: 4,
              random: true 
            },
            line_linked: {
              enable: true,
              distance: 120,
              color: "#00ff00", // Green lines
              opacity: 0.6,
              width: 2,
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 100 },
              push: { particles_nb: 4 },
            },
          },
          retina_detect: true,
        });
        particlesInitialized.current = true;
      } else {
        console.error("particles.js not loaded properly");
      }
    } catch (error) {
      console.error("Error initializing particles:", error);
    }
  };

  return (
    <div
      id="particles-js"
      className="absolute inset-0"
      style={{ 
        height: "100%", 
        width: "100%",
        backgroundColor: "transparent" // Yahan bhi transparent karo
      }}
    />
  );
}
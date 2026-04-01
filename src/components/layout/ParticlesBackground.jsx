import { memo, useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

const ParticleBackground = ({ darkMode }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const darkParticles = ['#7c3aed', '#2563eb', '#059669', '#d97706', '#be123c', '#0f766e'];
  const lightParticles = ['#a78bfa', '#60a5fa', '#34d399', '#fbbf24', '#fb7185', '#22d3ee'];
  const particleColors = darkMode ? darkParticles : lightParticles;

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          fpsLimit: 60,
          particles: {
            color: {
              value: particleColors,
            },
            links: {
              color: darkMode ? '#444444' : '#9ca3af',
              distance: 180,
              enable: true,
              opacity: darkMode ? 0.25 : 0.4,
              width: 4,
            },
            move: {
              enable: true,
              speed: 1.5,
              random: true,
              outModes: {
                default: 'out',
              },
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 70,
            },
            opacity: {
              value: darkMode ? 0.5 : 0.7,
              random: true,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: 4,
              random: true,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: false,
              },
              onClick: {
                enable: false,
              },
            },
          },
          detectRetina: false,
          background: {
            color: {
              value: 'transparent',
            },
          },
        }}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

export default memo(ParticleBackground);
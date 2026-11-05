import { memo, useCallback, useMemo } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

const ParticleBackground = ({ darkMode }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const grayParticles = useMemo(
    () =>
      darkMode
        ? ['#4b5563', '#6b7280', '#9ca3af', '#d1d5db']
        : ['#94a3b8', '#cbd5e1', '#e2e8f0'],
    [darkMode]
  );

  // Check if touch device (mobile / tablet) to prevent touch event grab collision during scrolling
  const isTouchDevice =
    typeof window !== 'undefined' &&
    window.matchMedia('(pointer: coarse)').matches;

  const options = useMemo(
    () => ({
      fullScreen: false,
      fpsLimit: 60,
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      particles: {
        color: {
          value: grayParticles,
        },
        links: {
          color: darkMode ? '#6b7280' : '#94a3b8',
          distance: 140,
          enable: true,
          opacity: darkMode ? 0.2 : 0.14,
          width: 1.2,
        },
        move: {
          enable: true,
          speed: 0.8,
          random: true,
          outModes: {
            default: 'out',
          },
        },
        rotate: {
          value: { min: 0, max: 360 },
          random: true,
          direction: 'random',
          animation: {
            enable: false,
          },
        },
        number: {
          density: {
            enable: true,
            area: 900,
          },
          limit: 36,
          value: 36,
        },
        opacity: {
          value: darkMode ? 0.5 : 0.35,
          random: true,
        },
        shape: {
          type: ['circle', 'triangle', 'square'],
        },
        size: {
          value: { min: 2, max: 4.5 },
          random: true,
        },
      },
      interactivity: {
        detectsOn: 'window',
        events: {
          onHover: {
            enable: !isTouchDevice,
            mode: 'grab',
          },
          onClick: {
            enable: false,
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 150,
            links: {
              opacity: 0.4,
              color: darkMode ? '#9ca3af' : '#94a3b8',
            },
          },
        },
      },
      detectRetina: true,
      background: {
        color: {
          value: 'transparent',
        },
      },
    }),
    [darkMode, grayParticles, isTouchDevice]
  );

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={options}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

export default memo(ParticleBackground);
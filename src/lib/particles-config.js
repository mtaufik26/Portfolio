export const getParticlesConfig = () => ({
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 1000
      }
    },
    color: {
      value: ["#8b5cf6", "#3b82f6", "#ec4899"]
    },
    shape: {
      type: ["circle", "triangle", "star", "polygon"],
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 6
      }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 4,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.3,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#a78bfa",
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 0.4
        }
      },
      bubble: {
        distance: 200,
        size: 8,
        duration: 2,
        opacity: 0.8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});

export const colorSets = [
  ["#8b5cf6", "#3b82f6", "#ec4899"], // Default
  ["#10b981", "#06b6d4", "#3b82f6"], // Teal-Blue
  ["#ef4444", "#f59e0b", "#fcd34d"], // Fire
  ["#6d28d9", "#4338ca", "#1d4ed8"], // Deep Purple
  ["#059669", "#047857", "#065f46"], // Forest
  ["#db2777", "#be185d", "#831843"], // Pink Fuchsia
  ["#7c3aed", "#2563eb", "#14b8a6"]  // Electric
];

export const shapes = [
  ["circle", "triangle", "star", "polygon"],
  ["circle"],
  ["triangle"],
  ["star"],
  ["polygon"],
  ["edge", "circle"]
];
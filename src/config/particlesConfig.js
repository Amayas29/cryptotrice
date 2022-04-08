const particlesConfig = {
  background: {
    color: {
      value: "#111827",
    },
  },
  fpsLimit: 120,
  interactivity: {
    detect_on: "canvas",
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 2,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#eeac09",
    },
    links: {
      color: "#f3f4f6",
      distance: 120,
      enable: true,
      opacity: 0.5,
      width: 2,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: true,
      speed: 5,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "polygon",
      polygon: {
        nb_sides: 6,
      },
    },
    size: {
      random: true,
      value: 6,
    },
  },
  detectRetina: true,
};

export default particlesConfig;

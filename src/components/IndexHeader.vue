<template>
  <header id="top">
    <img :src="logoSrc" :alt="logoAlt" class="header-img">
    <button class="hamburger" @click="toggleMenu">
      <i class="fas fa-bars"></i>
    </button>
    <nav :class="{ open: isOpen }">
      <div class="nav-links">
        <img src="../assets/logo (lightmode).svg" width="70%">
        <a href="#top" class="nav-link" @click="closeMenu">Home</a>
        <a href="#initiatives" class="nav-link" @click="closeMenu">Initiatives</a>
        <a href="#about" class="nav-link" @click="closeMenu">About</a>
        <a href="#contact" class="nav-link" @click="closeMenu">Contact Us</a>
      </div>
    </nav>
  </header>
</template>

<script>
import { ref, onMounted } from 'vue';
import '@fortawesome/fontawesome-free/css/all.css';

export default {
  setup() {
    const isOpen = ref(false);
    const toggleMenu = () => {
      isOpen.value = !isOpen.value;
    };

    const closeMenu = () => {
      isOpen.value = false;
    };

    const logoFlat = require('../assets/logo flat (lightmode).svg');
    const logoStacked = require('../assets/logo stacked (lightmode).svg');

    const logoSrc = ref();
    const logoAlt = ref();

    const updateLogo = () => {
      const isMobile = window.innerWidth <= 768;
      logoSrc.value = isMobile ? logoStacked : logoFlat;
      logoAlt.value = isMobile ? 'Byte Builders Logo (mobile)' : 'Byte Builders Logo (desktop)';
    };

    onMounted(() => {
      updateLogo();
      window.addEventListener('resize', updateLogo);
    });

    return {
      isOpen,
      toggleMenu,
      closeMenu,
      logoSrc,
      logoAlt,
    };
  },
};
</script>

<style scoped>
header {
  padding: 1rem;
  position: relative;
  z-index: 100;
}

.header-img {
  height: 200px;
}

nav {
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  position: relative;
  z-index: 101;
}

.nav-links {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

.nav-links img {
  margin-bottom: 50px;
}

.nav-link {
  margin-bottom: 50px;
  width: 20%;
  padding: 20px;
  text-decoration: none;
  color: black;
  border: 1px solid gray;
  border-radius: 5px;
}

.nav-link:hover {
  color: #05a2e5;
  border-color: #05a2e5;
  background-color: #d9e9e9;
}

.nav-link:active {
  color: var(--color-orange);
  border-color: var(--color-orange);
  background-color: #ffe3cf;
}

.hamburger {
  display: none;
  cursor: pointer;
  background: white;
  border: 1px solid lightgray;
  padding: 5px 10px;
  margin: 0;
  position: fixed;
  right: 1rem;
  top: 1rem;
  font-size: 2rem;
  z-index: 200;
}

@media (max-width: 768px) {
  header {
    margin: 0;
    padding: 0;
  }

  .header-img {
    width: 70vw;
    padding: 16px;
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    background: white;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
  }

  nav.open {
    transform: translateX(0);
  }

  .nav-links {
    flex-direction: column;
    width: 100%;
    margin-top: 100px;
  }

  .hamburger {
    display: flex;
  }

  .nav-link {
    width: 80%;
    text-align: left;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    border: none !important;
    border-radius: 0 !important;
    box-shadow: 5px 5px 10px;
  }
}
</style>

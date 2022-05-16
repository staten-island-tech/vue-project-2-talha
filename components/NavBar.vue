<template>
  <nav>
    <div class="navbar">
      <div class="nav-links">
        <NuxtLink to="/" class="button-1">Home Page</NuxtLink>
        <NuxtLink to="/blogs/Food" class="button-1">Food</NuxtLink>
        <NuxtLink to="/Sights" class="button-1">Sight-Seeing</NuxtLink>
        <NuxtLink to="/Towns" class="button-1">Towns</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100px;
  background-color: #fff;
  z-index: 10;
}
.nav-links {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  padding: 0.5rem;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  background-color: rgb(158, 60, 60);
}

.button-1 {
  appearance: none;
  background-color: rgb(194, 93, 93);
  border: 2px solid #2a324b;
  border-radius: 1rem;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  font-family: 'Ubuntu', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  touch-action: manipulation;

  width: 10rem;
  will-change: transform;
}
.button-1:hover {
  color: #fff;
  background-color: #1a1a1a;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.button-1:active {
  box-shadow: none;
  transform: translateY(0);
}

@import url('https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap');
</style>

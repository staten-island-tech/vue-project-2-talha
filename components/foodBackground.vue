<template>
  <div class="background">
    <h1 class="title">Food</h1>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap');
.background {
  background-image: url("https://res.cloudinary.com/dkbidvnps/image/upload/v1651859462/image_uhnnqz.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -5;
}

.title {
  position: relative;
  top: 30%;
  left: 40%;
  color: white;
  font-size: 10rem;
  -webkit-text-stroke: 3px rgb(158, 60, 60);
  font-family: 'Ubuntu', sans-serif;
}
</style>

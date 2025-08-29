<template>
  <div id="about-us">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {
      msg: "This is the about component"
    };
  }
}
</script>

<style scoped>
#about-us {
  font-family: Arial, sans-serif;
}
</style>

<template>
  <div id="app" class="container mt-4">
    <Profile />
    <Education />
    <Skill />
  </div>
</template>

<script>
import Profile from './components/profile.vue';
import Education from './components/education.vue';
import Skill from './components/skill.vue';

export default {
  name: 'App',
  components: {
    Profile,
    Education,
    Skill
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>

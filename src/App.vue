<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <advanced-counter />
</template>

<script>
import AdvancedCounter from './components/AdvancedCounter.vue';

export default {
  name: 'App',
  components: {
    AdvancedCounter
  }
};
</script>

<style>
#app {
  font-family: Ubuntu, Arial, Helvetica, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 60px 0 70px;
}
</style>

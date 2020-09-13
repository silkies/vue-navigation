<template>
  <div id="app">
    <div class="navbar">
      <div>
        <router-link to="/home" class="nav-link" active-class="active-nav-link">Home</router-link>
        <router-link to="/react" class="nav-link" active-class="active-nav-link">React</router-link>
        <router-link to="/angular" class="nav-link" active-class="active-nav-link">Angular</router-link>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "App"
};
</script>

<style>
.navbar {
  color: white;
  background-color: #182b3a;
  height: 4rem;
  justify-content: space-between;
  align-items: center;
  display: flex;
}
.nav-link {
  padding: 1.5rem;
  color: inherit;
  text-decoration: inherit;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

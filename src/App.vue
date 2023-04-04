<template>
  <div id="app">
    <div id="nav">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li> 
    </ul>
    </div>
    <transition

      appear
      name="animate__animated router-animation"
      enter-active-class="animate__fadeInUp"
      leave-active-class="animate__fadeOutDown"
    >
      <router-view />
    </transition>
  </div>
</template>

<style>
@import "animate.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#nav {
  padding: 30px;
}

#nav ul {
  display: block;
}

#nav li {
  display: flex;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b928;
}
</style>

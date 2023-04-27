<template>
  <div id="app">
    <div id="nav">
      <h1 id="header"><router-link to="/"><img id="log" src="..\img\shopLogo.png" alt="?">    IC Store</router-link></h1>
  
      <nav>
        <ul>
          <li><router-link to="/about">About us</router-link></li>
          <li> <router-link to="/Productos">Products</router-link></li>
          <li> <router-link to="/Cart"><img id="log" src="..\img\cart.png" alt="?"></router-link></li>
          <li><router-link to="/Register"><img id="log" src="..\img\log.png" alt="?"></router-link></li>
        </ul>
      </nav>
    </div>
    <transition appear name="animate__animated router-animation" enter-active-class="animate__fadeInUp"
      leave-active-class="animate__fadeOutDown">
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
}

#nav {
  background-color: #333;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 10px 0px 10px;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;


}

#log {
  width: 2rem;
  border-radius: 60%;
}

nav li {
  font-size: 1rem;
  margin: 0 10px -20px;
}

nav a {
  color: #e5dfdf;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b928;
}

body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

* {
  box-sizing: border-box;
}

#header {
  color: #42b928;
  font-size: 150%;
  text-decoration: none;
}
a:visited{color: white;}
a:link{color: white;}
a:hover{color: rgba(179, 177, 177, 0.281);}



</style>


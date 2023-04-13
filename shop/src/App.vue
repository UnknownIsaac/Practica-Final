<template>
  <div id="app">
    <div id="nav">
      <h1 id="header">Store IC(Information and Communication)</h1>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About us</router-link></li>
          <li> <router-link to="/Productos">Products</router-link></li>
          <li> <router-link to="/Contact">Contact with us</router-link></li>
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

#nav{
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

nav li {
	margin: 0 10px;
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
</style>

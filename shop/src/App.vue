<template>
  <div id="app">
    <div id="header">
      <div id="nav">
        <h1 id="logo-header"><router-link to="/"><img id="logo" src="..\img\IC-logo.png" alt="?"></router-link></h1>
        <div class="search">
          <input type="search" placeholder="Looking for something?">
        </div>
        <nav>
          <ul>
            <li><router-link to="/about">About us</router-link></li>
            <li> <router-link to="/Productos">Product</router-link></li>
            <li> <router-link to="/Cart"><img id="log" src="..\img\cart.png" alt="?"></router-link></li>
            <li><router-link to="/Log"><img id="log" src="..\img\log.png" alt="?"></router-link></li>
          </ul>

        </nav>
      </div>

    </div>
    <transition appear name="animate__animated router-animation" enter-active-class="animate__fadeInUp">
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
  background-color: #201f1f;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: flex;
  align-items: center;
  font-size: 20px;
  height: 10%;
  background-image: linear-gradient(125deg, aqua, green, purple, pink);
  background-size: 400%;
  animation: bgmove 20s infinite;
}
@keyframes bgmove {
  0% {
    background-position: 0% 50%;

  }

  50% {
    background-position: 100% 50%;

  }
  100%{
    background-position: 0% 50%;
  }
}


nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;


}

.search input {
  width: 400px;
  height: 45px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 10px;

}

#logo {
  width: 4rem;
  border-radius: 60%;
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
  color: red;
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
  box-shadow: 10px 0px 10px;
}

#logo-header {
  margin-left: 5%;
  text-decoration: none;
  font-style: italic;
}

.search {
  width: 300;
  height: 100%;
  border-color: aqua;
  border-width: 10px;
}

a:visited {
  color: white;
}

a:link {
  color: white;
}

a:hover {
  color: rgba(179, 177, 177, 0.281);
}
</style>
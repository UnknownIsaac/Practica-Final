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
            <button class="dropdown-btn"><router-link to="/about">About us</router-link></button>
              <div class="dropdown-content">

            </div>
            <li class="category-menu">
              <button class="dropdown-btn">Products</button>
              <div class="dropdown-content">
                <router-link to="/products/electronics">Electronics</router-link>
                <router-link to="/products/smart-home">Smart Home</router-link>
                <router-link to="/products/phone-devices">Phone devices</router-link>
                <!-- Add more category links here -->
              </div>
            </li>
            <li> <router-link to="/cart"><img id="log" src="..\img\cart.png" alt="?"></router-link></li>
            <li><router-link to="/log"><img id="log" src="..\img\log.png" alt="?"></router-link></li>
          </ul>
        </nav>
      </div>

    </div>
    <transition appear name="animateanimated router-animation" enter-active-class="animatefadeInUp">
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
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.category-menu {
  position: relative;
  display: inline-block;
}

.dropdown-btn {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
}

.dropdown-btn:hover{
  background-color: rgba(213, 56, 56, 0.793);
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f5f5f5;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: #333;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.category-menu:hover .dropdown-content {
  display: block;
}
</style>
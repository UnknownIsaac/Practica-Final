<template>
  <div class="home-page">
    <div class="content-wrapper">
      <div class="text-wrapper">
        <p id="home-welcome-title">
          Store - IC <br/>
          Smart Solutions for a Smarter Future
        </p>
        <p id="home-welcome-text">
          Discover the Latest in Smart Technology for a Smarter Living
          Experience
        </p>
      </div>
      <div class="image-wrapper">
        <img
          src="../../img/gif-home-page.gif"
          alt="Image Description"
          class="image-with-shadow"
        />
      </div>
    </div>
    <div class="map-wrapper">
      <div id="map"></div>
    </div>  
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    this.initializeMap();
  },
  methods: {
    initializeMap() {
      // Create a new Google Map instance
      map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 39.59040423951755, lng: 2.610014223588809 }, 
        zoom: 17.5,
      });
    },
  },
};
</script>
<!-- CSS -->
<style>
.home-page {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; /* Added to stack the content vertically */
}

.content-wrapper {
  display: flex;
  align-items: center;
  max-width: 70rem;
  /* Set a maximum width for the content wrapper */
  margin-top: 5%;
  /* Center the content horizontally within the wrapper */
}

.text-wrapper {
  flex: 1;
  margin-right: 40px;
}

#map {
  float: right;
  height: 300px;
  width: 20%;
}

#home-welcome-title {
  padding-top: 5%;
  text-align: left;
  width: 100%;
  font-size: 3.2rem;
  font-weight: 200;
  font-style: normal;
  background: linear-gradient(45deg, #ff0000, #00b3e6, #00e6ac);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-family: "Montserrat", sans-serif;
}

#home-welcome-text {
  text-align: left;
  width: 64.5%;
  font-size: 1.3rem;
  font-weight: lighter;
  font-family: "Montserrat", sans-serif;
}

.map-wrapper {
  width: 100%;
}

#item-search {
  width: 40%;
  height: 50px;
  border: 1px solid #b12d2d;
  border-radius: 5px;
  padding: 0 20px;
  font-size: 1.2rem;
}

.image-with-shadow {
  /* Adjust the shadow properties as needed */
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
  display: inline-block;
}
</style>
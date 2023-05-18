<template>
    <div class="aboutUs">
        <h1>About us</h1>
        <p>Created by Chen & Isaac</p>
    </div>
    <div class="map-wrapper">
      <div id="map"></div>
    </div> 
</template>

<script>
export default {
    data() {
    return {
      map: null, // 声明 map 变量并初始化为 null
    };
  },
    name: 'About',
    mounted() {
    this.initializeMap();
  },
  methods: {
    loadGoogleMapsAPI() {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    },
    initializeMap() {
      // Create a new Google Map instance
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 39.59040423951755, lng: 2.610014223588809 },
        zoom: 17.5,
      });
      // Rest of your map initialization code
    },
  },
};

</script>
<!-- CSS -->
<style>
    
</style>
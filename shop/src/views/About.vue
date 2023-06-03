<template>
  <div class="aboutUs">
    <div class="aboutUs-Header">
      <h1>Welcome!</h1>
      <p>Welcome to Store-IC, the brainchild of Isaac and Chen, two passionate IT programming students at CIDE. As they delved into the world of technology during their studies, an idea started to take shape – a technology store that would revolutionize the way people experience the latest gadgets and devices. Store-IC represents their first startup venture, fueled by their expertise, creativity, and a deep passion for all things tech. At Store-IC, we offer a carefully curated selection of cutting-edge technology products, ranging from iPhones to PS4 consoles and beyond. Our mission is to empower your tech journey by providing access to the latest innovations that enhance your digital lifestyle. Isaac and Chen have poured their heart and soul into this project, meticulously handpicking each product and ensuring that every customer receives top-notch service and support. Step into Store-IC and embark on an exciting technological adventure where possibilities are endless. Let us be your trusted partner in the world of technology.</p>
      <p class="description">Created by Chen & Isaac</p>
    </div>
    <div class="map-wrapper">
      <div id="map"></div>
    </div>
    <div class="content">
      <h2>Our Mission</h2>
      <p class="mission">At our company, we strive to deliver innovative technology products and services that empower our customers and enhance their digital experiences.</p>
      <h2>Why Choose Us?</h2>
      <ul class="features">
        <li>
          <i class="fas fa-rocket"></i>
          <span class="feature-title">State-of-the-Art Technology</span>
          <p class="feature-description">We stay at the forefront of the tech industry, leveraging the latest advancements to provide you with exceptional solutions.</p>
        </li>
        <li>
          <i class="fas fa-users"></i>
          <span class="feature-title">Expert Team</span>
          <p class="feature-description">Our team of experienced professionals is passionate about technology and dedicated to delivering outstanding results.</p>
        </li>
        <li>
          <i class="fas fa-hand-holding-usd"></i>
          <span class="feature-title">Affordable Pricing</span>
          <p class="feature-description">We believe that technology should be accessible to everyone, which is why we offer competitive and budget-friendly pricing.</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//Importar los modulos 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
//Importar libreria
library.add(fas);

//export default entender como un import de router(podemos encontrar en el router.js)
export default {
  //Aqui inicializamos las variables
  data() {
    return {
      map: null,
    };
  },
  name: 'About',
  mounted() {
    this.initializeMap();
  },

  //Los metodos
  methods: {
     /*
     loadGoogleMapsAPI()是用来加载Google Maps API。它创建了一个<script>元素，并将其添加到HTML文档的头部。
     script.src属性指定了Google Maps API的URL，其中包含你的API密钥（需要替换为你自己的有效API密钥）和回调函数initMap。
     当脚本加载完成时，Promise将被解析（resolve），表示Google Maps API已加载完成。 如果加载出错，Promise将被拒绝（reject）。

     Es para cargar el google map API, crea un elemento script y lo añadir al head de html doc. 
     script.src atributo indica el url de Google map api, incluye el api pass y return function initMap
     Cuando el script completa la carga, el Promise va ser resolvido para presentar el API ya esta cargada. Si hay error, el Promise va ser denegada.
    */
    loadGoogleMapsAPI() {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    },
    /*
    initializeMap()是在Google Maps API加载完成后调用的初始化地图的函数。它使用google.maps.Map构造函数创建一个新的地图对象，
    并将其绑定到具有特定ID（"map"）的HTML元素上。center属性指定了地图的中心坐标（纬度和经度），zoom属性指定了初始缩放级别

    Es un funcion para que cuando el api ya esta cargado. Lo calla para inicializar la mapa. Utiliza el constructor para crear un nuevo objeto de mapa
    y lo enlace a un elemento html que tiene un id especifico. 
    El atributo center indica el locacion central de la mapa y el atributo  zoom para el nivel principio de zoom. 
    */
    initializeMap() {
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 39.59040423951755, lng: 2.610014223588809 },
        zoom: 17.5,
        styles: [
        ],
        // Additional map configuration options
        disableDefaultUI: true, // Disable default map controls
        zoomControl: true, // Enable zoom control
        fullscreenControl: true, // Enable fullscreen control
        gestureHandling: 'cooperative', // Enable gesture handling for mobile devices
      });
    },
  },
  //Un componente para iconos
  components: {
    FontAwesomeIcon,
  },
};
</script>


<style scoped>
.aboutUs {
  padding: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  color: rgb(161, 66, 66);
  font-weight: 500;
  font-family: MontSerrat;
}

.aboutUs-Header {
  position: absolute,top;
  text-align: center;
  padding: 20px;
  background-color: #f5f5f5;
  margin-bottom: 20px;
  animation: fadeIn 1s;
  box-shadow: 2.5px 0px 5px black;
}

.aboutUs h1 {
  font-size: 32px;
  margin-bottom: 10px;
}

.aboutUs p {
  color: #888;
}

.description {
  font-size: 18px;
  margin-top: 20px;
}

.map-wrapper {
  position: relative;
  height: 400px;
  margin-bottom: 2%;
  margin-top: 2%;
}

#map {
  height: 100%;
  width: 100%;
}

.content {
  position: absolute,bottom;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 40px;
  background-color: #f5f5f5;
}

.content h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.features {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.features li {
  flex-basis: calc(33.33% - 20px);
  margin-bottom: 40px;
  display: flex;
  align-items: center;
}

.features li i {
  font-size: 24px;
  margin-right: 10px;
}

.features li .feature-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.features li .feature-description {
  color: #888;
}

@media (max-width: 767px) {
  .features li {
    flex-basis: 100%;
  }
}
</style>
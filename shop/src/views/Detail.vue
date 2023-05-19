<template>
    <div class="Detail">
      <img :src="Productos.foto" alt="Product Image" class="product-image" />
      <h2>{{ Productos.nombre }}</h2>
      <p>{{ Productos.descrip }}</p>
      <p>{{ Productos.precio }} $</p>
      <button class="add-to-cart-button" @click="addToCart(selectedProduct)">Add to Cart</button>
    </div>
  </template>
<script>
//Importar los modulos
import axios from 'axios';
import Cart from "./Cart.vue";
//export default entender como un import de router(podemos encontrar en el router.js)
export default {
  name: 'Detail',
  components: {
        Cart,
    },
  //Inicializar varibales
  data() {
    return {
      selectedProduct: {},
      Productos: {}
    };
    
  },
  //Para hacer calculos 
  computed: {
    selectedProduct() {
      const id = this.$route.params.id;
      return this.Producto.find(p => p.id === id) || {};
    }
  },
    //Metodo creted, una vez que instancia de vue ya sido creado. Metodo created es el primero metodo que lo ejecuta. 
  created() {
    //crear un constante para guardar el valor de id
    const id = this.$route.params.id
    //request get al node backend. Lleva un parametro id
    axios.get('http://localhost:3000/detail/' + id)
      .then(response => {
        //this.Productos es un array de front. Recibir todos los valores que viene el backend y lo meta al Productos[]
        this.Productos = response.data;
        console.log(this.Productos)
      })
      .catch(error => {
        console.log(error);
      });
  },
  //METODOS
  methods: {
    //Este metodo es para dirigir a la vista carrito. Tiene toda la parte logica en el backend. 
    addToCart(producto) {
            this.$router.push({
                name: 'Cart',
                params: { id: producto.id }
            })
        }
  }
};
</script>
  
<style></style>
  
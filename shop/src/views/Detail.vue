<template>
    <div class="producto_Detail">
      <h2>{{ Producto.nombre }}</h2>
      <p>{{ Producto.descripcion }}</p>
      <p>{{ Producto.precio }} $</p>
      <button class="add-to-cart-button" @click="addToCart(selectedProduct)">Add to Cart</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'Detail',
    data() {
      return {
        selectedProduct: {},
        Producto: {}
      };
    },
    computed: {
      selectedProduct() {
        const id = this.$route.params.id;
        return this.Producto.find(p => p.id === id) || {};
      }
    },
    created() {
      axios.get('http://localhost:3000/detail/'+this.$route.params.id)
        .then(response => {
          this.Producto = response.data[0];
          console.log(this.Producto)
        })
        .catch(error => {
          console.log(error);
        });
    },
    methods: {
      addToCart(product) {
        console.log(product);
      }
    }
  };
  </script>
  
  <style>
  </style>
  
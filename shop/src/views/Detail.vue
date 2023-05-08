<template>
    <div class="producto_Detail">
      <h2>{{ selectedProduct.nombre }}</h2>
      <p>{{ selectedProduct.descripcion }}</p>
      <p>{{ selectedProduct.precio }} $</p>
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
        Productos: []
      };
    },
    computed: {
      selectedProduct() {
        const id = this.$route.params.id;
        return this.Productos.find(p => p.id === id) || {};
      }
    },
    created() {
      axios.get('http://localhost:3000/data')
        .then(response => {
          this.Productos = response.data;
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
  
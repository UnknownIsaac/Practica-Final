<template>
    <div class="Detail">
      <h2>{{ Productos.nombre }}</h2>
      <p>{{ Productos.descripcion }}</p>
      <p>{{ Productos.precio }} $</p>
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
      Productos: {}
    };
  },
  computed: {
    selectedProduct() {
      const id = this.$route.params.id;
      return this.Producto.find(p => p.id === id) || {};
    }
  },
  created() {
    const id = this.$route.params.id
    axios.get('http://localhost:3000/detail/' + id)
      .then(response => {
        this.Productos = response.data;
        console.log(this.Productos)
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
  
<style></style>
  
<template>
  <div class="producto_Detail" v-if="selectedItem">
    <!-- <h2>{{ selectedItem.nombre }}</h2> -->
    <p>{{ selectedItem.descripcion }}</p>
    <p>{{ selectedItem.precio }} $</p>
    <button class="add-to-cart-button" @click="addToCart(selectedItem)">Add to Cart</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Detail',
  data() {
    return {
      selectedItem: null
    };
  },
  created() {
    axios.get('http://localhost:3000/detail/' + this.$route.params.id)
      .then(response => {
        this.selectedItem = response.data[0];
        console.log(this.selectedItem);
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
  
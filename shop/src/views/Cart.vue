<template>
  <div class="Cart">
    <h1>Shopping Cart</h1>
    <ul>
      <div class="product">
        <div v-for=" producto in Productos" :key="producto.id" class="product-card">
          <h2 class="product-name"> {{ producto.nombre }} </h2>
          <h2 class="product-name"> {{ producto.precio }}$ </h2>
        </div>
      </div>
    </ul>
    <div v-if="Productos.length === 0">Your cart is empty.</div>
    <div v-else>
      <div>Total: {{ cartTotal }} $</div>
      <div><button @click="checkout()">Checkout</button></div>
    </div>
    <button v-if="Productos.length === 0" @click="goToProducto()">Let's pick something to our cart!</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Cart',
  data() {
    return {
      selectedProduct: {},
      Productos: [],
    }
  },
  computed: {
    cartTotal() {
      return this.Productos.reduce((total, producto) => total + producto.precio, 0);
    }
  },
  created() {
    const id = this.$route.params.id
    axios
      .get('http://localhost:3000/Cart/' + id)
      .then((response) => {
        this.Productos = response.data;
        // create an array of unique categories from the products
        // const uniqueCategories = [...new Set(this.Productos.map((p) => p.categoria))];
        // this.categories = [...uniqueCategories];
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    goToProducto() {
      this.$router.push({
        name: 'Product',
      });
    },
    checkout() {
      alert('Thank you for your purchase!');
      axios.post('http://localhost:3000/Checkout')
    }
  },
};
</script>

<style>
.product {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.product select {
  padding: 20px;
  margin-bottom: 20px;
  font-size: 16px;
}

.product img {
  width: 100%;
  max-width: 300px;
  height: auto;
  margin-bottom: 10px;
}

.product .product-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.product .product-description {
  font-size: 14px;
  margin-bottom: 10px;
}

.product .product-price {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

.product-card {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 10px;
  width: 300px;
}

.add-to-cart-button {
  background-color: #009688;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  padding: 10px 20px;
  transition: background-color 0.3s ease-in-out;
}

.add-to-cart-button:hover {
  background-color: #00796b;
}

select {
  padding: 6px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
  outline: none;
  transition: all 0.2s ease;
  background-image: linear-gradient(to bottom, #fff, #f2f2f2);
  background-position: center right;
  background-repeat: no-repeat;
}

select:hover {
  background-position: center right 10px;

}

select:focus {
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
  background-position: center right 15px;
}
</style>

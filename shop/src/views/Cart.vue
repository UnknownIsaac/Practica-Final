<template>
  <div class="cart">
    <h1>Shopping Cart</h1>
    <ul>
      <li v-for="(item, index) in cartItems" :key="index">
        <div>{{ item.nombre }}</div>
        <div>{{ item.precio }} $</div>
        <div><button @click="removeItem(index)">Remove</button></div>
      </li>
    </ul>
    <div v-if="cartItems.length === 0">Your cart is empty.</div>
    <div v-else>
      <div>Total: {{ cartTotal }} $</div>
      <div><button @click="checkout">Checkout</button></div>
    </div>

    <ul>
      <li v-for="producto in productos" :key="producto.id">{{ producto.nombre }} - {{ producto.precio }}</li>
    </ul>
    <button v-if="cartItems.length === 0" @click="goToProducto()">Let's pick something!</button>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data() {
    return {
      cartItems: []
    }
  },
  addToCart(item) {
    this.cartItems.push(item)
  },
  removeItem(index) {
    this.cartItems.splice(index, 1)
  },
  checkout() {
    alert('Thank you for your purchase!')
    this.cartItems = []
  },
  cartTotal() {
    return this.cartItems.reduce((total, item) => total + item.precio, 0)
  }
  ,
  methods: {
    goToProducto() {
      this.$router.push({
        name: 'Product',
      })
    }
  },

}
</script>

<style>
.cart {
  text-align: center;
}


button {
  background-color: #009688;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  padding: 10px 20px;
  transition: background-color 0.3s ease-in-out;
}

button:hover {
  background-color: #00796b;
}
</style>

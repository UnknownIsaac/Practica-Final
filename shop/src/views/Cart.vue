<template>
    <div class="cart">
      <h1>My Shopping Cart</h1>
      <div class="cart-items">
        <div class="cart-item" v-for="item in items" :key="item.id">
          <img :src="item.image" alt="Product image">
          <div class="item-details">
            <h2>{{ item.name }}</h2>
            <p>{{ item.description }}</p>
            <p>Price: ${{ item.price }}</p>
            <div class="item-quantity">
              <button @click="decreaseQuantity(item)">-</button>
              <p>{{ item.quantity }}</p>
              <button @click="increaseQuantity(item)">+</button>
            </div>
            <button @click="removeItem(item)">Remove Item</button>
          </div>
        </div>
      </div>
      <div class="cart-summary">
        <p>Total Items: {{ totalItems }}</p>
        <p>Subtotal: ${{ subtotal }}</p>
        <p>Tax: ${{ tax }}</p>
        <p>Total: ${{ total }}</p>
        <button>Checkout</button>
      </div>
    </div>
  </template>
  

<script>
export default {
    name: 'Cart',
}
</script>
<!-- CSS -->
<style>
   
</style>
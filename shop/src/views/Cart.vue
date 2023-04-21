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
   
  .cart {
    margin: 0 auto;
    max-width: 1200px;
    padding: 20px;
    background-color: #f4f4f4;
  }

  h1 {
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }

  .cart-items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
  }

  .cart-item {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }

  .cart-item img {
    max-width: 100%;
    height: auto;
  }

  .item-details {
    padding: 10px;
    text-align: center;
    flex-grow: 1;
  }

  .item-details h2 {
    font-size: 24px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 5px;
    color: #333;
  }

  .item-details p {
    font-size: 18px;
    margin-bottom: 10px;
    color: #666;
  }

  .item-quantity {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }

  .item-quantity button {
    border: none;
    background-color: #6d90b6;
    color: #fff;
    font-size: 18px;
    padding: 10px;
    margin: 0 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

</style>
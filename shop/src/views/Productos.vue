<template>
    <div class="product">
        <h1>Product Page</h1>
        <p>Welcome</p>

        <div class="products-container">
            <div v-for="producto in Productos" :key="producto.id" class="product-card">
                <img :src="producto.imagen" alt="Product Image" class="product-image" />
                <h2 class="product-name">{{ producto.nombre }}</h2>
                <h2 class="product-name">{{ producto.categoria }}</h2>
                <p class="product-description">{{ producto.descripcion }}</p>
                <div class="product-price">{{ producto.precio }} $</div>
                <button class="add-to-cart-button" @click="addToCart">Add to Cart</button>
            </div>
        </div>

    </div>
</template>

<script>
import Cart from './Cart.vue';
import axios from 'axios';
export default {
    name: 'Productos',
    components: {
        Cart
    },
    data() {
        return {
            Productos: [],
            cartItems: []
        };
    },
    addToCart(item) {
        this.cartItems.push(item)
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




}
</script>
<!-- CSS -->
<style>
.product {
    text-align: center;
}

.products-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
}

.product-card {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    margin: 10px;
    padding: 20px;
    text-align: center;
    width: 300px;
}

.product-image {
    width: 200px;
    height: 200px;
    object-fit: contain;
    margin-bottom: 20px;
}

.product-name {
    font-size: 20px;
    margin-bottom: 10px;
}

.product-description {
    font-size: 16px;
    margin-bottom: 20px;
}

.product-price {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
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
</style>
<template>
    <select v-model="selectedCategory">
        <option value="">All</option>
        <option v-for="category in categories" :value="category">{{ category }}</option>
    </select>
    <div class="product" @click="gotoDetail">
        <div v-for="producto in filteredProductos" :key="producto.id" class="product-card">
            <!--   <img :src="producto.imagen" alt="Product Image" class="product-image" /> -->
            <h2 class="product-name">{{ producto.nombre }}</h2>
            <h2 class="product-name">{{ producto.categoria }}</h2>
            <p class="product-description">{{ producto.descripcion }}</p>
            <div class="product-price">{{ producto.precio }} $</div>
            <button class="add-to-cart-button" @click="addToCart(producto)">Add to Cart</button>
        </div>
    </div>
</template>
  
  
<script>
import Cart from "./Cart.vue";
import axios from "axios";
import { push } from 'vue-router';

export default {
    name: "Productos",
    components: {
        Cart,
    },
    data() {
        return {
            Productos: [],
            selectedCategory: "",
            categories: [],
        };
    },
    methods: {
        gotoDetail: () => {
            $router.push('Detail');
        }
    },
    methods: {
        addToCart(item) {
            this.cartItems.push(item);
        },

    },
    computed: {
        filteredProductos() {
            if (this.selectedCategory === "") {
                return this.Productos;
            } else {
                return this.Productos.filter(
                    (producto) => producto.categoria === this.selectedCategory
                );
            }
        },
    },
    created() {
        axios
            .get("http://localhost:3000/data")
            .then((response) => {
                this.Productos = response.data;

                // create an array of unique categories from the products
                const uniqueCategories = [...new Set(this.Productos.map((p) => p.categoria))];
                this.categories = ["All", ...uniqueCategories];
            })
            .catch((error) => {
                console.log(error);
            });
    },
};
</script>


<!-- CSS -->
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
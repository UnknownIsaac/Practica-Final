<template>
    <div class="result">
        <div v-for="producto in filteredProductos" :key="producto.id" class="product-card">
            <!--   <img :src="producto.imagen" alt="Product Image" class="product-image" /> -->
            <h2 class="product-name">{{ producto.nombre }}</h2>
            <h2 class="product-name">{{ producto.categoria }}</h2>
            <p class="product-description">{{ producto.descripcion }}</p>
            <div class="product-price">{{ producto.precio }} $</div>
            <button class="add-to-cart-button" @click="addToCart(producto)">Add to Cart</button>
            <p></p>
            <button class="add-to-cart-button" @click="gotoDetail(producto)">Check Detail</button>
        </div>
    </div>
</template>
  
  
<script>
import axios from "axios";
//export default entender como un import de router(podemos encontrar en el router.js)
export default {
    name: "Result",
    components: {
        Cart,
    },
    data() {
        return {
            Productos: [],
            selectedCategory: "",
            categorias: [],
        };
    },
    methods: {
        gotoDetail(producto) {
            this.$router.push({
                name: 'Detail',
                params: { id: producto.id }
                
            });
        },
    
        addToCart(producto){
            
        }
    },
    computed: {
        filteredProductos() {
            return this.Productos.filter(
                    (producto) => producto.nombre == this.selectedname
                );
            if (this.selectedCategory === "") {
                return this.Productos;
            } else {
                return this.Productos.filter(
                    (producto) => producto.nombre == this.selectedname
                );
            }
        },
    },
    created() {
        axios
            .post("http://localhost:3000/Search/:nombre")
            .then((response) => {
                console.log(response.data)
                this.Productos = response.data;
                // create an array of unique nombre from the products
                const uniquenombres = [...new Set(this.Productos.map((p) => p.nombre))];
                this.nombre = [...uniquenombres];
            })
            .catch((error) => {
                console.log(error);
            });
    },
};
</script>


<!-- CSS -->
<style>
.result {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.result select {
    padding: 20px;
    margin-bottom: 20px;
    font-size: 16px;
}

.result img {
    width: 100%;
    max-width: 300px;
    height: auto;
    margin-bottom: 10px;
}

.result .product-name {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
}

.result .product-description {
    font-size: 14px;
    margin-bottom: 10px;
}

.result .product-price {
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
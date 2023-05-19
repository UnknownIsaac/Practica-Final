<template>
    <select v-model="selectedCategory">
        <option value="">All</option>
        <option v-for="category in categories" :value="category">{{ category }}</option>
    </select>
    <div class="product">
        <div v-for=" producto in filteredProductos" :key="producto.id" class="product-card">
            <!-- <img :src="producto.img" alt="Product Image" class="product-image" /> -->
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
//Importar los modulos
import Cart from "./Cart.vue";
import axios from "axios";
//export default entender como un import de router(podemos encontrar en el router.js)
export default {
    name: "Productos",
    components: {
        Cart,
    },
    //Inicializar los variables
    data() {
        return {
            Productos: [],
            selectedCategory: "",
            categorias: [],
        };
    },
    //Metodos
    methods: {
        //Dirigir a la vista detail y lleva un parametro(id)
        gotoDetail(producto) {
            this.$router.push({
                name: 'Detail',
                params: { id: producto.id }
            });
        },
        //Añadir el producto seleccionado al carrito 
        addToCart(producto) {
            this.$router.push({
                name: 'Cart',
                params: { id: producto.id }
            })
        }
    },
    //Metodo para separar los productos por categoria
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
    //Metodo creted, una vez que instancia de vue ya sido creado. Metodo created es el primero metodo que lo ejecuta. 
    created() {
        //Request get al node backend 
        axios.get("http://localhost:3000/Producto")
            .then((response) => {
                //this.Productos es un array de front. Recibir todos los valores que viene del backend y lo meta al Productos[]
                this.Productos = response.data;
                // create an array of unique categories from the products
                const uniqueCategories = [...new Set(this.Productos.map((p) => p.categoria))];
                this.categories = [...uniqueCategories];
            })
            //Control de errores
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
    padding: 10px;
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
    margin-bottom: 20px;
    width: 100%;
    max-width: 200px;
    float: right;
}

.product select:hover {
    background-position: center right 10px;
}

.product select:focus {
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
    background-position: center right 15px;
}

.product img {
    width: 100%;
    max-width: 300px;
    height: auto;
    margin-bottom: 10px;
}

.product .product-name {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
}

.product .product-category {
    font-size: 14px;
    margin-bottom: 10px;
}

.product .product-description {
    font-size: 14px;
    margin-bottom: 10px;
}

.product .product-price {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
}

.product-card {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 1px 1px 6px rgba(10, 1, 1, 0.1);
    margin: 10px;
    padding: 10px;
    width: 300px;
    background-color: transparent;
}

.add-to-cart-button {
    background-color: #009688;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    padding: 10px 20px;
    transition: background-color 0.3s ease-in-out;
}

.add-to-cart-button:hover {
    background-color: #00796b;
}

.detail-button {
    background-color: #03a9f4;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    padding: 10px 20px;
    transition: background-color 0.3s ease-in-out;
    margin-top: 10px;
}

.detail-button:hover {
    background-color: #0288d1;
}
</style>

<template>
    <div class="product">
        <h1>Product Page</h1>
        <p>Welcome</p>
      
        <ul>
            <li v-for="producto in Productos" :key="producto.id">
                {{ producto.nombre }} - {{ producto.precio }}
            </li>
        </ul>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Productos',
    data() {
        return {
            Productos: []
        };
    },
    created() {
        axios.get('http://localhost:3000/data')
            .then(response => {
                this.Productos = response.data;

            })
            .catch(error => {
                console.log(error);
            });
    }
}
</script>
<!-- CSS -->
<style></style>
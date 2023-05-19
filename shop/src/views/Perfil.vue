<template>
    <div class="perfil">
        <div class="perfil-header">
            <!-- Titulo y descripcion -->
            <h2 class="perfil-title">User Perfil</h2>
            <p class="perfil-description">Welcome here to your own Perfil!!!</p>
        </div>
        <div class="perfil-content">
            <!-- Contenido -->
            <div class="perfil-avatar">
                <img src="../../img/earth.png" alt="用户头像" />
            </div>
            <div class="perfil-details">
                <p class="perfil-name">{{ usuario.nombre }}</p>
                <p class="perfil-email">{{ usuario.email }}</p>
                <p class="perfil-bio">Super VIP client</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
//export default entender como un import de router(podemos encontrar en el router.js)
export default {
    name: 'Perfil',
    data() {
        return {
            usuario: {},
        }
    },

    created() {
        // Aconseguir el id de usuario
        const id = '19';
        // Get request al node backend
        axios.get('http://localhost:3000/usuario/' + id)
            .then((response) => {
                this.usuario = response.data;
                console.log(this.usuario);
            })
            .catch((error) => {
                console.log(error);
            });
    },
}


</script>
  
<style scoped>
.perfil {
    height: 100%;
    padding: 20px;
    text-align: center;
    background-image: linear-gradient(125deg, rgb(31, 167, 167), #23b08d, #adadad, pink);
    background-size: 400%;
    animation: bgmove 20s infinite;
}

.perfil-header {
    margin-bottom: 20px;
    animation: fadeIn 1s;
}

.perfil-title {
    font-size: 28px;
    margin-bottom: 10px;
}

.perfil-description {
    font-size: 16px;
}

.perfil-content {
    display: block;
    align-items: center;
    animation: slideInLeft 1s;
}

.perfil-avatar img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    animation: rotate 4s infinite linear;
}

.perfil-details {
    margin-left: 20px;
    animation: slideInRight 1s;
}

.perfil-name {
    font-size: 24px;
    margin-bottom: 5px;
}

.perfil-email {
    margin-bottom: 5px;
}

.perfil-bio {
    font-size: 18px;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes slideInLeft {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideInRight {
    0% {
        transform: translateX(100%);
        opacity: 0;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes bgmove {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}
</style>
  




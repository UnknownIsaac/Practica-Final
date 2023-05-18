<template>
    <div class="perfil">
        <div class="perfil-header">
            <!-- 标题和描述 -->
            <h2 class="perfil-title">User Perfil</h2>
            <p class="perfil-description">Welcome over here to your own perfil</p>
        </div>
        <div class="perfil-content">
            <!-- 用户信息内容 -->
            <div class="perfil-avatar">
                <img src="../../img/earth.png" alt="用户头像" />
            </div>
            <div class="perfil-details">
                <p class="perfil-name">John Doe</p>
                <p class="perfil-email">johndoe@gmail.com</p>
                <p class="perfil-bio">Super VIP client</p>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
.perfil {
    padding: 20px;
    text-align: center;
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
    display: flex;
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

</style>
  



<script>
import axios from 'axios';
export default {
    name: 'Perfil'
}
</script>
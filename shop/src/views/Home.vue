<template>
    <div class="home page">
        <p id="home-welcome">Welcome to our store</p>
        <input id="item-search" type="search" placeholder="What are you looking for?">
    </div>
</template>

<script>
export default {
    name: 'Home',
}
</script>
<!-- CSS -->
<style>
    #home-welcome{
        margin-top: 5%;
        font-size: 2rem;
        font-weight: 200;
        
    }
    #item-search{
        width: 40%;
        height: 50px;
        border: 1px solid #b12d2d;
        border-radius: 5px;
        padding: 0 20px;
        font-size: 1.2rem;
    }
</style>
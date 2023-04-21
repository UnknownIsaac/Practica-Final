<template>
    <div class="acc">
        <h1>Log page</h1> 
        <p>Welcome</p> 
       
        <table border="1rem" align="center">
            <th colspan="2">Log In</th>
            <tr>
                <td>User name: </td>
                <td><input id="UserName"></td>
            </tr>
            <tr>
                <td>Password</td>
                <td><input type="Password"></td>
            </tr>
        </table>
        <button>Log in</button>
        
    </div>
</template>

<script>
export default {
    name: 'Log',
};
methods: {

}
</script>
<!-- CSS -->
<style>
    #UserName{
        color: green;
    }
</style>
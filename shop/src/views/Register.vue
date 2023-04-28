<template>
    <div class="log">
        <h1>Register</h1> 
       
        <table border="1rem" align="center">
            <tr>
                <td>User name: </td>
                <td><input type="UserName" placeholder="Your User name"></td>
            </tr>
            <tr>
                <td>Password</td>
                <td><input type="Password" placeholder="Password"></td>
            </tr>
            <tr>
                <td>Repeat Password</td>
                <td><input type="Password" placeholder="Repeate your pass again"></td>
            </tr>
        </table>
        <v-btn classs="" @click="SignUp()">Sign up</v-btn>
        <button type="button" @click="$router.push('Log')">Have a account?</button>
    </div>
</template>

<script>

export default {
    name: 'Log',
    method: {
      
    } 
};


function SignUp(){

}



</script>

<!-- CSS -->
<style>


</style>
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
        <br>
        <p>Alredy got an account? <a @click="$router.push('Log')" class="login-link">Log in</a></p>
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

.login-link {
    color: #b12d2db8;
    text-decoration: none;
    font-size: 1.0rem;
    font-weight: bold;    
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}

</style>
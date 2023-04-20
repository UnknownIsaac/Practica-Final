<template>
    <div class="log">
        <h1>Log page</h1> 
        <p>Welcome</p> 
       
        <table border="1rem" align="center">
            <th colspan="2">Registration</th>
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
        <button type="primary" @click="SignUp()">Sign up</button>
        <button type="button" @click="HaveAcc()">Have a account?</button>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';



export default {
    name: 'Log',
    method: {
        HaveAcc () {
            <router-link to="/Acc">HaveAcc</router-link>
        }
    } 
    
};


function SignUp(){

}



</script>
<!-- CSS -->
<style>
    #UserName{
        color: green;
    }
    
</style>
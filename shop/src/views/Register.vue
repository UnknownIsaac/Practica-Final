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
.log {
  background-color: #1f2833;
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  color: #fff;
  font-family: 'Roboto', sans-serif;
  margin: 0 auto;
  max-width: 500px;
  padding: 50px;
}

h1 {
  color: #02867d;
  font-size: 36px;
  margin-bottom: 30px;
}

p {
  font-size: 20px;
  margin-bottom: 40px;
}

table {
  border-collapse: collapse;
  margin: 0 auto;
  width: 100%;
}

th {
  background-color: #4bb9b4;
  border: 2px solid #fff;
  color: #fff;
  font-size: 24px;
  font-weight: 400;
  padding: 20px;
  text-align: center;
  text-transform: uppercase;
}

td {
  border: 2px solid #45a29e;
  padding: 10px;
}

input[type="text"],
input[type="password"] {
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #66fcf1;
  color: #fff;
  font-size: 18px;
  margin-bottom: 20px;
  outline: none;
  padding: 10px;
  transition: border-bottom 0.3s ease;
  width: 100%;
}


button[type="log in"] {
  background-color: #45a29e;
  border: none;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  margin-top: 20px;
  outline: none;
  padding: 10px 30px;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #66fcf1;
}

</style>
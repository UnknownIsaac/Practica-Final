<template>
    <div class="acc">
        <h1>Log In</h1> 

       
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
 .log {
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #333;
  text-align: center;
  margin-top: 50px;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
}

.log h1 {
  font-size: 32px;
  margin-top: 0;
}

.log p {
  font-size: 20px;
}

.log table {
  border-collapse: collapse;
  margin-top: 30px;
  margin-bottom: 30px;
}

.log td {
  padding: 10px;
}

.log td:first-child {
  text-align: right;
  font-weight: bold;
}

.log input[type="UserName"], .log input[type="Password"] {
  border: none;
  border-radius: 3px;
  padding: 10px;
  width: 200px;
  font-size: 16px;
  margin-left: 10px;
}



.log button {
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  background-color: #2b9cff;
  color: #fff;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
}

.log button:hover {
  background-color: #0077cc;
}

</style>
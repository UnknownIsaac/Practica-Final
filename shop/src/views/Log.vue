<template>
    
        <div class="wrapper">
         <div class="form-box">
          <h2>LogIn</h2>
          <form action="#">
         
            <div class="input-box">
      
                <input type="email" required>
                <label>Email</label>
              

              
            </div>

            <div class="input-box">
              <input type="password" required>
              <label >Password</label>
            </div>
            <div class="remember-forgot">
              <label><input type="checkbox">Remember me</label>
              <a href="">Forgot Your Password</a>
            </div>
            <button type="submit" class="btn">LOG IN</button>
            <div class="login-register">
              <p>Don't have a account? <a href="" class="register-link">Register</a></p>
            </div>
          </form>

        </div>
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
.wrapper{

  position: relative;
  
  width: 100%;
  height: 440px;
  background-color: transparent;
  border: 2px solid rgba(blue);
  border-radius: 20px;
  backdrop-filter: blur(20px);
  box-shadow: 0 0 30px rgba(0,0,0,.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper .form-box{
  width: 50%;
  padding: 40px;
}
.form-box h2{
  font-size: 2em;
  color: black;
  position: relative;
  text-align: center;
  align-items: center;
}
.input-box{
  position: relative;
  width: 100%;
  height: 50px;
  border-bottom: 2px solid grey;
  margin: 30px 0
}
.input-box label{
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  font-size: 1ems;
  color: grey;
  font-weight: 500;
  pointer-events: none;
}



</style>
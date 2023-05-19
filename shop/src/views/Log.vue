<template>
  <div class="Log">
    <transition appear name="animate__animated router-animation" enter-active-class="animate__zoomIn animate__delay-1s">
      <div class="form-box">
        <img src="..\..\img\logimg.png" id="user-img" alt="user-img">
        <form>
          <div class="input-box">
            <input style="float: left; border:0" type="email" v-model="email" placeholder="Email" required>
          </div>
          <div class="input-box">
            <input style="float: left; border:0" type="password" v-model="password" placeholder="Password" required>
          </div>
          <div class="remember-forgot">
            <label><input type="checkbox">Remember me</label>
          </div>
          <button type="submit" class="btn" @click="goToPerfil()">LOG IN</button>
          <div class="login-register">
            <p>Don't have a account? <a @click="goToRegister()" class="register-link">Register</a></p>
          </div>
        </form>
      </div>
    </transition>
  </div>
</template>


<script>
import "animate.css";
import axios from 'axios';
//export default entender como un import de router(podemos encontrar en el router.js)
export default {
  name: 'Log',
  data() {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    goToPerfil() {
      // axios.post('http://localhost:3000/LogIn', {
      //   email: this.email,
      //   password: this.password
      // }).then(response => {
      //   console.log(response.data);
      //   if (response.data == 'Yes') {
      //     console.log('Lets go Perfil')
          this.$router.push({
            name: 'Perfil',
          });
          // router.beforeEach(async (to, from) => {
            // if (
              // make sure the user is authenticated
              // !isAuthenticated &&
              // ❗️ Avoid an infinite redirect
              // to.name !== 'Log'
            // ) {
              // redirect the user to the login page
              // return { name: 'Perfil' }
            // }
          // })
      //   } else {
      //     // 处理登录失败的情况，例如显示错误消息等
      //     alert(error)
      //   }

      // }).
      //   // handle other responses
      //   catch(error => {
      //     console.log(error);
      //     // handle error
      //   });
    },

    goToRegister() {
      this.$router.push({
        name: 'Register',
      });
    }

  },
};


</script>

<!-- CSS -->
<style>

.Log {
  position: relative;
  width: 100%;
  height: 700px;
  background-color: transparent;
  border: 2px solid rgba(blue);
  backdrop-filter: blur(20px);
  box-shadow: 0 0 30px rgba(0, 0, 0, .5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.Log .form-box {
  width: 50%;
  padding: 40px;
}

.form-box h2 {
  font-size: 2em;
  color: black;
  position: relative;
  text-align: center;
  align-items: center;
}

.input-box {
  position: relative;
  width: 100%;
  height: 50px;
  border-bottom: 2px solid grey;
  margin: 30px 0;
}

.input-box bel {
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  font-size: 1ems;
  color: grey;
  font-weight: 500;
  pointer-events: none;
}

.register-link {
  color: #b12d2db8;
  text-decoration: none;
  font-size: 1.0rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

#forgot-passwd {
  color: #b12d2db8;
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.btn {
  margin-top: 2%;
  width: 25%;
  height: 50px;
  border: none;
  outline: none;
  background-color: #b12d2d;
  color: white;
  font-size: 1.2em;
  font-weight: 550;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.btn:hover {
  background-color: #b12d2dfe;
  color: cornsilk;
  box-shadow: 0 0 10px #b12d2d;
  transition-delay: 0.2s;
}

#user-img {
  margin-top: 7%;
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 50%;
  position: absolute;
  top: -50px;
  left: calc(50% - 50px);
  transition: all 0.3s ease-in-out;
}

input {
  height: 100%;
  width: 100%;
}
</style>
<template>
    <div class="Register">
        <div class="form-box">
            <img src="..\..\img\logimg.png" id="user-img" alt="user-img">
            <transition appear name="animate__animated router-animation"
                enter-active-class="animate__zoomIn animate__delay-1s">
                <form action="#">
                    <div class="input-box">
                        <input style="float: left; border:0" type="name" v-model="username" required placeholder="Username">
                    </div>

                    <div class="input-box">
                        <input style="float: left; border:0" type="email" v-model="email" required placeholder="Email">
                    </div>

                    <div class="input-box">
                        <input style="float: left; border:0" type="password" v-model="password" required
                            placeholder="Password">
                    </div>

                    <div class="input-box">
                        <input style="float: left; border:0" type="password" v-model="repeatPassword" required
                            placeholder="Repeat Password">
                    </div>
                    <button type="submit" class="btn" @click="createUser()">Register</button>
                    <div class="login-register">
                        <p>Already have an account?<a @click="goToLog()" class="register-link">Log In</a></p>
                    </div>
                </form>
            </transition>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
//export default entender como un import de router(podemos encontrar en el router.js)
export default {
    name: 'Log',
    //Inicializar los variables
    data() {
        return {
            username: '',
            email: '',
            password: ''
        };
    },
    //Metodos
    methods: {
        //Metodo para crear el usuario 
        createUser() {
            //Compara el input de password y repeatePassword si son iguales, si no. Salga una alerta que dice no son iguales y hace un return(reinicia la pagina)
            if (this.password !== this.repeatPassword) {
                alert('Passwords do not match');
                return;
            }
            //Post request al node backend, La parte logica esta todas en el node backend
            axios.post('http://localhost:3000/Register', {
                //Envia esos 3 variables al node backend y los maneja alli. 
                nombre: this.username,
                email: this.email,
                pass: this.password
            }).then(response => {
                // handle response
                console.log(response.data);

            }).catch(error => {
                // handle error
                console.log(error);

            });
            //Dirigir a la vista de log
            this.$router.push('/Log')
        },
        //Dirigir a la vista de log
        goToLog() {
            this.$router.push({
                name: 'Log',
            })
        }

    }
};
</script>

<!-- CSS -->
<style>
.Register {
    position: relative;
    width: 100%;
    height: 700px;
    background-color: transparent;
    border: 2px solid rgba(blue);
    border-radius: 20px;
    backdrop-filter: blur(20px);
    box-shadow: 0 0 30px rgba(0, 0, 0, .5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.Register .form-box {
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
    margin: 30px 0
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
    font-size: large;
}
</style>
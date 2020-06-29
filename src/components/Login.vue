<template>
    <v-card>
        <v-row>
            <v-col class="space1"  cols="12" sm="12"></v-col>
            <v-col class="space2"  cols="12" sm="12"></v-col>
            <v-col class = "default">
                <v-card-text class = "catch"  cols="12" sm="12">Mientras más rápido, mejor</v-card-text>
            </v-col>
        </v-row>

        <v-card-text class = "white--text">
            <v-form v-model="isValid" class = "Inicio" >
                <v-card-title class ="text">Inicio</v-card-title>
                <p>Correo</p>
                <v-text-field single-line rounded filled outlined color="white" dark
                              v-model="email"
                              :rules="[v => !!v || 'Ingresar Correo']"
                              required>
                </v-text-field>
                <p>Contraseña</p>
                <v-text-field  single-line rounded filled outlined color="white" dark
                               v-model="password"
                               :rules="[v => !!v || 'Ingresar Contraseña']"
                               type="password"
                               required>
                </v-text-field>

                <router-link to="/findPassword" class = "red--text">Recordar Contraseña</router-link>

                <router-link to="/StudentHome" style="text-decoration:none">
                    <v-btn class="Accept" outlined color="white" rounded >Aceptar</v-btn>
                </router-link>
            </v-form>
        </v-card-text >

        <v-row class ="default">
            <v-col class = "imga" cols="5" sm="4">
                <div class="container" style="clear: right">
                    <v-img class="imag" position="25% 75%" src = @/assets/speedplanner.png aspect-ratio = "6.5">
                    </v-img>
                </div>
            </v-col>
            <v-col class="space2"  cols="12" sm="12"></v-col>
            <v-col class="space3"  cols="12" sm="12">
                <v-card-text class ="Domain">Adaptimize, 2019</v-card-text>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
    import router from "../router";
    export default {
        name: "Login",
        data: () => ({
                email: null,
                password: null,
                isValid: true
            }
        ),
        methods:{
            aceptar(){
                router.push({path: `/StudentHome`})
                location.reload();
            }
        }
    }

</script>

<style scoped>
    .imga{
        background-color: #2E3D4E;
        height: 90px;
    }
    .imag{
        opacity: 0.5;
    }
    .text{
        font-size: 50px;
        font-weight: bold;
    }
    .catch{
        color: #FFFFFF;
        background-color: #2E3D4E;
        font-family: 'Khula', sans-serif;
        font-size: 35px;
        font-style: italic;
        font-weight: bold;
        height: 100px;
        text-align: center;
    }
    .red--text{
        text-decoration-line: underline;
        color: #9f3833 !important;
    }
    .Inicio{
        background-color:#23313F;
        font-family: 'Khula', sans-serif;
        font-size: 20px;
        font-weight: unset;
    }
    .text-right{
        background-color: #2E3D4E;
    }
    .white--text{
        background-color:#23313F;
        color: #FFFFFF !important;
    }
    .Accept{
        width: 150px;
        height: 40px;
        font-size: 18px;
        color:white;
        font-family: 'Khula', sans-serif;
        font-style: normal;
        border-radius: 20px;
        border-style: solid;
        border-color: #FFFFFF;
        background-color: #A43E38;
        border-width: thick;
        margin-left: 1315px;
    }
    .space1{
        background-color: #3055AB;
        height: 70px;
    }
    .space2{
        background-color: #D3D6E2;
        height: 5px;
    }
    .space3{
        background-color: #9F3833;
        height: 50px;
        font-weight: bold;
    }
    .default{
        background-color: #2E3D4E;
    }
    .Domain{
        color: #FFFFFF;
        text-align: right;
    }

    .container{
    }
</style>

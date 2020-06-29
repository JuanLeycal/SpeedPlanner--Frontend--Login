<template>
    <v-card>
        <v-row>
            <v-col class="space1"  cols="12" sm="12"></v-col>
            <v-col class="space2"  cols="12" sm="12"></v-col>
            <v-col class = "imga" cols="12" sm="12">
                <div class="container" style="clear: right">
                    <v-img class="imag" position="25% 75%" src = @/assets/speedplanner.png aspect-ratio = "7.5">
                    </v-img>
                </div>
            </v-col>
        </v-row>
        <v-col class="blue"  cols="12" sm="12"></v-col>
        <v-card-text class = "white--text">
            <v-form v-model="isValid" class = "Inicio" >
                <v-card-text class ="text" cols="12" sm="12">Se detectó una cuenta. Se envió un correo con la contraseña</v-card-text>

                    <div class="text-center">
                        <router-link to="/" style="text-decoration:none">
                            <v-btn  outlined color="white" rounded class="Log">No recibi un correo</v-btn>
                        </router-link>
                        <router-link to="/" style="text-decoration:none">
                            <v-btn outlined color="white" rounded class="Accept">Volver al Login</v-btn>
                        </router-link>
                    </div>

            </v-form>
        </v-card-text >
        <v-col class="blue"  cols="12" sm="12"></v-col>
        <div class="default">
            <v-col class="default"  cols="12" sm="12"></v-col>
        </div>
        <v-row>
            <v-col class="space2"  cols="12" sm="12"></v-col>
            <v-col class="space3"  cols="12" sm="12">
                <v-card-text class ="Domain">Adaptimize, 2019</v-card-text>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
    export default {
        name: "PasswordFound"
    }
</script>

<style scoped>
    .blue{
        background-color: #3B62B7;
    }
    .default{
        background-color: #2E3D4E ;
        height: 100px;
    }
    .imga{
        background-color: #2E3D4E;

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
        font-family: 'Khula', sans-serif;
        color: #FFFFFF !important;
        text-align: right;
    }
    .correo{
        font-size: 2em;
    }
    .text{
        font-size: 3em;
        font-weight: bold;
        font-style: italic;
        color: #FFFFFF !important;
        text-align: center;
    }
    .white--text{
        background-color: #23313F;
        color: #FFFFFF !important;
        font-family: 'Khula', sans-serif;
    }
    .imag{
        opacity: 0.5;
    }
    .Accept{
        width: 200px;
        height: 60px;
        font-size: 18px;
        color:white;
        font-family: 'Khula', sans-serif;
        font-style: normal;
        border-radius: 20px;
        border-style: solid;
        border-color: #FFFFFF;
        background-color: #3457A1;
        border-width: thick;
        margin-left: 280px;

    }
    .Log{
        width: 250px;
        height: 60px;
        font-size: 18px;
        color:white;
        font-family: 'Khula', sans-serif;
        font-style: normal;
        border-radius: 20px;
        border-style: solid;
        border-color: #FFFFFF;
        background-color: #A33D37;
        border-width: thick;
        margin-left: 400px;
    }
</style>

<template>
    <v-card class ="a">
        <v-row>
            <v-col class="space1" cols="12" sm="12">
                <v-img class="imag"      src = @/assets/speedplanner.png aspect-ratio = "7.5"></v-img>
            </v-col>
            <v-col class="space2" cols="12" sm="12"></v-col>
        </v-row>

        <v-card-text class ="Data">
            <v-form class="Data1">
                <h1>Ciclo: Centro Educativo: Carrera</h1>
            </v-form>
        </v-card-text>

        <v-card-text class ="student-home">
            <h1>Cursos Disponibles</h1><br><br>
            <v-card class="mx-auto">
                <v-navigation-drawer class="deep-purple accent-4" dark permanent>
                    <v-list class="list">
                        <v-item>
                            <router-link to="/CursoDeCarrera" style="text-decoration:none">
                                <v-btn class ="button-carrera"> > Cursos de Carrera</v-btn>
                            </router-link>
                        </v-item>
                        <v-item>
                            <router-link to="/CursoElectivo" style="text-decoration:none">
                                <v-btn class ="button-electivo"> > Cursos Electivos</v-btn>
                            </router-link>
                        </v-item>
                    </v-list>

                    <template v-slot:append>
                        <div class="pa-2">
                            <v-btn class ="button" >Guardar</v-btn>
                            <v-btn class ="button">Grabar</v-btn>
                        </div>
                    </template>

                </v-navigation-drawer>
            </v-card>
        </v-card-text>


        <v-col class="space2" cols="12" sm="12"></v-col>
        <v-col class="space3"  cols="12" sm="12">
            <v-card-text class ="text">@Adaptimize, 2020</v-card-text>
        </v-col>

    </v-card>
</template>

<script>

    export default {
        name: "StudentHome",

    }
    //Calendar de Vuetify
    /*<v-row>
    <v-col>
    <v-sheet height="400">
        <v-calendar
    ref="calendar"
    :now="today"
    :value="today"
    :events="events"
    color="primary"
    type="week"
        ></v-calendar>
        </v-sheet>
        </v-col>
        </v-row>*/
</script>

<style scoped>
    .space1 {
        background-color: #3055AB;
        height: 150px;
    }
    .imag{
        width: 40%;
        height: 40%;
        position: relative;
        top: 25px;
        left: 1em;
    }
    .space2{
        background-color: #D3D6E2;
        height: 10px;
    }
    .space3{
        background-color: #9F3833;
        height: 95px;
        font-weight: bold;
        color: #FFFFFF;
        text-align: right;
    }

    .Data{
        background-color: #2E3D4E;
        height: 100px;
        font-size: 13px;
    }

    .Data h1{
        color: #FFFFFF;
    }

    .student-home{
        background-color: #23313F;
        height: 550px;
        width: 100%;
    }

    .mx-auto{
        height: 400px;
        width: 256px;
        border-radius: 6px;
        border: 2px solid white;
    }

    .student-home h1{
        font-size: 25px;
        text-align: left;
        color : #9F3833;;
        padding-top: 30px;
        padding-left: 20px;
    }

    .accent-4{
        background-color: #48617C;
    }
    .button{
        background-color: #3055AB !important;
        display: block;
        font-size:13px;
        width:100%;
        height:100%;
        border-radius: 6px;
        border: 2px solid white;
    }
    .button-carrera{
        background-color: #48617C !important;
        display: block;
        font-size:13px;
        width:100%;
        height:100%;
        color:white;
    }

    .button-electivo{
        background-color: #48617C !important;
        display: block;
        font-size:13px;
        width:100%;
        height:100%;
        color:white;
    }
    .a{
        font-family: 'Khula', sans-serif;
        font-style: normal;
    }
</style>

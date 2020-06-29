<template>
    <v-card class="a">
        <v-row>
            <v-col class="space1" cols="12" sm="12">
                <h1>Cursos Electivos</h1>
            </v-col>
            <v-col class="space2" cols="12" sm="12"></v-col>
            <v-col class="space3" cols="12" sm="12"></v-col>
        </v-row>

        <v-card-text class ="horarios-disponibles">
            <h1>Secciones Disponible</h1>
            <v-btn class ="button-filter" >Filtros</v-btn>
            <div>
                <v-data-table
                        v-model="selected"
                        :dark="true"
                        :headers="headers"
                        :items="courses"
                        :single-select="singleSelect"
                        item-key="section"
                        show-select
                        class="elevation-1"
                >
                    <template v-slot:top>
                        <v-switch v-model="singleSelect" label="Single select" class="pa-3"></v-switch>
                    </template>
                </v-data-table>
            </div>
            <router-link to="/StudentHome" style="text-decoration:none">
                <v-btn class ="aceptar">Aceptar</v-btn>
            </router-link>
            <router-link to="/StudentHome" style="text-decoration:none">
                <v-btn class ="cancelar">Cancelar</v-btn>
            </router-link>

        </v-card-text>

        <v-row>

            <v-col class="space9" cols="12" sm="12"><v-img class="imag" src = @/assets/speedplanner.png aspect-ratio = "6.5"></v-img></v-col>
            <v-col class="space3" cols="12" sm="12"></v-col>
            <v-col class="space2" cols="12" sm="12"></v-col>
        </v-row>

        <v-col class="space8"  cols="12" sm="12">
            <v-card-text class ="text">@Adaptimize, 2020</v-card-text>
        </v-col>
    </v-card>
</template>

<script>
    export default {
        name: "CursoElectivo",
        data () {
            return {
                singleSelect: false,
                selected: [],
                headers: [
                    {
                        text: 'Seccion',
                        align: 'start',
                        sortable: false,
                        value: 'section',
                    },
                    { text: 'Curso', value: 'curso' },
                    { text: 'Docente', value: 'docente' },
                    { text: 'Hora', value: 'hora' },
                    { text: 'Salon', value: 'salon' },
                    { text: 'Credito', value: 'credit' },
                ],
                courses: [
                    {
                        section: 'SW1A',
                        curso: 'Programacion II',
                        docente: 'Abraham Sopla',
                        hora: 'Lun 7 am - 9 am / Mie 7 am - 9 am',
                        salon: 'UC - 45',
                        credit: 5
                    },
                    {
                        section: 'SW31',
                        curso: 'Calculo II',
                        docente: 'Merwill',
                        hora: 'Lun 7 am - 9 am / Mie 7 am - 9 am',
                        salon: 'UC - 50',
                        credit: 6
                    },
                    {
                        section: 'WB01',
                        curso: 'Base de Datos',
                        docente: 'Mon Ban',
                        hora: 'Lun 7 am - 9 am / Mie 7 am - 9 am',
                        salon: 'UC - 50',
                        credit: 4
                    },
                ],
            }
        },
    }
</script>

<style scoped>
    .space1 {
        background-color:#2E3D4E;
        height: 125px;
        color: White;
        font-size: 30px;
        text-align: left;
        left: 50px;
    }
    .space1 h1{
        color: white;
        font-size: 70px;
        text-align: left;
        padding-left: 15px;
    }

    .space2{
        background-color: #3055AB;
        height: 2%;
    }
    .space3{
        background-color: #2C4B87;
        height:2%;
    }

    .horarios-disponibles{
        background-color:  #23313F ;
        height: 500px;
    }

    .space8 {
        background-color: #9F3833;
        height: 110px;
        font-weight: bold;
        color: #FFFFFF;
        text-align: right;
    }
    .horarios-disponibles h1{
        color: white;
        font-size: 40px;
    }
    .space9 {
        background-color: #23313F;
        height: 25%;
    }
    .a{
        font-family: 'Khula', sans-serif;
        font-style: normal;
    }
    .imag {
        width: 30%;
        height: 30%;
        left: 2em;
        opacity: 0.5;
    }

    .button-filter{
        float: right;
        background-color: #696C6F !important;
        font-size:13px;
        width:15%;
        height:15%;
        border-radius: 6px;
        border: 2px solid white;
        color: white;
        top: -45px;
    }

    .aceptar{
        float: right;
        background-color: #4377F2!important;
        font-size:13px;
        width:15%;
        height:15%;
        border-radius: 6px;
        border: 2px solid white;
        color: white;
        top: 90px;
    }

    .cancelar{
        float: right;
        background-color: #B8504F !important;
        font-size:13px;
        width:15%;
        height:15%;
        border-radius: 6px;
        border: 2px solid white;
        color: white;
        top: 90px;
        right: 5%;
    }
</style>

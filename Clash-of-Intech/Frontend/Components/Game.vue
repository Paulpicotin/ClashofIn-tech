<template>
  <div id= "game">
     <h2>{{'Créer une partie'}}</h2>        
    <label for="COIVilleName">Nom de la ville</label>
    <input v-model="COIVilleName" type="text" id="COIVilleNameInput" />
    <button class="Valider" v-on:click="submitForm"></button> 
  </div>
</template>

<script>
export default {
  name: "game",
  data() {
    return{
      COIVilleName : null
    }
  },
  methods: {
    game(){
    },
    StartGame() {

    }
  }
}
</script>
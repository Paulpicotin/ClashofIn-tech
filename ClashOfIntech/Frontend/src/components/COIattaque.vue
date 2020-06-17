<template>
  <div id= "attaque">
    <button v-on:click ="atack"><img src="../assets/bouton.png" alt="player"/></button>
    <label for="COINomInput">Nom</label>
    <button v-on:click ="atack"><img src="../assets/bouton.png" alt="player"/></button>
    <button v-on:click ="atack"><img src="../assets/bouton.png" alt="player"/></button>
    <router-link to='/village'>
    <button v-on:click ="nextPage"><img src="../assets/retour.png" alt="panneau"/></button></router-link>    
  </div>
</template>

<script>

export default {
  name: "attaque",
  data() {
    return {

    }
  },
  methods: {
    nextPage() {
      this.$router.push('/village')
    },
    atack(){

    }
  }
}
</script>

<style scoped>
.player, .panneau{
  display: flex 1 1 ;
  flex-direction: column;
  margin-left:35%;
  background: none;
  border: none;
}
</style>
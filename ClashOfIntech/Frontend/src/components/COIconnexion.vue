<template>
  <div id= "connexion">
    <h2>{{'Connexion'}}</h2>   
    <label for="COIPseudo">Pseudo</label>
    <input v-model ="CoiPseudo" type ="text" id="COIPseudo"/>
    <label for = "COIPassword">Password</label>
    <input v-model ="COIPassword" type ="text" id="COIPassword"/>
    <button v-on:click ="nextPage">{{'C OKKKK'}}</button>    
  </div>
</template>

<script>
export default {
  name: "connexion",
  data() {
    return {
      COIPseudo: null,
      COIPassword: null,
    };
  }
}
</script>

<style scoped>
label,
input {
  display: block;
  margin-bottom: 10px;
  width: 150px;
  margin-left: 7%;
  }
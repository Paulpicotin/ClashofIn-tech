<template>
  <div id= "village">      
    <label class="ressource" for="OR">OR</label>    
    <label class="ressource" for = "FER">FER</label>
    <label class="ressource" for = "BOIS">BOIS</label>
    <label class="ressource" for="EAU">EAU</label>    
    <label class="ressource" for = "BLE">BLE</label>
    <label class="ressource" for = "PIERRE">PIERRE</label>    
    <button class="bouton" v-on:click ="param" >{{'PARAM'}}</button>
    <router-link to="./">
    <button class="bouton" v-on:click ="attaque" >{{'ATTAQUE'}}</button></router-link> 
    <router-link to="./">
    <button class="bouton" v-on:click ="defense" >{{'DEFENSE'}}</button></router-link>  
    <router-link to="./">
    <button class="bouton" v-on:click ="batiment" >{{'BATIMENT'}}</button></router-link>  
    <router-link to="./">
    <button class="bouton" v-on:click ="ameliorer" >{{'AMELIORER'}}</button></router-link>
    
  </div>
</template>
<script>
export default {
  name: "village",
  data() {
    return {
      idplayer: this.idplayer,
      pseudo: this.pseudo,
    };
  },
  methods:{
  }
}
</script>

<style scoped>
.ressource{
    display: flex;
    flex-direction: column;
    margin-left:120%;
}
input {
    display: block;
    margin-bottom: 10px;
    width: 150px;
    margin-left: 7%;
}
.bouton{
  background: #6AB6D8;
  padding: 10px;
  margin-top: 40%;
  margin-left: 10%;
  border: 3px solid #2E86BB;
  color: white;
  font-size: 20px;
  text-align: center;
  position: relative
}
</style>
<template>
  <div id= "village">      
    <label class="ressource" for="OR">OR</label>    
    <label class="ressource" for = "FER">FER</label>
    <label class="ressource" for = "BOIS">BOIS</label>
    <label class="ressource" for="EAU">EAU</label>    
    <label class="ressource" for = "BLE">BLE</label>
    <label class="ressource" for = "PIERRE">PIERRE</label>
    <router-link to="./">
    <button v-on:click ="param" >{{'PARAM'}}</button></router-link>
    <router-link to="./">
    <button v-on:click ="attaque" >{{'ATTAQUE'}}</button></router-link> 
    <router-link to="./">
    <button v-on:click ="defense" >{{'DEFENSE'}}</button></router-link>  
    <router-link to="./">
    <button v-on:click ="batiment" >{{'BATIMENT'}}</button></router-link>  
    <router-link to="./">
    <button v-on:click ="ameliorer" >{{'AMELIORER'}}</button></router-link>       
    
  </div>
</template>




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
</style>
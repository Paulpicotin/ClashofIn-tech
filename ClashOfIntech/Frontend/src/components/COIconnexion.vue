<template>
  <div>
    <h2>{{'Connexion'}}</h2>   
    <label for="COIPseudo">Pseudo</label>
    <input v-model ="CoiPseudo" type ="text" id="COIPseudo"/>
    <label for = "COIPassword">Password</label>
    <input v-model ="COIPassword" type ="text" id="COIPassword"/>
    <button v-on:click="deleteForm"> {{'SE CONNECTER'}}</button>
  </div>
</template>
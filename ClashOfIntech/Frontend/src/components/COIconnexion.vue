<template>
  <div id= "connexion">
    <h1>CLASH OF INTECH</h1>
    <h2>{{'Connexion'}}</h2>   
    <label for="COIPseudo">Pseudo</label>
    <input v-model ="CoiPseudo" type ="text" id="COIPseudo"/>
    <label for = "COIPassword">Password</label>
    <input v-model ="COIPassword" type ="text" id="COIPassword"/>
    <router-link to='/village'>
    <button v-on:click ="nextPage">{{'C OKKKK'}}</button></router-link>    
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
  },
  methods: {
    nextPage(){
      this.$router.push('/village')
    }

  }
}
</script>

<style scoped>
h1{
  margin-left: 45%;
}
h2{
  margin-left: 50%;
}
label,
input {
  display: block;
  margin-bottom: 20px;
  width: 150px;
  margin-left: 50%;
  }
button{
  margin-left: 55%;
}
</style>
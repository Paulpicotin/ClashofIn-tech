<template>
  <div id= "connexion">
    <h1><img src="../assets/presentation.png" alt="icon"/></h1>
    <h2>{{'Connexion'}}</h2>   
    <label for="COIPseudo">Pseudo</label>
    <input v-model ="COIPseudo" type ="text" id="COIPseudo"/>
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
h1 img{
  margin-left: 35%;
  width: 650px;
  height:250px;
}
h2{
  margin-left: 50%;
}
label{
  color: lawngreen;
  display: block;
  margin-bottom: 20px;
  width: 150px;
  margin-left: 50%;
}
input {
  display: block;
  margin-bottom: 20px;
  width: 150px;
  margin-left: 50%;
  }
button{
  margin-left: 55%;
}
#connexion{
  background-image: url(../assets/background.jpg) ;
  background-size: cover;
}
</style>
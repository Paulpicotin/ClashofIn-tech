<template>
  <div id= "connexion">
    <img src="../assets/presentation.png" alt="icon"/>
    <h2>{{'Connexion'}}</h2>   
    <label for="COIPseudo">Pseudo</label>
    <input v-model ="COIPseudo" type ="text" id="COIPseudo"/>
    <label for = "COIPassword">Password</label>
    <input v-model ="COIPassword" type ="text" id="COIPassword"/>
    <router-link to='/village'>
    <button class="connexion" v-on:click ="nextPage" ><img src="../assets/boutonseconnecter.png" alt="panneau"/></button></router-link>     
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
img{
  margin-left: 30%;
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
#connexion{
  background-image: url(../assets/background.jpg) ;
  background-size: 100%;  
}
.connexion{
  flex: 1 1 auto;
  margin-left: 20%;
  border: none; 
  background: none;
}


</style>
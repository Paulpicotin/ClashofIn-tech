<template>

  <div id ="formInscription">
    <h1><img src="../assets/presentation.png" alt="icon"/></h1>
    <h2>{{'Inscription'}}</h2>        
    <label for="COINomInput">Nom</label>
    <input v-model="COINom" type="text" id="COINomInput" />
    <label for="COIPrenom">Prenom</label>
    <input v-model ="COIPrenom" type ="text" id="COIPrenom"/>
    <label for="COIPseudo">Pseudo</label>
    <input v-model ="COIPseudo" type ="text" id="COIPseudo"/>
    <label for = "COIemail">email</label>
    <input v-model ="COIemail" type ="text" id="COIemail"/>  
    <label for = "COIPassword">Password</label>
    <input v-model ="COIPassword" type ="text" id="COIPassword" v-on:input='ecouteur()'/>
    <label for = "COIconfirmation">confirmation</label>
    <input v-model ="COIconfirmation" type ="text" id="COIconfirmation" v-on:input='ecouteur()' />
   
      <button  class="inscrire"  v-on:click="submitForm" >
        <img src="../assets/boutonsinscrire.png" alt="panneau"/>
      </button>
         
    <router-link to="./connexion">
      <button class="connexion" v-on:click ="nextPage" >
        <img src="../assets/boutonseconnecter.png" alt="panneau"/>
      </button>
    </router-link>    
  </div>

</template>

<script>

export default {
 
  name: "FormCOI",
  data() {    
    return {
      COINom: null,     
      COIPrenom : null,
      COIPseudo: null,
      COIPassword: null,
      COIconfirmation : null,
      COIemail : null, 
      verification: false 
    };
    
  },
  props: {
    editMode: Boolean,
    COIlistToEdit: Object
  },
  created() {},
  updated() {
    
  },
 watch: {
    COIlistToEdit: function(currentCOIlistToEdit) {
      this.COINom = currentCOIlistToEdit.nom;      
      this.COIPrenom = currentCOIlistToEdit.prenom;
      this.COIPseudo = currentCOIlistToEdit.pseudo;
      this.COIPassword = currentCOIlistToEdit.password;
      this.COIconfirmation = currentCOIlistToEdit.confirmation;
      this.COIemail = currentCOIlistToEdit.email; 
    }
    
  },
  methods: {
   ecouteur(){
      if (this.COIPassword !==this.COIconfirmation){
        this.verification = false
        console.log(this.verification)        
        throw console.error("le mot de passe n'est pas identique");                
      }else{
        this.verification = true           
      }
    },
    submitForm() {
      
      this.$emit(this.editMode ? "editCOIlist" : "inviteCOIlist" , {
        id: this.COIlistToEdit ? this.COIlistToEdit.id : undefined,
        nom: this.COINom,        
        prenom: this.COIPrenom,
        pseudo: this.COIPseudo,
        password: this.COIPassword,
        confirmation : this.COIconfirmation,
        email : this.COIemail 
               
      });
      

     /* this.COINom = null;      
      this.COIPrenom = null;
      this.COIPseudo = null;
      this.COIPassword= null;
      this.COIconfirmation =null;
      this.COIemail = null;  */

      const requetes = require('../services/requetes.js');
      requetes.createUser(this.COINom,this.COIPrenom, this.COIPseudo,this.COIemail,this.COIPassword);

      

        
      if  (this.verification) {       
        this.$router.push('/village')
      }
      else{
        alert("le mot de passe n'est pas le même")
      }      
    },
   nextPage(){     
     this.$router.push('/connexion')
    },
  }       
};
</script>

<style scoped>
h1 img{
  margin-left: 35%;
  width: 650px;
  height:250px;
}
h1{
  margin:0;
  padding:0;
}
h2{
  margin-left: 55%;
}
label{
  color:lawngreen;
  display: block;
  margin-bottom: 10px;
  width: 150px;
  margin-left: 55%;
}
input {
  display: block;
  margin-bottom: 10px;
  width: 150px;
  margin-left: 55%;
  }
.inscrire{
  margin-left: 35%;
  flex: 1 1 auto;
  border: none; 
  background: none;
}
.connexion{
  flex: 1 1 auto;
  border: none; 
  background: none;
}
#formInscription{
  background-image: url(../assets/background.jpg) ;
  background-size: 100%;  
}

</style>

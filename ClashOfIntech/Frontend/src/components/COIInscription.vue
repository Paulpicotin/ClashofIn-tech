<template>
  <div id ="formInscription">
    <h1>CLASH OF INTECH</h1>
    <h2>{{'Inscription'}}</h2>
    <label for="COINomInput">Nom</label>
    <input v-model="COINom" type="text" id="COINomInput" />
    <label for="COIPrenom">Prenom</label>
    <input v-model ="CoiPremon" type ="text" id="COIPrenom"/>
    <label for="COIPseudo">Pseudo</label>
    <input v-model ="CoiPseudo" type ="text" id="COIPseudo"/>
    <label for = "COIemail">email</label>
    <input v-model ="COIemail" type ="text" id="COIemail"/>  
    <label for = "COIPassword">Password</label>
    <input v-model ="COIPassword" type ="text" id="COIPassword"/>
    <label for = "COIconfirmation">confirmation</label>
    <input v-model ="COIconfirmation" type ="text" id="COIconfirmation"/>
    <router-link to = "./village">
    <button class="inscrire" v-on:click="submitForm">{{'S INSCRIRE'}}</button></router-link>       
    <router-link to="./connexion">
    <button class="connexion" v-on:click ="nextPage" >{{'SE CONNECTER'}}</button></router-link>    
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
      COIemail : null
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
      this.COINom = null;      
      this.COIPrenom = null;
      this.COIPseudo = null;
      this.COIPassword= null;
      this.COIconfirmation =null;
      this.COIemail = null;  

      this.$router.push('/village')       
   },
   nextPage(){ 
     this.$router.push('/connexion')
    }      
  }     
   
      
};
</script>

<style scoped>
h1{
  margin-left: 50%;
}
h2{
  margin-left: 50%;
}
label,
input {
  display: block;
  margin-bottom: 10px;
  width: 150px;
  margin-left: 50%;
  }
.inscrire{
  margin-left: 50%;
  flex: 1 1 auto;
}
.connexion{
  flex: 1 1 auto;
}

</style>

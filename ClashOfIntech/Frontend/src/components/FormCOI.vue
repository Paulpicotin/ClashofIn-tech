<template>
  <div>
    <h2>{{editMode ? 'Edit COIlist' : 'Add COIlist'}}</h2>
    <label for="COINomInput">Nom</label>
    <input v-model="COINom" type="text" id="COINomInput" />
    <label for="COIPrenom">Prenom</label>
    <input v-model ="CoiPremon" type ="text" id="COIPrenom"/>
    <label for="COIPseudo">Pseudo</label>
    <input v-model ="CoiPseudo" type ="text" id="COIPseudo"/>  
    <button v-on:click="submitForm">{{editMode ? 'EDIT' : 'S INSCRIRE'}}</button>
  </div>
</template>

<script>
export default {
  name: "FormCOI",
  data() {
    return {
      COINom: null,     
      COIPrenom : null,
      COIPseudo: null
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
    }
  },
  methods: {
    submitForm() {
      
      this.$emit(this.editMode ? "editCOIlist" : "inviteCOIlist" , {
        id: this.COIlistToEdit ? this.COIlistToEdit.id : undefined,
        nom: this.COINom,        
        prenom: this.COIPrenom,
        pseudo: this.COIPseudo
      });
      this.COINom = null;      
      this.COIPrenom = null;
      this.COIPseudo = null;
    }
  }
};
</script>

<style scoped>
label,
input {
  display: block;
  margin-bottom: 10px;
}
</style>

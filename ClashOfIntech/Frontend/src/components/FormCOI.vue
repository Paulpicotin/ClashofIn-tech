<template>
  <div>
    <h2>{{editMode ? 'Edit COIlist' : 'Add COIlist'}}</h2>
    <label for="COINameInput">Name of the COIlist</label>
    <input v-model="COIName" type="text" id="COINameInput" />
    <label for="COITask">task of the COIlist</label>
    <input v-model ="CoiTask" type ="text" id="COITask"/>  
    <button v-on:click="submitForm">{{editMode ? 'EDIT' : 'INVITE'}}</button>
  </div>
</template>

<script>
export default {
  name: "FormCOI",
  data() {
    return {
      COIName: null,     
      CoiTask : null
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
      this.COIName = currentCOIlistToEdit.fullName;      
      this.COITask = currentCOIlistToEdit.task;
    }
  },
  methods: {
    submitForm() {
      
      this.$emit(this.editMode ? "editCOIlist" : "inviteCOIlist", {
        id: this.COIlistToEdit ? this.COIlistToEdit.id : undefined,
        fullName: this.COIName,        
        task: this.COITask
      });
      this.COIName = null;      
      this.COITask = null;
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

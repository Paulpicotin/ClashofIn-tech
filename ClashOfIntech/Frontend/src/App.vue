<template>
  <div id="app">
    <h1>CLASH OF INTECH</h1>
    <FormCOI v-on:addinscription="addinscription" :editMode="false" />
    <COITable
      :inscriptionCOI="inscriptionCOI"
      v-on:editinscription="infoscoiinscriptionToEdit"
      v-on:deleteinscription="deleteinscription"
    />
    <FormCOI
      v-on:editinscription="editinscription"
      :inscriptiontoEdit="inscriptiontoEdit"
      :editMode="true"
    />
  </div>
</template>

<script>
import FormCOI from "./components/FormCOI.vue";
//import COITable from "./components/COITable.vue";
import {
  getinscription,
  addinscription,  
  //deleteinscription
} from "./services/COIinscription.js";
export default {
  name: "App",
  components: {
    FormCOI,
    //COITable
  },
  data() {
    return {
      inscriptionCOI: [],
      inscriptiontoEdit: null
    };
  },
  async created() {
    const inscriptionCOI = await getinscription();
    this.inscriptionCOI = [...inscriptionCOI];
  },
  methods: {
    randomKey() {
      return Math.random();
    },
    addinscription({ fullName,  tasks }) {
      addinscription({ fullName, tasks })
        .then(resp => resp.json())
        .then(coiinscription => {
          this.inscriptionCOI = [...this.inscriptionCOI, coiinscription];
        })
        .catch(err => {
          console.log(err);
        });
    },
    infosCOIinscriptionToEdit(inscriptionCOI) {
      this.COIinscriptionToEdit = { ...inscriptionCOI };
    },   
    
    /*deleteinscription(id) {
      deleteinscription(id).then(() => {
        const indexOfinscriptionoDelete = this.COIinscription.findIndex(
          coiinscription => coiinscription.id === id
        );
        this.COIinscription.splice(indexOfinscriptionToDelete, 1);
      });
    }
  }*/
}
};

</script>

<style>
#app {
  width: 80%;
  margin: auto;
}
</style>

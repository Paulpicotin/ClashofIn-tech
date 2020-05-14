<template>
  <div id="app">        
    <router-view></router-view>
  </div>
</template>

<script>

//import COITable from "./components/COITable.vue";
import {
  //getinscription,
  addinscription,  
  deleteinscription
} from "./services/COIinscription.js";
export default {
  name: "App",
  components: {
    
  },
  data() {
    return {
      inscriptionCOI: [],
      inscriptiontoEdit: null
    };
  },
  created() {
    //const inscriptionCOI = await getinscription();
   // this.inscriptionCOI = [...inscriptionCOI];
   this.$router.push('inscription')    
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
    
    deleteinscription(id) {
      deleteinscription(id).then(() => {
        const indexOfinscriptionToDelete = this.COITable.findIndex(
          coiinscription => coiinscription.id === id
        );
        this.COITable.splice(indexOfinscriptionToDelete, 1);        
      });
    }
  }
};
//beforeenter

</script>

<style>
#app {
  width: 80%;
  margin: auto;
  margin-left: 0%;
}
</style>





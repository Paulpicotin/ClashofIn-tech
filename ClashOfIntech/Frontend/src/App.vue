<template>
  <div id="app">
    <h1>CLASH OF INTECH</h1>
    <FormCOI v-on:addList="addList" :editMode="false" />
    <COITable
      :ListCOI="ListCOI"
      v-on:editList="infosCOIListToEdit"
      v-on:deleteList="deleteList"
    />
    <FormCOI
      v-on:editList="editList"
      :ListtoEdit="ListtoEdit"
      :editMode="true"
    />
  </div>
</template>

<script>
import FormCOI from "./components/FormCOI.vue";
//import COITable from "./components/COITable.vue";
import {
  getList,
  addList,
  editList,
  //deleteList
} from "./services/COILIST.js";
export default {
  name: "App",
  components: {
    FormCOI,
    COITable
  },
  data() {
    return {
      ListCOI: [],
      ListtoEdit: null
    };
  },
  async created() {
    const ListCOI = await getList();
    this.ListCOI = [...ListCOI];
  },
  methods: {
    randomKey() {
      return Math.random();
    },
    addList({ fullName,  tasks }) {
      addList({ fullName, tasks })
        .then(resp => resp.json())
        .then(coiList => {
          this.ListCOI = [...this.ListCOI, coiList];
        })
        .catch(err => {
          console.log(err);
        });
    },
    infosCOIListToEdit(ListCOI) {
      this.COILISTToEdit = { ...ListCOI };
    },
    editList({ id, fullName,  tasks }) {
      editList(id, { fullName, tasks }).then(() => {
        this.COILIST = this.COILIST.map(coiList => {
          if (coiList.id === id) {
            return {
              id,
              fullName,              
              tasks
            };
          }
          return coiList;
        });
      });
    },
    /*deleteList(id) {
      deleteList(id).then(() => {
        const indexOfListoDelete = this.COILIST.findIndex(
          coiList => coiList.id === id
        );
        this.COILIST.splice(indexOfListToDelete, 1);
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

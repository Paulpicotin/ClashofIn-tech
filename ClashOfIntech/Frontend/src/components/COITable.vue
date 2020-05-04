<template>
  <div>
    <h2>List of COIList</h2>
    <table>
      <thead>
        <tr>
          <th>FullName</th>          
          <th>Tasks</th>
          <th colspan="3">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="COIList in ListCOI" v-bind:key="COIList.id">
          <td>{{ COIName.fullName }}</td>          
          <td>{{ COITask.tasks }}</td>
          <td class="editLabel" v-on:click="editList(COIList)">EDIT</td>
          <td class="deleteLabel" v-on:click="deleteList(COIList.id)">DELETE</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "COITable",
  data() {
    return {};
  },
  props: {
    ListCOI: Array
  },
  created() {},
  methods: {
    deleteList(COIListId) {
      this.$emit("deleteList", COIListId);
    },
    editList(COIList) {
      this.$emit("editList", { ...COIList });
    }
  }
};
</script>


<style scoped>
.deleteLabel {
  text-decoration: underline;
  font-style: italic;
  color: greenyellow;
  cursor: pointer;
}
.editLabel {
  text-decoration: underline;
  font-style: italic;
  color: purple;
  cursor: pointer;
}
</style>
<template>
  <div>
   
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
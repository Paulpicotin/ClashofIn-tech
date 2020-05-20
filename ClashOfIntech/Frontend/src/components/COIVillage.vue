<template>
  <div id= "village">      
    <label class="ressource" for="OR">OR</label>    
    <label class="ressource" for = "FER">FER</label>
    <label class="ressource" for = "BOIS">BOIS</label>
    <label class="ressource" for="EAU">EAU</label>    
    <label class="ressource" for = "BLE">BLE</label>
    <label class="ressource" for = "PIERRE">PIERRE</label>    
    <button class="bouton" v-on:click ="createparam()" >{{'PARAM'}}</button>
    <router-link to = "./village">
    <button class="bouton" v-on:click ="createattaque()" >{{'ATTAQUE'}}</button></router-link> 
    
    <button class="bouton" v-on:click ="createdefense()" >{{'ARMEE'}}</button> 

    <button class="bouton" v-on:click ="createbatiment()" >{{'BATIMENT'}}</button> 

    <button class="bouton" v-on:click ="createameliorer()" >{{'AMELIORER'}}</button>
    <div ref="defense" id="dropdown" v-show= "showdefense" :style="styleDropdown()" >
        <button v-for="defense of defenses" :key="defense.id">{{defense.name}}</button>
  </div>
  </div>
 
</template>
<script>
export default {
  name: "village",
  data() {    
    return {
      showdefense: false,
      lastButtonCliked: null,
      idplayer: 0,
      pseudo: "null",
      defenses:[
        {id: 0,name: 'douve'},
        {id: 1, name: 'tower'}
        
      ]      
    };
  
  },
  methods:{
    createdefense(){
      this.showdefense = !this.showdefense
      this.lastButtonCliked = event.target
    },
        styleDropdown () {
      if (!this.lastButtonClicked) return {}
      const posFinal = this.lastButtonClicked.getBoundingClientRect()
      const dropdown = this.$refs.dropdown
      console.log('dropdown', dropdown)
      console.log('posfinal', posFinal)
      return {
        top: (posFinal.y + posFinal.height) + 'px',
        left: posFinal.x + 'px'
      }
    },
    createameliorer(){

    } ,
    createparam(){

    },
    createattaque(){

    },
    createbatiment(){

    }
  }
}
</script>

<style scoped>
.ressource{
    display: flex;
    flex-direction: column;
    margin-left:120%;
}
input {
    display: block;
    margin-bottom: 10px;
    width: 150px;
    margin-left: 7%;
}

#dropdown {
  position: absolute;
  width: 90px;
  border: 1px solid black;
}
#defense button{
  display: block;
}
.bouton{
  background: #6AB6D8;
  padding: 10px;
  margin-top: 40%;
  margin-left: 10%;
  border: 3px solid #2E86BB;
  color: white;
  font-size: 20px;
  text-align: center;
  position: relative
}
</style>
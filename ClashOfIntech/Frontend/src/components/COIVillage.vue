<template>
  <div id= "village">      
   <p>
    <img class="ressources" src="../assets/ble.png" alt="corn" />
    <img class="ressources" src="../assets/gold.png" alt="gold" />
    <img class="ressources" src="../assets/iron.png" alt="iron" />
    <img class="ressources" src="../assets/stone.png" alt="stone" />
    <img class="ressources" src="../assets/water.png" alt="water" />
    <img class="ressources" src="../assets/wood.png" alt="wood" />
</p> 
  <div id="bouton">
    <button class="boutonparam" v-on:click ="createparam" ><img class="param" src="../assets/param.png" alt="param" /></button>
<router-link to='/attaque'>
    <button class="bouton" v-on:click ="createattaque" ><img class="sword" src="../assets/sword.png" alt="sword" /></button></router-link>  
    
    <button class="bouton" v-on:click ="createdefense" ><img class="armybutton" src="../assets/armybutton.png" alt="armybutton" /></button> 

    <button class="bouton" v-on:click ="createbatiment" ><img class="wall" src="../assets/wall.png" alt="wall" /></button> 

    <button class="bouton" v-on:click ="createameliorer" ><img class="levelup" src="../assets/levelup.png" alt="levelup.png" /></button>
    <div ref="dropdown" id="dropdown" v-show= "showdefense" :style="styleDropdowndefense()" >
      <button v-for="defense of defenses" :key="defense.id">{{defense.name}}</button>
          
  </div>
  <div ref="batiment" id="batiment" v-show= "showbatiment" :style="styleDropdownbatiment()" >
    <button v-for="batiment of batiments" :key="batiment.id">{{batiment.name}}</button>  
    </div>
  </div>
  </div>
 
</template>
<script>
export default {
  name: "village",
  data() {    
    return {
      showdefense: false,
      showbatiment: false,
      lastButtonClicked: null,
      idplayer: 0,
      pseudo: "null",
      defenses:[
        {id: 0,name: 'douve'},
        {id: 1, name: 'tower'},
        {id:2, name:'dongeon'}
        
      ],
      batiments:[
        {id:0, name: 'chateau'},
        {id:1, name: 'ferme'},
        {id:2, name: 'mine de fer'}
      ]      
    };
  
  },
  methods:{    
    lastbuttonclicked(evt){
      this.showdefense = !this.showdefense
      this.lastButtonClicked = evt.target
      console.log(evt.target)
    },
    styleDropdowndefense () {
      if (!this.lastButtonClicked) return {}
      const posFinal = this.lastButtonClicked.getBoundingClientRect()
      const dropdown = this.$refs.dropdown
      console.log('dropdown', dropdown)
      console.log('posfinal', posFinal)
      return {
        top: (posFinal.y - posFinal.height) + 'px',
        left: posFinal.x + 'px'
      }
    },
    createameliorer(){

    },
    createdefense(){

    },
    createparam(){

    },
    createattaque(){
      this.$router.push('/attaque')
    },
    createbatiment(){
      
    },   
    
    styleDropdownbatiment () {
      if (!this.lastButtonClicked)  return {}
      const posFinal = this.lastButtonClicked.getBoundingClientRect()
      const batiment = this.$refs.batiment
      console.log('batiments', batiment)
      console.log('posfinal', posFinal)      
      return {
        top: (posFinal.y - posFinal.height) + 'px',
        left: posFinal.x + 'px'
      }      
    }
  }
}
</script>

<style scoped>

.ressources{
    display: flex;
    flex-direction: column;
    width: 25px;
    height: 25px;
    margin-left:90%;
}
input {
    display: flex;
    margin-bottom: 10px;
    width: 150px;
    margin-left: 7%;
}

#dropdown {
  position: absolute;
  width: 90px;
  border: 1px solid black;
}
#dropdown button{
  display: block;
}
#batiment {
  position: absolute;
  width: 90px;
  border: 1px solid black;
}
#batiment button{
  display: block;
}
#bouton .bouton{
  background: transparent;
  opacity: 1;
  padding: 10px;
  margin-top: 40%;
  margin-left: 10%;
  border: transparent;
  color: transparent;
  font-size: 15px;
  text-align: center;
  position: relative;
}
.boutonparam
{
  opacity: 1;
  border: white; 
  background: white;
  margin-left: 10%;
}

.param, .sword, .armybutton, .wall, .levelup{
  width: 75px;
  height: 75px;
}

</style>
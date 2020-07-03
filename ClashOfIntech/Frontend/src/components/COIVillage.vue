<template>
  <div id="village">
    <body background="../assets/fondvillage.png">      
    <nav class="ressources">
      <img src="../assets/ble.png" alt="corn" />
      <img src="../assets/gold.png" alt="gold" />
      <img src="../assets/iron.png" alt="iron" />
      <img src="../assets/stone.png" alt="stone" />
      <img src="../assets/water.png" alt="water" />
      <img src="../assets/wood.png" alt="wood" />
    </nav> 
    <nav id="bouton">
      <button class="boutonparam" v-on:click="createparam" >
        <img src="../assets/param.png" alt="param" />
      </button>
      <router-link to='/attaque'>
        <button class="bouton" v-on:click="createattaque" >
          <img src="../assets/sword.png" alt="sword" />
        </button>
      </router-link>  
      
      <button class="bouton" v-on:click="updateLastButtonClicked($event, 'defense')">
        <img src="../assets/armybutton.png" alt="armybutton" />
      </button> 

      <button class="bouton" v-on:click="updateLastButtonClicked($event, 'batiment')">
        <img  src="../assets/wall.png" alt="wall" />
      </button> 

      <button class="bouton" v-on:click="createameliorer" >
        <img src="../assets/levelup.png" alt="levelup.png" />
      </button>
      <div id="dropdown" v-show="showdefense" :style="styleDropdown()">
        <button v-for="defense of defenses" :key="defense.id">{{defense.name}}</button>          
      </div>
      <div id="batiment" v-show="showbatiment" :style="styleDropdown()">
        <button v-for="batiment of batiments" :key="batiment.id">{{batiment.name}}</button>  
      </div>
    </nav>
    </body>
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
      soldierNumber: 0,
      defenses:[
        {id: 0,name: 'douve'},
        {id: 1, name: 'tower'},
        {id:2, name:'dongeon'},
        {id:3, name:'soldat'}
        
      ],
      batiments:[
        {id:0, name: 'chateau'},
        {id:1, name: 'ferme'},
        {id:2, name: 'mine de fer'}
      ]      
    };
  
  },
  methods:{    
    updateLastButtonClicked(evt, param){
      if (param == 'defense'){
        this.showdefense = !this.showdefense
      }else if (param =='batiment'){
        this.showbatiment = !this.showbatiment
      }
      this.lastButtonClicked = evt.target
      
    },
    styleDropdown() {
      if (!this.lastButtonClicked) return {}
      const posFinal = this.lastButtonClicked.getBoundingClientRect()      
      return {
        top: (posFinal.y + posFinal.height) - 'px',
        left: posFinal.x + 'px'
      }
    },
    createameliorer(){

    },
    
    createparam(){

    },
    createattaque(){
      this.$router.push('/attaque')
    },

    buiding(){
    },

    soldierCounter(){
      this.soldierNumber ++;
      console.log(this.soldierNumber);
    }
  }
}
</script>

<style scoped>

.ressources img{
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
#bouton{
  position: absolute;
  bottom: 0;
  width:100%;
}
#bouton .bouton{
  background: transparent;
  opacity: 1;
  padding: 10px;    
  margin-left: 10%;
  border: transparent;
  color: transparent;
  font-size: 15px;
  text-align: center;
  position:relative;
}
.boutonparam
{
  opacity: 1;
  border: white; 
  background: white;
  margin-left: 10%;
}

#bouton img{
  width: 75px;
  height: 75px;
}



</style>
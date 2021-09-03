<template>
    <div class="container">
        <h2>Marvel Characters</h2>
        <div class="character-list">
            <div v-for="character in characters" :key="character.id" class="character-card">
                <router-link :to="{ name: 'Character', params: { id: character.id } }" >
                    <div class="title-button">
                        <h3 class="title">{{ character.name }}</h3>
                        <button class="button btn">View</button>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
    export default {
        name: 'Characters',
        
        mounted() {
            this.$store.dispatch('getCharacters')
        },
        computed: {
            ...mapState({ 
                characters: state => state.characters
            })
        },
        methods: {
            
        }
    }
    
</script>

<style lang="css" scoped>
.button {
    cursor: pointer;
    text-align: center;
    padding: 10px 15px;
    width: 50%;
    border-radius:5px;
    border: 1px solid #999999;
    color: #666666;
    margin-bottom: 15px;
}
.container {
    max-width: 1140px;
    margin:0 auto;
}
.character-card {
    background-color: #eeeeee;
    width:210px;
    height:210px;
    border-radius: 10px;
    margin-bottom: 20px;
}
.title-button {
    display: flex;
    justify-content: space-between;
    text-align: center;
    flex-direction: column;
    align-items: center;
    height: 100%;
}
.character-card .title {
    display: flex;
    justify-content: center;
    padding: 5px;
}
.character-card a {
    color: #999999; 
    text-decoration: none;  
}
.character-card a:hover {
    color: #ff0066;
}
.character-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}

/* Media Queries */
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .character-card {
        width: 100%;
    }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {

}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {

}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    
}
</style>
<template>
    <div>
        <div class="flex-container">
            <div class="flex">
                <div v-for="char in character" :key="char.id">
                    <h2>{{char.name}}</h2>    
                    {{char.description}}
                    <br />
                    <img :src="charImageUrl" class="char-img" />
                    {{ pd.name }}
                </div>
            </div>
            <div class="flex2">
                <h3>Also appears in:</h3>
                    <div v-if="series.length">
                        <h4>Series</h4>
                        <div v-for="programme in series" :key="programme.id">
                            {{programme.name}}
                        </div>
                    </div>
                    <div v-if="stories.length">
                        <h4>Stories</h4>
                        <div v-for="story in stories" :key="story.id">
                            {{story.name}}
                        </div> 
                    </div> 
                    <div v-if="events.length">
                        <h4>Events</h4>
                        <div v-for="event in events" :key="event.id">
                            {{event.name}}
                        </div>            
                    </div>
            </div>
        </div>
        <router-link to="/">
            <button type="button" name="button" class="btn-back">Back</button>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
    export default {
        name: 'Character',
        data() {
            return {
                charImageUrl: '',
                charImageSize: 'detail.jpg',
                charStores: [],
                charSeries: [],
                charEvents: [],
                personalData: {
                    name: 'BONZO',
                    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn9gW4RiQbFYtV8YUcZGd-iocJ98Nq9oZ38A&usqp=CAU'
                }
            }
        },
        computed: {
            ...mapState({
                character: state => state.character,
                preUrl: state => state.charImageUrl,
                stories: state => state.charStories,
                series: state => state.charSeries,
                events: state => state.charEvents,
                pd: state => state.personalData
            })
        },
        mounted() {
            console.log('pd:', this.pd)
            
            this.$store.dispatch('getCharacter', this.$route.params.id, this.personalData)
            this.getImage()
            this.setPersonalData()
        },
        methods: {
            getImage() {
                this.charImageUrl = `${this.preUrl}/${this.charImageSize}`
            },
            setPersonalData() {
                this.$store.commit("setPersonal", this.personalData)
            }
        }
    }
</script>

<style lang="css" scoped>
.flex-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.flex {
    width:60%;
}
.flex2 {
    width:40%;
}
.char-img {
    width:auto;
    min-width: 800px;
}
.btn-back {
    width: 200px;
    padding: 15px;
    cursor: pointer;
    font-size: 18px;
    margin-bottom: 20px;
}
@media only screen and (max-width: 600px) {
  .flex-container {
    flex-direction: column;
    align-items: start;
    height: auto;
  }
  .char-img {
      min-width: auto;
      width: 100%;
  }
  .flex {
      width:100%;
  }
  .flex2 {
    width:100%;
  }
}
</style>
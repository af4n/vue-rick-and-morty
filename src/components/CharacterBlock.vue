<template>
  <div class="card">
    <div class="card-img-top">
      <img :src="character.image" :alt="character.name">
    </div>
    <div class="card-body">
      <span class="detailed-info" @click="detailedInfo">
        <b>{{character.name}}</b>
      </span>
      <hr>
      <span>
        {{character.status}} - {{character.species}}
      </span> <br>
      <span>
        Last known location: {{character.location.name}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'character-block',
    props: {
      character: {
        type: Object,
        required: true
      }
    },
    methods: {
      detailedInfo() {
        this.$router.push({name: 'CharacterDetails', params: {id: this.character.id}})
      }
    }
  }

</script>
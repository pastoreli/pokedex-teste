<template>
  <div class="pok-list">
    <div v-for="item in items" :key="item.id" class="pok-list-item border-bottom">
      <div class="pok-list-item-image py-4 px-8">
        <img
          :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`"
          alt="pokemon"
          width="60px"
        />
      </div>
      <div class="pok-list-item-text white--text py-14">{{ item.name }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'pokemon-list',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
@import "./style";
</style>
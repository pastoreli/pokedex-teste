<template>
  <div class="pokedex-app">
    <div class="fill-all position-absolute primary">
      <header class="header-slot"></header>
      <content class="content-slot">
        <router-view />
      </content>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>
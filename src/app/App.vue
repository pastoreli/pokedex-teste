<template>
  <div class="pokedex-app">
    <div class="fill-all position-absolute primary">
      <header class="header-slot">
        <p-header />
      </header>
      <content class="content-slot">
        <router-view />
      </content>
    </div>
  </div>
</template>

<script>
import {
  PHeader
} from '@/components/partials'
export default {
  name: 'app',
  components: {
    PHeader
  }
}
</script>
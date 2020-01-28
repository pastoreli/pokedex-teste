<template>
  <input
    class="p-text-field"
    type="text"
    :placeholder="placeholder"
    :value="value"
    ref="PTextField"
    @input="() => $emit('input', $refs.PTextField.value)"
  />
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">
@import "./style";
</style>

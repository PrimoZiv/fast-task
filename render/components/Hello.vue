<template>
  <h3>{{greet}}</h3>
</template>

<script>
export default {
  data: () => {
    return {
      greet: 'Hello'
    }
  }
}
</script>

<style scoped>
h3 {
  color: pink;
}
</style>


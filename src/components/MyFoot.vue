<template>
    <div>
        {{current}}
    </div>
</template>
<script>
export default {
  data() {
    return {
      current: Date()
    }
  },
  mounted: function() {
    let self = this
    setInterval(() => {
      self.current = Date()
    }, 1000)
  }
}
</script>
<style>

</style>

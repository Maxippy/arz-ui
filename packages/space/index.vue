<template>
  <div class="a-space">
    space
  </div>
</template>

<script lang="ts">
import { useSlots, ref, h, computed } from 'vue'

export default {
  name: 'aSpace',
  props: {
    inline: {
      type: Boolean,
      default: true
    },
    size: {
      type: Array,
      default: [10, 10]
    }
  },
  setup(props) {
    const slots = useSlots()
    const slotList = slots.default!().map(item => {
      return h(
        'div',
        {
          className: 'a-space-item',
          style: 'width: fit-content;'
        },
        item
      )
    })
    const slotLists = ref(slotList)
    const tStyle = computed(() => {
      return `
        display: ${ props.inline ? 'inline-flex': 'flex'};
        gap: ${!props.inline ? props.size[0] : props.size[0] + 'px ' + props.size[1] + 'px'};
        flex-direction: ${ props.inline ? 'inherit' : 'column' };
        align-items: center;
        flex-warp: warp;
        width: 100%;
      `
    })
    return () => [
      h(
        'div',
        {
          className: 'a-space',
          style: tStyle.value
        },
        slotLists.value
      )
    ]
  }
}
</script>

<style lang="scss" scoped>
.a-space {
  display: inline-flex;
}
</style>

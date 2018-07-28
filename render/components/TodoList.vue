<template>
  <div class="todo-list">
    <ul>
      <li v-for="item in list" :key="item.id">
        {{item.content}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [{
        id: 1,
        content: '确认之前代码中的校验是否有使用parseInt或parseFloat等',
        time: Date.now() + 1000 * 60 * 3
      }, {
        id: 2,
        content: '加载楼栋浴室信息时加loading动画， 单校验：优化表单校验，节省劳力',
        time: Date.now() + 1000 * 60 * 5
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-list {
  height: 100%; 
  ul, li {
    list-style: none;
  }
  ul {
    padding: 0;
  }
  li {
    padding: 10px;
    font-size: 14px;
    color: #fff;
    background: #666;
    margin-top: 5px;
    border-radius: 8px;
  }
}
</style>



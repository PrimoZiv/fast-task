<template>
  <div class="app-root">
    <Tabs :value="activeTab" @on-click="changeTab">
      <TabPane name="doing" label="进行中" icon="pinpoint">
        <TodoList></TodoList>
      </TabPane>
      <TabPane name="complete" label="已完成" icon="checkmark-round">
        <TodoList></TodoList>
      </TabPane>
      <span v-on:click="createTodo()" slot="extra"><Icon type="plus"></Icon>新建</span>
    </Tabs>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
export default {
  mounted() {
  },
  data() {
    return {
      activeTab: 'complete'
    }
  },
  methods: {
    changeTab: function(name) {
      this.activeTab = name
      console.log(name);
    },
    createTodo: function() {
      console.log('call create')
    }
  },
  components: {
    TodoList
  }
}
</script>

<style>
.app-root {
  height: 100%;
  padding: 10px;
}
</style>

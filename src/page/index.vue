<template>
    <div id="index">
      <main class="main">
        首页
      </main>
    </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>
#index {
  display: flex;
  flex-flow: column;
  height: 100vh;
  background: url("../assets/images/bg/bg-1.png");
}
.main {
  flex: 1;
  line-height: 100vh;
  color: white;
  font-size: 60px;
  text-align: center;
}
</style>

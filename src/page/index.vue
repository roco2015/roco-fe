<template>
    <div id="index">
      <div class="banner"></div>
      <main class="main">
        <br/>
        <p>who are you?</p>
        <p>怎么进来的?</p>
        <p>主页?</p>
        <p>没做呢</p>
        <p>先用这个凑活吧</p>
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
  position: relative;
  height: 100vh;
  background: url("../assets/images/bg/bg-2.png");
}
#index::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: white;
  opacity: 0.2;
}
.banner {
  width: 1000px;
  height: 400px;
  margin: 0 auto;
  background: url("../assets/images/bg/bg-3.jpg") no-repeat center top / 100% auto;
}
.main {
  width: 1000px;
  margin: 0 auto;
  font-size: 20px;
}
</style>

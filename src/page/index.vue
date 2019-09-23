<template>
    <div id="index">
        <main class="main">
            首页
            <p>首页什么的还没做呢= =</p>
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
        height: 100vh;
        line-height: 100vh;
        background: url("../assets/images/bg/bg-1.png");
    }

    .main {
        display: inline-block;
        width: 100%;
        line-height: 60px;
        color: white;
        font-size: 60px;
        text-align: center;
    }

    .main p {
        margin-top: 60px;
        font-size: 18px;
    }
</style>

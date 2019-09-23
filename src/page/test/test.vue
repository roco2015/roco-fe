<template>
    <div id="test">
        <button class="test-btn">test</button>
    </div>
</template>

<script>
import { of, from, fromEvent, interval, merge, concat } from 'rxjs'
import { map, take, switchAll, retry } from 'rxjs/operators'

export default {
    name: 'test',
    mounted () {
        interval(1000).pipe(
            take(6),
            map(x => {
                if (x === 4) {
                    throw new Error('unlucky number 4')
                } else {
                    return x
                }
            }),
            retry(5) // 重试 5 次
        ).subscribe(x => console.log(x))
    }
}
</script>

<style scoped>

</style>

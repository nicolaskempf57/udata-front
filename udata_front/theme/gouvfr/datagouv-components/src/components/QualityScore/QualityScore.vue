<template>
    <meter class="quality-score" min="0" low="0" :high="high" :max="quality_max_score" :optimum="quality_max_score" :value="score">
        {{score}}/{{quality_max_score}}
    </meter>
</template>

<script setup lang="ts">

defineProps<{
    score: number
}>();

const quality_max_score = 1;
const high = quality_max_score*2/3;
</script>

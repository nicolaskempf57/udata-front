<template>
  {{ datasetId }}
</template>
<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const datasetId = route.params.did;
</script>

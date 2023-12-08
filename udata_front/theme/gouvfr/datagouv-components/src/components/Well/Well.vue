<template>
  <div class="well" :class="classes">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Weight, WellType } from "../../types/ui";

type Props = {
  type?: WellType,
  color?: string,
  weight?: Weight,
}

const props = withDefaults(defineProps<Props>(), {
  type: "primary",
  color: "grey-100",
  weight: "semi-bold",
});

const wellClass = computed(() => `well${props.type === "primary" ? "" : "-" + props.type}-${props.color}`);
const weightClass = computed(() => `fr-text--${props.weight}`);
const classes = computed(() => weightClass.value + " " + wellClass.value);
</script>

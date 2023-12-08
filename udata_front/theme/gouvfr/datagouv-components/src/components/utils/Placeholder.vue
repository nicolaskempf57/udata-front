<!--
---
name: Placeholder
category: 5 - Interactions
---

# Placeholder

A very simple component that takes a `type` (dataset, reuse, post...) and an optional `src`. If `src` is defined, it simply displays the image (and all props passed are passed to the image).
However, if `src` is undefined, it falls back to a placeholder. Don't forget to pass the `alt` prop !

-->

<template>
    <img
      loading="lazy"
      :src="path"
      :alt="alternativeTextForDefinedImageOnly"
      :width="size"
      :height="size"
      v-bind="$attrs"
    />
  </template>
  
  <script setup lang="ts">
  import { computed } from "vue";

  const props = defineProps<{
    type: string,
    src: string,
    alt: string,
    size: number
  }>();

  const placeholderUrl = () => {
    if (!props.src) {
        return props.src;
      } else {
        const images = import.meta.glob('../img/placeholders/*.png');
        const keys = Object.keys(images);
        console.log(keys)
      }
    
  };

  const alternativeTextForDefinedImageOnly = computed(() => props.src ? props.alt : '');
  const path = computed(() => placeholderUrl())
  </script>
  
<script lang="ts" setup>
const sidebar = [
  'sidebar.dashboard',
  'sidebar.history',
  'sidebar.withdrawal',
  'sidebar.disputes',
  'sidebar.profiles',
  'sidebar.payment-details',
  'sidebar.devices',
  'sidebar.finance',
  'sidebar.messages',
]
</script>

<template>
  <ul>
    <li class="capitalize" v-for="i in sidebar" :key="i">
      {{ $t(i) }}
    </li>
  </ul>
</template>

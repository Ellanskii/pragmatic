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
  <div>
    <header clas="bg-default/75 backdrop-blur border-b border-default h-(--ui-header-height) sticky top-0 z-50">
      <div class="w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 h-full">
        <div class="flex items-center justify-end lg:flex-1 gap-1.5">
          <LocaleSelect />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
    <ul>
      <li class="capitalize" v-for="i in sidebar" :key="i">
        {{ $t(i) }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
</script>

<template>
  <UApp>
    <header class="bg-default/75 backdrop-blur border-b-1 border-default sticky top-0 z-50">
      <div class="w-full max-w-(--ui-container) mx-auto py-2 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 h-full">
        <div class="flex items-center justify-end lg:flex-1 gap-1.5">
          <LocaleSelect />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
    <div class="flex min-h-screen">
      <AppSidebar class="py-4 pr-2 border-r-1 border-default min-h-full" />
      <main class="p-4">
        <NuxtPage />
      </main>
    </div>
  </UApp>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const currentLocale = computed(() => locales.value.find(l => locale.value === l.code))
const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value).map(i => ({
    text: i.name,
    href: switchLocalePath(i.code),
  }))
})
</script>

<template>
  <p>{{ currentLocale }}</p>
  <USelect v-model="currentLocale.name" :items="availableLocales" class="w-48" />
  <ul>
    <li v-for="locale in locales" :key="locale.code">
      <a :href="locale.code" class="capitalize">{{ locale.name }}</a>
    </li>
  </ul>
</template>

<style scoped></style>

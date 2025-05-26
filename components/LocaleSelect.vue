<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const { locale, locales } = useI18n()

const switchLocalePath = useSwitchLocalePath()

const currentLocale = computed(() => locales.value.find(l => locale.value === l.code))
const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value).map(i => ({
    icon: `i-circle-flags:${i.code}`,
    label: i.name,
    href: i.code,
  }))
})
</script>

<template>
  <UDropdownMenu :items="availableLocales">
    <UButton variant="ghost" color="neutral" :icon="`i-circle-flags:${locale}`" :content="{ align: 'end' }" />
  </UDropdownMenu>
</template>

<style scoped></style>

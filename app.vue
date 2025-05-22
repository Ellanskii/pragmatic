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
  <div>
    <ul>
      <li v-for="locale in locales" :key="locale.code">
        <a :href="locale.code" class="capitalize">{{ locale.name }}</a>
      </li>
    </ul>

    <ul>
      <li class="capitalize" v-for="i in sidebar" :key="i">
        {{ $t(i) }}
      </li>
    </ul>
  </div>
</template>

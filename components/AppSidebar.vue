<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const localePath = useLocalePath()
const { t } = useI18n()

const items = ref<NavigationMenuItem[]>([
  { label: t('sidebar.links'), type: 'label' },
  { label: t('sidebar.dashboard'), icon: 'i-carbon:dashboard', to: localePath('dashboard') },
  { label: t('sidebar.withdrawal'), icon: 'i-carbon:money', to: localePath('withdrawal') },
  { label: t('sidebar.history'), icon: 'i-carbon:container-image-push-pull', to: localePath('history') },
  { label: t('sidebar.disputes'), icon: 'i-carbon:question-answering', to: localePath('disputes') },
  { label: t('sidebar.profiles'), icon: 'i-carbon:user-profile', to: localePath('profiles') },
  { label: t('sidebar.payment-details'), icon: 'i-carbon:folder-details', to: localePath('payment-details') },
  { label: t('sidebar.devices'), icon: 'i-carbon:devices', to: localePath('devices') },
  { label: t('sidebar.finance'), icon: 'i-carbon:finance', to: localePath('finance') },
  { label: t('sidebar.messages'), icon: 'i-carbon:chat', to: localePath('messages') },
  { label: t('sidebar.finance'), type: 'label' },
])
</script>

<template>
  <div class="flex flex-col gap-2">
    <UNavigationMenu orientation="vertical" :items="items" />
    <SidebarTrust />
  </div>
</template>

<style scoped></style>

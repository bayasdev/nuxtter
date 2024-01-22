<template>
  <nav
    class="flex p-4 justify-between items-center flex-wrap border-b dark:border-primary-900/50"
  >
    <UButton
      to="/"
      icon="i-fe-magic"
      variant="ghost"
      color="black"
      :padded="false"
      class="text-lg font-semibold"
      >Nuxtter</UButton
    >
    <div class="flex items-center gap-1">
      <UButton to="/post" icon="i-fe-feather" size="sm">Nuxttear</UButton>
      <ColorMode />
    </div>
  </nav>
</template>

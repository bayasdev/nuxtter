<template>
  <nav
    class="flex py-4 px-4 lg:px-12 justify-between items-center flex-wrap border-b dark:border-primary-900/50"
  >
    <UButton
      to="/"
      icon="i-fe-commenting"
      variant="ghost"
      color="black"
      :padded="false"
      class="text-lg font-semibold"
      >Nuxtter</UButton
    >
    <div class="flex items-center gap-2">
      <ColorMode />
      <UButton to="/compose" icon="i-fe-feather">Nuxttear</UButton>
    </div>
  </nav>
</template>

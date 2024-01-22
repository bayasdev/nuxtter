<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <div class="px-4 py-6 flex-1 flex flex-col gap-6">
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>

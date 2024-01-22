<template>
  <UCard>
    <div class="flex flex-col gap-2">
      <h3 class="font-medium text-lg">Title</h3>
      <p>Content</p>
      <div class="flex justify-between items-center">
        <div
          class="text-sm flex items-center gap-1 text-gray-600 dark:text-gray-400"
        >
          <UIcon name="i-fe-calendar" class="h-4 w-4" />
          <span>2021-01-01</span>
        </div>
        <div class="flex items-center gap-1">
          <UButton icon="i-fe-heart" variant="ghost" color="black" size="sm">
            Like
          </UButton>
        </div>
      </div>
    </div>
  </UCard>
</template>

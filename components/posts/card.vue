<script setup lang="ts">
import dayjs from 'dayjs';

const props = defineProps<{
  id: string;
  title: string;
  content: string;
  createdAt: string;
}>();

const toast = useToast();

const handleDeletePost = async () => {
  console.log(props.id);
  const { error } = await useFetch(`/api/posts/${props.id}`, {
    method: 'DELETE',
  });

  if (error.value) {
    console.log(error);
    toast.add({
      title: 'Error',
      description: 'Algo salió mal',
      color: 'red',
    });
  } else {
    toast.add({
      title: 'Post eliminado',
      description: 'El post se ha eliminado correctamente',
      color: 'green',
    });
    refreshNuxtData('posts');
  }
};
</script>

<template>
  <UCard>
    <div class="flex flex-col gap-2">
      <h3 class="font-medium text-lg">{{ props.title }}</h3>
      <p>{{ props.content }}</p>
      <div class="flex justify-between flex-wrap gap-1 items-center">
        <div
          class="text-sm flex items-center gap-1 text-gray-600 dark:text-gray-400"
        >
          <UIcon name="i-fe-calendar" class="h-4 w-4" />
          <span>{{ dayjs(props.createdAt).format('DD/MM/YYYY HH:mm') }}</span>
        </div>
        <div class="flex items-center gap-1">
          <UButton
            icon="i-fe-comment-o"
            color="gray"
            variant="ghost"
            size="sm"
          />
          <UButton icon="i-fe-loop" color="gray" variant="ghost" size="sm" />
          <UButton icon="i-fe-heart-o" color="gray" variant="ghost" size="sm" />
          <UButton
            :to="`/posts/${id}/edit`"
            icon="i-fe-edit"
            color="gray"
            variant="ghost"
            size="sm"
          >
            Editar
          </UButton>
          <UButton
            icon="i-fe-trash"
            color="red"
            variant="ghost"
            size="sm"
            @click="handleDeletePost"
          >
            Eliminar
          </UButton>
        </div>
      </div>
    </div>
  </UCard>
</template>

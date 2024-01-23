<script setup lang="ts">
import { PostValidator } from '@/lib/validators/post';
import type { PostValidatorType } from '@/lib/validators/post';
import type { FormSubmitEvent } from '#ui/types';
import type { z } from 'zod';

useSeoMeta({
  title: 'Crear post',
});

const router = useRouter();
const toast = useToast();

const state = reactive({
  title: undefined,
  content: undefined,
});

async function onSubmit(event: FormSubmitEvent<PostValidatorType>) {
  const { error } = await useFetch('/api/posts', {
    method: 'POST',
    body: JSON.stringify(event.data),
  });

  if (error.value) {
    if (error.value.statusCode === 422) {
      error.value.data?.issues?.forEach((issue: z.ZodIssue) => {
        toast.add({
          title: 'Error',
          description: issue.message,
          color: 'red',
        });
      });
    } else {
      toast.add({
        title: 'Error',
        description: 'Algo salió mal',
        color: 'red',
      });
    }
  } else {
    toast.add({
      title: 'Post creado',
      description: 'El post se ha creado correctamente',
      color: 'green',
    });
    router.push('/');
  }
}
</script>

<template>
  <h1 class="text-xl lg:text-2xl font-bold tracking-tight">Crear post</h1>
  <UForm
    :schema="PostValidator"
    :state="state"
    class="space-y-4"
    @submit="onSubmit"
  >
    <UFormGroup label="Título" name="title">
      <UInput v-model="state.title" />
    </UFormGroup>

    <UFormGroup label="Contenido (máx. 140 caracteres)" name="content">
      <UTextarea v-model="state.content" />
    </UFormGroup>

    <UButton type="submit" icon="i-fe-paper-plane">Enviar</UButton>
  </UForm>
</template>

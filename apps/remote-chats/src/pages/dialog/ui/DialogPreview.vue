<template>
  <div class="dialog-preview">
    <img
      :alt="props.username"
      :src="props.avatar"
      :title="props.username"
      class="dialog-preview__avatar"
      loading="lazy"
    />

    <div>
      <div>
        {{ props.username }}
      </div>

      <div>
        {{ props.message }}
      </div>

      <div>
        <div>
          {{ props.date }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ChatType } from '#entities/chats'

type Props = ChatType

const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
.dialog-preview {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__avatar {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
  }
}
</style>

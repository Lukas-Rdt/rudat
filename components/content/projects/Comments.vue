<template>
  <div class="w-full h-full p-5 overflow-auto">
    <div class="w-full text-center text-3xl">{{ $t("commentTitle") }}</div>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label class="block" for="commentName">{{ $t("commentName") }}</label>
        <input
          id="commentName"
          type="text"
          v-model="form.name"
          class="p-2 w-full h-10 rounded-lg focus:outline-none focus:bg-slate-200" />
      </div>
      <div class="mb-4">
        <label class="block" for="commentText">{{
          $t("commentMessage")
        }}</label>
        <textarea
          id="commentText"
          v-model="form.comment"
          :class="{ 'bg-red-500': errors.comment }"
          class="p-2 w-full h-32 resize-none overflow-auto rounded-lg focus:outline-none focus:bg-slate-200"></textarea>
        <p v-if="errors.comment" class="text-red-600">{{ errors.comment }}</p>
      </div>
      <div class="w-full flex justify-start">
        <button type="submit" class="bg-blue-500 text-white p-2 rounded-lg">
          {{ $t("commentSend") }}
        </button>
        <p v-if="showSuccessMessage" class="ml-5 text-green-600 mt-2">
          {{ $t("commentSuccess") }}
        </p>
      </div>
    </form>
    <div v-if="filteredContacts.length" class="mt-8">
      <h2 class="text-xl font-bold mb-4">{{ $t("commentSavedTitle") }}</h2>
      <ul>
        <li
          v-for="contact in filteredContacts"
          :key="contact.id"
          class="mb-4 p-4 border">
          <p v-if="contact.name">
            <strong>{{ contact.name }}</strong>
          </p>
          <p>{{ contact.comment }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  props: {
    projectName: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const form = ref({
      name: "",
      comment: "",
    });

    const errors = ref({
      comment: null,
    });

    const contacts = ref([]);

    const showSuccessMessage = ref(false);

    const validateForm = () => {
      let valid = true;

      if (!form.value.comment || form.value.comment.length < 1) {
        errors.value.comment = "Du kannst kein leeres Kommentar hinterlassen";
        valid = false;
      } else {
        errors.value.comment = null;
      }

      return valid;
    };

    const handleSubmit = async () => {
      if (!validateForm()) {
        return;
      }

      const response = await fetch("/api/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...form.value, project: props.projectName }),
      });

      if (response.ok) {
        form.value.name = "";
        form.value.comment = "";
        showSuccessMessage.value = true;

        // Hide success message after 3 seconds
        setTimeout(() => {
          showSuccessMessage.value = false;
        }, 3000);

        await fetchContacts();
      }
    };

    const fetchContacts = async () => {
      const response = await fetch("/api/comment");
      contacts.value = await response.json();
    };

    const filteredContacts = computed(() =>
      contacts.value.filter((contact) => contact.project === props.projectName)
    );

    onMounted(() => {
      fetchContacts();
    });

    return {
      form,
      errors,
      contacts,
      handleSubmit,
      showSuccessMessage,
      filteredContacts,
    };
  },
};
</script>

<style scoped>
main {
  @apply text-dark dark:text-light shadow-lg flex justify-center;
}

main :deep(h1) {
  @apply text-indigo-700 dark:text-l-red text-4xl w-full text-center my-10;
}

main :deep(.contentContainer) {
  @apply my-10 p-10 shadow-md;
}

main :deep(.imageContainer) {
  @apply w-[250px];
}

main :deep(.textContainerCenter) {
  @apply mx-5;
}

main :deep(.component-container) {
  @apply flex justify-center m-10;
}

main :deep(.tmpContainer) {
  @apply h-[500px];
}
</style>

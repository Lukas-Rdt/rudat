<template>
  <div class="w-full h-full p-5 overflow-auto">
    <div class="w-full text-center text-3xl">{{ $t("contactTitle") }}</div>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label class="block">{{ $t("contactMail") }}</label>
        <input
          type="email"
          v-model="form.email"
          :class="{ 'bg-red-500': errors.email }"
          class="p-2 w-full h-10 rounded-lg focus:outline-none focus:bg-slate-200" />
        <p v-if="errors.email" class="text-red-600">{{ errors.email }}</p>
      </div>
      <div class="mb-4">
        <label class="block">{{ $t("contactSubject") }}</label>
        <input
          type="text"
          v-model="form.subject"
          class="p-2 w-full h-10 rounded-lg focus:outline-none focus:bg-slate-200" />
      </div>
      <div class="mb-4">
        <label class="block">{{ $t("contactMessage") }}</label>
        <textarea
          v-model="form.message"
          :class="{ 'bg-red-500': errors.message }"
          class="p-2 w-full h-32 resize-none overflow-auto rounded-lg focus:outline-none focus:bg-slate-200"></textarea>
        <p v-if="errors.message" class="text-red-600">{{ errors.message }}</p>
      </div>
      <div class="w-full flex justify-start">
        <button type="submit" class="bg-blue-500 text-white p-2 rounded-lg">
          {{ $t("contactSend") }}
        </button>
        <p v-if="showSuccessMessage" class="ml-5 text-green-600 mt-2">
          {{ $t("contactSuccess") }}
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const form = ref({
      email: "",
      subject: "",
      message: "",
    });

    const errors = ref({
      email: null,
      message: null,
    });

    const contacts = ref([]);

    const showSuccessMessage = ref(false);

    const validateForm = () => {
      let valid = true;

      if (!form.value.email || !/\S+@\S+\.\S+/.test(form.value.email)) {
        errors.value.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
        valid = false;
      } else {
        errors.value.email = null;
      }

      if (!form.value.message || form.value.message.length < 30) {
        errors.value.message =
          "Die Nachricht muss mindestens 30 Zeichen lang sein.";
        valid = false;
      } else {
        errors.value.message = null;
      }

      return valid;
    };

    const handleSubmit = async () => {
      if (!validateForm()) {
        return;
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form.value),
      });

      if (response.ok) {
        form.value.email = "";
        form.value.subject = "";
        form.value.message = "";
        showSuccessMessage.value = true;

        // Hide success message after 3 seconds
        setTimeout(() => {
          showSuccessMessage.value = false;
        }, 3000);

        await fetchContacts();
      }
    };

    const fetchContacts = async () => {
      const response = await fetch("/api/contact");
      contacts.value = await response.json();
    };

    onMounted(() => {
      fetchContacts();
    });

    return {
      form,
      errors,
      contacts,
      handleSubmit,
      showSuccessMessage,
    };
  },
};
</script>

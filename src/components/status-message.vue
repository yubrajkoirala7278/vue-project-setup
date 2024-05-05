<script setup>
import { computed } from "vue";
import { useAppStore } from "@/store/app";

const store = useAppStore();

const color = computed(() => store.snackbar.color);
const text = computed(() => store.snackbar.text);
const shown = computed(() => store.snackbar.shown);
const timeout = computed(() => store.snackbar.timeout);
const id = computed(() => store.snackbar.id);
const subText = computed(() => store.snackbar.subText);
</script>

<template>
  <v-snackbar
    :color="color"
    v-model="shown"
    :timeout="timeout"
    :id="'snackbar--' + id"
  >
    {{ text }}
    <br />
    {{ subText }}
    <template v-slot:actions>
      <v-btn
        color="white"
        @click="store.snackbar.toggleMessage(false)"
        icon="mdi-close-circle"
      >
      </v-btn>
    </template>
  </v-snackbar>
</template>

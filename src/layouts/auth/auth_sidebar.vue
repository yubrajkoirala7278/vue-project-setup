<script setup>
const sidebarRoutes = [
  {
    title: "Dasboard",
    value: "dashboard",
    pathName: "admin-home",
    icon: "mdi-view-dashboard",
  },
  {
    title: "Products",
    value: "products",
    pathName: "admin-products",
    icon: "mdi-folder",
  },
];
</script>

<template>
  <v-list density="compact" nav>
    <v-list-item
      v-for="route in sidebarRoutes"
      :key="route.title"
      :prepend-icon="route.icon"
      :title="route.title"
      :value="route.value"
      :to="{ name: route.pathName }"
    ></v-list-item>
  </v-list>
</template>

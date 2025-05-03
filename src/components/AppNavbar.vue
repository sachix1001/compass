<template>
  <v-app-bar app color="primary" flat height="64">
    <template v-slot:prepend>
      <img
        src="@/assets/logo-white.svg"
        alt="Qubena Logo"
        class="logo me-2 ms-4"
        height="40"
      />
      <v-btn class="mx-4" variant="outlined" color="white" size="large">
        アカウント管理
      </v-btn>
    </template>

    <v-spacer />

    <v-btn>
      <div class="d-flex align-center user-info">
        <font-awesome-icon
          :icon="['fas', 'circle-user']"
          class="me-2"
          size="2x"
        />
        <span class="user-name">因幡深雪</span>
      </div>
    </v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
</script>

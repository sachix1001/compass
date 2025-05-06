<template>
  <v-app-bar
    app
    class="px-sm-4 px-md-6 px-2"
    color="primary"
    flat
    height="56"
  >
    <template #prepend>
      <img
        alt="Qubena Logo"
        class="logo d-none d-sm-flex"
        height="40"
        src="@/assets/logo-white.svg"
      >
      <div
        class="ml-sm-4 ml-md-8 px-sm-4 ml-2 h-8 content-center whitespace-nowrap rounded-md border !border-white px-2 text-sm font-bold sm:text-base"
      >
        アカウント管理
      </div>
    </template>

    <v-spacer />

    <!-- TODO route to user profile -->
    <div class="d-flex align-center">
      <a class="flex items-center gap-x-2 text-sm font-bold sm:text-base">
        <v-icon
          class="d-none d-sm-flex"
          icon="mdi-account-circle"
          size="large"
        />
        <span class="d-none d-sm-flex">因幡深雪</span>
        <v-icon
          class="d-flex d-sm-none"
          icon="mdi-account-circle"
          size="small"
        />
      </a>
    </div>
  </v-app-bar>
</template>

<script setup lang="ts"></script>

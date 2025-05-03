<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card flat>
          <v-card-title class="d-flex align-center bg-primary">
            <font-awesome-icon :icon="['fas', 'chalkboard-teacher']" class="text-white mr-2" />
            <span class="text-h5 text-white">先生</span>
            <v-spacer></v-spacer>
            <v-responsive class="mx-auto" max-width="344">
              <v-text-field
                v-model="search"
                label="名前、ログインIDで検索"
                append-inner-icon="mdi-magnify"
                variant="outlined"
                hide-details
                single-line
                density="compact"
                style="max-width: 336px"
                bg-color="secondary"
                class="bg-secondary"
              ></v-text-field>
            </v-responsive>
          </v-card-title>

          <v-data-table
            :headers="headers"
            :items="facilitators"
            :search="search"
            :loading="isLoading"
            class="mt-4"
            :items-per-page="20"
          >
            <template v-slot:no-data>
              <div class="text-center py-4">
                該当するデータはありません
              </div>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <!-- Loading Overlay -->
    <v-overlay
      v-model="isLoading"
      class="align-center justify-center"
      persistent
    >
      <v-progress-circular
        color="primary"
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>

    <ErrorDialog
      v-model="showError"
      @retry="refetch"
    />
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useFacilitators } from '@/composables/useFacilitators';
import ErrorDialog from '@/components/ErrorDialog.vue';

const search = ref('');

const headers = [
  { title: '名前', key: 'name', sortable: true },
  { title: 'ログインID', key: 'loginId', sortable: true },
];

const { facilitators, isLoading, isError, refetch } = useFacilitators();

// Error dialog visibility
const showError = computed(() => isError.value);
</script>

<style scoped>
.v-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

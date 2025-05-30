<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card flat>
          <v-card-title
            class="d-flex align-center pe-2"
            prepend-icon="mdi-check"
          >
            <v-icon icon="fa:fas fa-chalkboard-teacher" size="26" />
            <span class="text-h5 font-weight-bold ms-4">先生</span>

            <v-spacer />

            <v-responsive class="mx-auto" max-width="344">
              <v-text-field
                v-model="search"
                append-inner-icon="mdi-magnify"
                density="compact"
                hide-details
                label="名前、ログインIDで検索"
                single-line
                style="max-width: 336px"
                variant="outlined"
              />
            </v-responsive>
          </v-card-title>

          <v-data-table
            v-model:page="page"
            :cell-props="{ class: 'text-xs !h-12' }"
            class="rounded-0 mt-4"
            :headers="headers"
            :items="facilitators"
            :items-per-page="20"
            :loading="isLoading"
            :row-props="
              (data) => ({
                class: ['border', data.index % 2 === 1 && 'bg-gray-100'],
              })
            "
            :search="debouncedSearch"
            sort-asc-icon="mdi-chevron-up"
            sort-desc-icon="mdi-chevron-down"
          >
            <template #no-data>
              <div class="py-4 text-center">該当するデータはありません</div>
            </template>

            <template #bottom>
              <div class="d-flex justify-space-between align-center mt-4">
                <div class="text-left text-xs">
                  {{ facilitators.length }}件中 {{ (page - 1) * 20 + 1 }}〜{{
                    Math.min(page * 20, facilitators.length)
                  }}件を表示
                </div>
                <div class="text-center">
                  <v-pagination
                    v-model="page"
                    active-color="primary"
                    :length="totalPages"
                    next-icon="mdi-chevron-right"
                    prev-icon="mdi-chevron-left"
                    size="24"
                    :total-visible="7"
                    variant="flat"
                  />
                </div>
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
      <v-progress-circular color="primary" indeterminate size="64" />
    </v-overlay>

    <ErrorDialog v-model="showError" @retry="refetch" />
  </v-container>
</template>

<script setup lang="ts">
  import { computed, ref, watch } from 'vue';
  import { useFacilitators } from '@/composables/useFacilitators';
  import ErrorDialog from '@/components/ErrorDialog.vue';
  import { useDebounceFn } from '@vueuse/core';

  const search = ref('');
  const debouncedSearch = ref('');
  const page = ref(1);

  const debouncedUpdateSearch = useDebounceFn((value: string) => {
    debouncedSearch.value = value;
  }, 300);

  watch(search, newValue => {
    debouncedUpdateSearch(newValue);
  });

  const headers = [
    {
      title: '名前',
      key: 'name',
      sortable: true,
      headerProps: { class: 'bg-primary !h-8 border-r text-xs' },
    },
    {
      title: 'ログインID',
      key: 'loginId',
      sortable: true,
      headerProps: { class: 'bg-secondary !h-8 border-r !font-bold text-xs' },
    },
  ];

  const { facilitators, isLoading, isError, refetch } = useFacilitators();

  const totalPages = computed(() => {
    return Math.ceil(facilitators.value.length / 20);
  });

  // Error dialog visibility
  const showError = computed(() => isError.value);
</script>

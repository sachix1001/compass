import { useQuery } from '@tanstack/vue-query';
import { getFacilitators } from '@/api/services/facilitators';
import type { Facilitator } from '@/types';
import { computed } from 'vue';

export function useFacilitators() {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['facilitators'],
    queryFn: getFacilitators,
    retry: false,
  });

  const facilitators = computed(() => data.value?.data ?? []);

  return {
    facilitators,
    isLoading,
    isError,
    refetch,
  };
}

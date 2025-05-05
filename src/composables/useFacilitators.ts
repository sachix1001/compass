import { useQuery } from '@tanstack/vue-query';
import { getFacilitators } from '@/api/services/facilitators';
import { computed } from 'vue';

export function useFacilitators () {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['facilitators'],
    queryFn: getFacilitators,
    retry: false,
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });

  const facilitators = computed(() => data.value?.data ?? []);

  return {
    facilitators,
    isLoading,
    isError,
    refetch,
  };
}

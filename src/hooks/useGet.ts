import { UseQueryResult, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import config from '../../config.json';

export const useGet = <T>(endPoint: string): UseQueryResult<T> => {
  return useQuery<T>({
    queryKey: [endPoint],
    queryFn: async () => {
      const { data } = await axios.get<T>(`${config.apiBaseUrl}/${endPoint}`);
      return data;
    },
  });
};

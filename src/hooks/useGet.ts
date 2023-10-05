import { UseQueryResult, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import config from '../../config.json';

export const useGet = <T>(endPoint: string): UseQueryResult<T[] | T> => {
  return useQuery<T[] | T>({
    queryKey: ['games'],
    queryFn: async () => {
      const { data } = await axios.get<T[] | T>(
        `${config.apiBaseUrl}/${endPoint}`
      );
      return data;
    },
  });
};

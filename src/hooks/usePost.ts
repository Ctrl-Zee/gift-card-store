import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import config from '../../config.json';

export const usePost = <TSend, TReveive>(endPoint: string, send: TSend) => {
  return useMutation<TReveive>({
    mutationFn: async () => {
      const { data } = await axios.post<TReveive>(
        `${config.apiBaseUrl}/${endPoint}`,
        send
      );
      return data;
    },
  });
};

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { EXPERIENCE_API, EXPERIENCE_CAPABILITY_API, EXPERIENCE_COUNT_API } from '@/apis/experience/experience';
import {
  ExperienceCapabilityParams,
  ExperienceCapabilityResponse,
  ExperienceCountResponse,
  ExperienceParams,
  ExperienceResponse,
} from '@/apis/experience/types/experience';
import { EXPERIENCE_CAPABILITY_KEY, EXPERIENCE_KEY } from '@/shared/constants/querykeys';

export const useGetExperiences = (
  params?: ExperienceParams['get'],
  options?: UseQueryOptions<ExperienceResponse, AxiosError>
) =>
  useQuery<ExperienceResponse, AxiosError>(
    EXPERIENCE_KEY.list([{ ...params }]),
    () => EXPERIENCE_API.get({ ...params }),
    {
      ...options,
    }
  );

export const useGetExperienceCount = (options?: UseQueryOptions<ExperienceCountResponse['get'], AxiosError>) =>
  useQuery<ExperienceCountResponse['get'], AxiosError>(EXPERIENCE_KEY.count(), () => EXPERIENCE_COUNT_API.get(), {
    ...options,
  });

export const useGetExperienceCapabilities = (
  params?: ExperienceCapabilityParams['get'],
  options?: UseQueryOptions<ExperienceCapabilityResponse['get'], AxiosError>
) =>
  useQuery<ExperienceCapabilityResponse['get'], AxiosError>(
    EXPERIENCE_CAPABILITY_KEY.lists(),
    () => EXPERIENCE_CAPABILITY_API.get({ ...params }),
    {
      ...options,
    }
  );

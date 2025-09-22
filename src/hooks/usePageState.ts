"use client";

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface PageState {
  isLoading: boolean;
  error: string | null;
  retryCount: number;
}

interface UsePageStateOptions {
  initialLoading?: boolean;
  maxRetries?: number;
  retryDelay?: number;
}

export const usePageState = (options: UsePageStateOptions = {}) => {
  const {
    initialLoading = true,
    maxRetries = 3,
    retryDelay = 1000
  } = options;

  const [state, setState] = useState<PageState>({
    isLoading: initialLoading,
    error: null,
    retryCount: 0
  });

  const router = useRouter();

  const setLoading = useCallback((loading: boolean) => {
    setState(prev => ({ ...prev, isLoading: loading }));
  }, []);

  const setError = useCallback((error: string | null) => {
    setState(prev => ({ ...prev, error, isLoading: false }));
  }, []);

  const clearError = useCallback(() => {
    setState(prev => ({ ...prev, error: null }));
  }, []);

  const retry = useCallback(async (retryFn?: () => Promise<void>) => {
    if (state.retryCount >= maxRetries) {
      setError('Maximum retry attempts reached. Please try again later.');
      return;
    }

    setState(prev => ({
      ...prev,
      isLoading: true,
      error: null,
      retryCount: prev.retryCount + 1
    }));

    try {
      if (retryFn) {
        await retryFn();
      }
      setState(prev => ({ ...prev, isLoading: false, retryCount: 0 }));
    } catch (error) {
      setTimeout(() => {
        setError(error instanceof Error ? error.message : 'An error occurred');
      }, retryDelay);
    }
  }, [state.retryCount, maxRetries, retryDelay, setError]);

  const goHome = useCallback(() => {
    router.push('/');
  }, [router]);

  const reset = useCallback(() => {
    setState({
      isLoading: initialLoading,
      error: null,
      retryCount: 0
    });
  }, [initialLoading]);

  // Simulate page loading
  useEffect(() => {
    if (initialLoading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500); // Simulate 1.5s loading time

      return () => clearTimeout(timer);
    }
  }, [initialLoading, setLoading]);

  return {
    ...state,
    setLoading,
    setError,
    clearError,
    retry,
    goHome,
    reset
  };
};


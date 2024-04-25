import { create } from 'zustand'
import { getForecast7Days } from '../api/utils'

interface State {
  weather: any
  fetchQuestions: (city: string) => Promise<void>
}

export const useQuestions = create<State>((set, get) => {
  return {
    weather: [],
    city: '',
    fetchQuestions: async (city : string) => {
      const response = await getForecast7Days(city)
      set({ weather: response })
    },
  }
})

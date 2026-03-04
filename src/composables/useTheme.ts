import { ref } from 'vue'

const theme = ref<'light' | 'dark'>('light')

export function useTheme() {
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    if (theme.value === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }

  // 初始化
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme.value = 'dark'
    document.documentElement.classList.add('dark')
  }

  return { theme, toggleTheme }
}

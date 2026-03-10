const theme = ref<'light' | 'dark'>('light')

export function useTheme() {

  const setTheme = (mode: 'light' | 'dark') => {
    theme.value = mode
    localStorage.setItem('theme', mode)

    if (mode === 'dark')
      document.documentElement.classList.add('dark')
    else
      document.documentElement.classList.remove('dark')
  }

  const toggleTheme = () => {
    setTheme(theme.value === 'light' ? 'dark' : 'light')
  }

  // 初始化
  const savedTheme = localStorage.getItem('theme')

  if (savedTheme === 'dark' || savedTheme === 'light') {
    setTheme(savedTheme)
  } else if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    setTheme('dark')
  }

  return { theme, toggleTheme }
}

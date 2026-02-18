export const useConverter = () => {
  const ConvertObjetcToArray = (obj: Record<string, any>) => {
    if (!obj || typeof obj !== 'object') return []

    return Object.entries(obj).map(([key, value]) => ({
      key,
      value
    }))
  }

  const ConvertIcon = (icon?: string) => {
    if (!icon) return ''   // or return a default icon like 'i-lucide-circle'

    const iconTemplate = "i"
    const parts = icon.split(":")

    if (parts.length !== 2) return `${iconTemplate}-${icon}`

    const [library, name] = parts
    return `${iconTemplate}-${library}-${name}`
  }


  return {
    ConvertIcon,
    ConvertObjetcToArray
  }
}
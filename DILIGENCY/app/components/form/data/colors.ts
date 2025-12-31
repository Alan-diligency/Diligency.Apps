export const GetBorderClass = (color: string) => {
    switch (color) {
        case 'red': return 'border-red-500 focus:border-red-600'
        case 'yellow': return 'border-yellow-500 focus:border-yellow-600'
        case 'green': return 'border-green-500 focus:border-green-600'
        case 'blue': return 'border-blue-500 focus:border-blue-600'
        case 'purple': return 'border-purple-500 focus:border-purple-600'
        case 'pink': return 'border-pink-500 focus:border-pink-600'
        case 'orange': return 'border-orange-500 focus:border-orange-600'
        case 'white': return 'border-white focus:border-gray-200'
        case 'gray': return 'border-gray-500 focus:border-gray-600'
        case 'primary': return 'border-primary focus:border-primary'
        case 'secondary': return 'border-secondary focus:border-secondary'
        default: return 'border-red-500 focus:border-red-600'
    }
}

export const GetTextClass = (color: string) => {
    switch (color) {
        case 'red': return 'text-red-500'
        case 'yellow': return 'text-yellow-500'
        case 'green': return 'text-green-500'
        case 'blue': return 'text-blue-500'
        case 'purple': return 'text-purple-500'
        case 'pink': return 'text-pink-500'
        case 'orange': return 'text-orange-500'
        case 'white': return 'text-white'
        case 'gray': return 'text-gray-500'
        case 'primary': return 'text-primary'
        case 'secondary': return 'text-secondary'
        default: return 'text-red-500'
    }
}

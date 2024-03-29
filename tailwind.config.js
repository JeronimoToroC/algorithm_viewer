/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react'
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', 'sans-serif'], // para contenido
                heading: ['Poppins', 'sans-serif'], // para títulos y encabezados
            },
        },
    },
    darkMode: 'class',
    plugins: [
        nextui({
            prefix: 'nextui',
            addCommonColors: true,
            defaultTheme: 'dark',
            defaultExtendTheme: 'dark',
            layout: {},
            themes: {
                'blue-dark': {
                    extend: 'dark', // Hereda los valores predeterminados del tema oscuro
                    colors: {
                        background: '#00030f',
                        foreground: '#ffffff',
                        primary: {
                            50: '#161b2f',
                            100: '#16203a',
                            200: '#163075',
                            300: '#1640b0',
                            400: '#1655eb',
                            500: '#2967ff',
                            600: '#4d7eff',
                            700: '#7094ff',
                            800: '#93aaff',
                            900: '#b6c0ff',
                            DEFAULT: '#2967ff',
                            foreground: '#ffffff',
                        },
                        focus: '#7094ff',
                    },
                    layout: {
                        disabledOpacity: '0.3', // Opacidad para elementos deshabilitados
                        radius: {
                            small: '4px', // Radio pequeño para bordes
                            medium: '6px', // Radio medio
                            large: '8px', // Radio grande
                        },
                        borderWidth: {
                            small: '1px', // Ancho de borde pequeño
                            medium: '2px', // Ancho de borde medio
                            large: '3px', // Ancho de borde grande
                        },
                    },
                },
                // ... otros temas
                'purple-dark': {
                    extend: 'dark', // <- inherit default values from dark theme
                    colors: {
                        background: '#0D001A',
                        foreground: '#ffffff',
                        primary: {
                            50: '#3B096C',
                            100: '#520F83',
                            200: '#7318A2',
                            300: '#9823C2',
                            400: '#c031e2',
                            500: '#DD62ED',
                            600: '#F182F6',
                            700: '#FCADF9',
                            800: '#FDD5F9',
                            900: '#fee8fc',
                            DEFAULT: '#DD62ED',
                            foreground: '#ffffff',
                        },
                        focus: '#F182F6',
                    },
                    layout: {
                        disabledOpacity: '0.3',
                        radius: {
                            small: '4px',
                            medium: '6px',
                            large: '8px',
                        },
                        borderWidth: {
                            small: '1px',
                            medium: '2px',
                            large: '3px',
                        },
                    },
                },
            },
            // ... otros temas
        }),
    ],
}

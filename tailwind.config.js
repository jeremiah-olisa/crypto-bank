const animate = require('tailwindcss-animate')
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import("tailwindcss").Config} */
module.exports = {
    darkMode: ['class'],
    safelist: ['dark'],
    prefix: '',

    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                    dark: '#0e73be',
                    light: '#249aef31',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                    dark: '#c1d2e5',
                    light: '#f1f6f95b',
                },
                info: {
                    DEFAULT: '#585fdd',
                    dark: '#525b93',
                    light: 'rgba(140, 142, 255, 0.24)',
                },
                success: {
                    dark: 'var(--success-dark)',
                    DEFAULT: 'var(--success)',
                    light: 'var(--success-light)',
                },
                warning: {
                    dark: '#d88619',
                    DEFAULT: '#f49d1a',
                    light: 'rgba(255, 198, 117, 0.26)',
                },
                error: {
                    dark: '#d62b64',
                    DEFAULT: '#ff316f',
                    light: '#ff316f33',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                hover: 'var(--hover)',
                active: 'var(--active)',
            },
            borderRadius: {
                xl: 'calc(var(--radius) + 4px)',
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 },
                },
                'collapsible-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-collapsible-content-height)' },
                },
                'collapsible-up': {
                    from: { height: 'var(--radix-collapsible-content-height)' },
                    to: { height: 0 },
                },
            },

            animation: {
                'accordion-up': 'accordion-up 0.2s ease-out',
                'accordion-down': 'accordion-down 0.2s ease-out',
                'collapsible-up': 'collapsible-up 0.2s ease-in-out',
                'collapsible-down': 'collapsible-down 0.2s ease-in-out',
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
        fontFamily: {
            sans: ['"Inter", sans-serif'],
        },
    },
    plugins: [animate, forms, typography],
}

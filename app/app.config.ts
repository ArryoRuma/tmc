export default defineAppConfig({
  ui: {
    colors: {
      primary: 'brand',
      secondary: 'blue',
      neutral: 'stone',
      brand: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#da7422',
        400: '#da7422',
        500: '#235789',
        600: '#1e4d75',
        700: '#1a4061',
        800: '#15334d',
        900: '#0f2639',
        950: '#081926'
      }
    },
    header: {
      slots: {
        root: 'bg-default/75 backdrop-blur border-b border-default h-(--ui-header-height) sticky top-0 z-50',
        container: 'flex items-center justify-between gap-3 h-full',
        left: 'lg:flex-1 flex items-center gap-1.5',
        center: 'hidden lg:flex',
        right: 'flex items-center justify-end lg:flex-1 gap-1.5',
        title: 'shrink-0 font-bold text-xl text-highlighted flex items-center gap-1.5',
        toggle: 'lg:hidden',
        content: 'lg:hidden',
        overlay: 'lg:hidden',
        header: 'px-4 sm:px-6 h-(--ui-header-height) shrink-0 flex items-center justify-between gap-3',
        body: 'p-4 sm:p-6 overflow-y-auto'
      },
      variants: {
        toggleSide: {
          left: {
            toggle: '-ms-1.5'
          },
          right: {
            toggle: '-me-1.5'
          }
        }
      }
    },
    pageHero: {
      slots: {
        root: 'relative isolate',
        container: 'flex flex-col lg:grid pt-24 sm:pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-20 gap-16 sm:gap-y-24',
        wrapper: '',
        header: '',
        headline: 'mb-4',
        title: 'text-5xl sm:text-7xl text-pretty tracking-tight font-bold text-highlighted',
        description: 'text-lg sm:text-xl/8 text-muted',
        body: 'mt-10',
        footer: 'mt-10',
        links: 'flex flex-wrap gap-x-6 gap-y-3'
      },
      variants: {
        orientation: {
          horizontal: {
            container: 'lg:grid-cols-2 lg:items-center sm:items-center',
            description: 'text-pretty'
          },
          vertical: {
            container: '',
            headline: 'justify-center',
            wrapper: 'text-center',
            description: 'text-balance',
            links: 'justify-center'
          }
        },
        reverse: {
          true: {
            wrapper: 'order-last'
          }
        },
        headline: {
          true: {
            headline: 'font-semibold text-primary flex items-center gap-1.5'
          }
        },
        title: {
          true: {
            description: 'mt-6'
          }
        }
      }
    },
    pageSection: {
      slots: {
        root: 'py-0',
        container: '',
        wrapper: '',
        header: 'mb-8 sm:mb-12',
        headline: 'mb-4 text xl flex items-center',
        title: 'text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-highlighted',
        description: 'text-lg sm:text-xl/8 text-muted mt-6',
        body: 'mt-8',
        footer: 'mt-8'
      }
    }
  }
})

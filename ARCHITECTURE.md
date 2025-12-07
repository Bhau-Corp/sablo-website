# Project Architecture

## Folder Structure

```
src/
├── App.jsx                    # Clean app entry
├── main.jsx                   # Entry point
├── index.css                  # Global styles
│
├── components/                # Reusable components
│   ├── ui/                   # Basic UI primitives
│   │   ├── Button.jsx        # Reusable button component
│   │   └── Card.jsx          # Reusable card component
│   ├── layout/               # Layout components
│   │   ├── Layout.jsx        # Main container wrapper
│   │   ├── Container.jsx     # Responsive container
│   │   └── Section.jsx      # Section wrapper with padding
│   └── Navbar.jsx            # Navigation component
│
├── sections/                 # Page sections
│   └── HeroSection.jsx       # Hero section
│
├── constants/                # Shared data & config
│   ├── navigation.js         # Nav links data
│   ├── features.js           # Feature icons/content
│   └── theme.js             # Design tokens
│
├── utils/                    # Helper functions
│   ├── animations.js         # Framer Motion variants
│   └── helpers.js           # General utilities
│
├── hooks/                    # Custom hooks
│   └── useParallax.js        # Parallax hook (available for future use)
│
└── assets/                   # Images and static files
    └── (organized by type)
```

## Key Components

### Layout Components
- **Layout.jsx**: Main app wrapper with container styling
- **Container.jsx**: Responsive container with max-width constraints
- **Section.jsx**: Standardized section wrapper with consistent padding

### UI Components
- **Button.jsx**: Reusable button with variants (primary, gradient) and sizes
- **Card.jsx**: Reusable card component with hover effects

### Constants
- **navigation.js**: Centralized nav links and helper functions
- **features.js**: Feature data with icons and content
- **theme.js**: Design tokens (colors, screens, spacing)

### Utils
- **animations.js**: Reusable Framer Motion animation variants
- **helpers.js**: Utility functions (slugify, formatNumber, etc.)

## Benefits

✅ **Scalability** - Easy to add new sections/components
✅ **Maintainability** - Centralized constants, reusable components
✅ **Consistency** - Standardized components ensure design consistency
✅ **Cleaner Code** - Separation of concerns
✅ **Easier Testing** - Isolated, reusable components
✅ **Better DX** - Clear structure, easy navigation

## Usage Examples

### Adding a New Section
```jsx
import Section from '../components/layout/Section';

const NewSection = () => {
  return (
    <Section>
      {/* Your content */}
    </Section>
  );
};
```

### Using Button Component
```jsx
import Button from '../components/ui/Button';

<Button variant="primary" size="md">Click Me</Button>
<Button variant="gradient" size="sm">Explore</Button>
```

### Using Animation Variants
```jsx
import { fadeInUp, viewportOnce } from '../utils/animations';

<motion.div
  initial={fadeInUp.initial}
  whileInView={fadeInUp.animate}
  viewport={viewportOnce}
  transition={fadeInUp.transition}
>
  Content
</motion.div>
```

### Accessing Constants
```jsx
import { navLinks } from '../constants/navigation';
import { features } from '../constants/features';
import { theme } from '../constants/theme';
```


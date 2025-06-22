# Portfolio Project Rules and Guidelines

## Table of Contents
- [Code Style & Organization](#code-style--organization)
- [Styling Rules](#styling-rules)
- [Performance Guidelines](#performance-guidelines)
- [State Management](#state-management)
- [Project Structure](#project-structure)
- [Git & Version Control](#git--version-control)
- [Content Management](#content-management)
- [Security](#security)
- [SEO & Accessibility](#seo--accessibility)
- [Testing & Quality Assurance](#testing--quality-assurance)
- [Build & Deployment](#build--deployment)
- [Documentation](#documentation)

## Code Style & Organization

### TypeScript & Components
- Enable and maintain TypeScript strict mode
- All new files must be `.tsx` or `.ts`
- Maximum component file size: 250 lines
- Split larger components into smaller, focused components

### Naming Conventions
- **Components:** PascalCase (e.g., `ProjectCard.tsx`, `Navigation.tsx`)
- **Hooks:** camelCase with 'use' prefix (e.g., `useAnimation.ts`, `useProjects.ts`)
- **Utilities:** camelCase (e.g., `formatDate.ts`, `validateInput.ts`)
- **Interfaces:** PascalCase with 'I' prefix (e.g., `IProject`, `INavItem`)
- **Types:** PascalCase (e.g., `ProjectType`, `NavigationType`)

### Component Structure
```typescript
// Standard component structure
import { dependencies } from 'package'
import { components } from './components'
import styles from './ComponentName.module.scss'

interface IComponentProps {
  // props definition
}

export const ComponentName: React.FC<IComponentProps> = ({ props }) => {
  // hooks
  // state
  // effects
  // handlers
  // render
}
```

## Styling Rules

### SASS/CSS Guidelines
- Use SASS modules exclusively (`ComponentName.module.scss`)
- Follow BEM naming convention for classes
- Utilize CSS variables for consistent theming

### CSS Variables
```css
:root {
  /* Colors */
  --background: rgb(17, 17, 17);
  --text: rgb(235, 236, 243);
  --brand: rgb(10, 255, 157);

  /* Typography */
  --text-xs: 1.6rem;
  --text-sm: 1.8rem;
  --text-md: 2.2rem;
  --text-lg: 3.6rem;
  --text-xl: 5.6rem;
  --text-2xl: 9.6rem;
}
```

### Responsive Design
- Mobile-first approach
- Standard breakpoints:
  ```scss
  $breakpoints: (
    'mobile': 320px,
    'tablet': 768px,
    'desktop': 1024px,
    'wide': 1440px
  );
  ```

## Performance Guidelines

### Image Optimization
- Use Next.js Image component
- Optimize images before import
- Implement lazy loading for below-fold content

### Animation Performance
- Use transform/opacity for animations
- Implement will-change for heavy animations
- Reduce animations on mobile devices
- Use requestAnimationFrame for custom animations

## State Management

### Recoil Guidelines
- Create atoms for global state
- Keep selectors pure and focused
- Document state dependencies

### Local State
- Prefer useState for component-level state
- Use useReducer for complex state logic
- Implement proper loading states

## Project Structure
```
/components
  /common          # Reusable components
    Button.tsx
    Card.tsx
  /layout          # Layout components
    Header.tsx
    Footer.tsx
  /home            # Home page components
  /projects        # Project components
  /animations      # Animation components

/hooks             # Custom React hooks
/interfaces        # TypeScript interfaces
/utils            # Utility functions
/styles           # Global styles
/public           # Static assets
/pages            # Next.js pages
/services         # API integrations
```

## Git & Version Control

### Commit Messages
Follow conventional commits:
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Formatting
- refactor: Code restructuring
- test: Testing
- chore: Maintenance

### Branch Strategy
- main: Production branch
- develop: Development branch
- feature/*: Feature branches
- fix/*: Bug fix branches
- release/*: Release branches

## Content Management

### Portfolio Content
- Update projects regularly
- Maintain consistent formatting
- Optimize all media assets
- Regular content audits

### Asset Management
- Compress images
- Use WebP format when possible
- Maintain organized asset structure
- Document asset sources

## Security

### Best Practices
- Regular dependency updates
- Environment variable protection
- API route validation
- Input sanitization
- Implement security headers

### Environment Variables
- Never commit .env files
- Document required variables
- Use proper validation

## SEO & Accessibility

### SEO Guidelines
- Implement meta tags
- Use semantic HTML
- Optimize for search engines
- Maintain sitemap.xml

### Accessibility
- WCAG 2.1 compliance
- Proper heading hierarchy
- Meaningful alt texts
- Keyboard navigation
- Screen reader support

## Testing & Quality Assurance

### Testing Requirements
- Unit tests for utilities
- Component testing
- Integration testing
- E2E testing for critical paths
- Maintain 80% coverage

### Quality Checks
- Regular Lighthouse audits
- Cross-browser testing
- Responsive design testing
- Performance monitoring

## Build & Deployment

### Build Process
- Environment configuration
- Build optimization
- Asset optimization
- Error handling

### Deployment
- Automated deployments
- Staging environment
- Production checks
- Backup procedures

## Documentation

### Required Documentation
- README.md updates
- Code comments
- API documentation
- Setup guides
- Changelog maintenance

### Comment Style
```typescript
/**
 * Component/function description
 * @param {Type} paramName - Parameter description
 * @returns {Type} Return value description
 */
```

## Enforcement
- Regular code reviews
- Automated linting
- CI/CD checks
- Team reviews 
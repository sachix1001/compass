# Compass Teacher Management System

A Vue.js-based teacher management system that displays a list of teachers with search, sort, and pagination capabilities.

![compass-app](https://github.com/user-attachments/assets/9b1e8dc3-6e55-48ce-bf0d-659711e82b67)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🏗️ Architecture & Technology Stack

### Core Technologies

- **Vue 3**: Chosen for its composition API and strong ecosystem
- **TypeScript**: For type safety and better developer experience
- **Vite**: For fast development and optimized builds
- **Vuetify**: For UI components, especially the data table feature
- **Tailwind CSS**: For custom styling and responsive design
- **TanStack Query**: For efficient data fetching and caching

### Why Vue.js?

- Strong experience with Vue.js over the last 15 months
- Composition API provides better code organization and reusability
- Excellent TypeScript integration
- Familiar with Vue's ecosystem and best practices

### Why Vuetify + Tailwind?

- **Vuetify**:
  - Provides robust data table component with built-in sorting and pagination
  - Matches Compass's existing MUI usage pattern
  - Offers consistent UI components and theming
- **Tailwind**:
  - Allows for custom styling while maintaining consistency
  - Provides utility-first approach for rapid development
  - Complements Vuetify's component-based approach

## 📋 Implementation Details

### Project Structure

```
src/
├── api/              # API service layer
├── components/       # Reusable Vue components
├── composables/      # Custom hooks for business logic
├── plugins/          # Vue plugins configuration
└── types/           # TypeScript type definitions
```

### Key Features

1. **Teacher List Display**

   - Responsive data table with sortable columns
   - 20 items per page pagination
   - Search functionality for name and login ID

2. **Error Handling**

   - Network error detection
   - Retry mechanism
   - User-friendly error dialog

3. **Loading States**
   - Central loading overlay
   - Skeleton loading for better UX

### Performance Considerations

- Memoized computed properties
- Efficient data caching with TanStack Query
- Optimized re-renders using Vue's reactivity system

## 🎯 Areas for Improvement

1. **Accessibility**

   - ARIA labels need to be added
   - Keyboard navigation could be improved
   - Color contrast needs verification

2. **Responsibility Separation**

   - Some components could be further decomposed
   - Business logic could be more centralized

3. **Navigation**

   - Account button functionality not implemented
   - Hardcoded user name in navbar
   - Home page redirection needs proper implementation

4. **Design System & Styling**
   - Design tokens need to be properly implemented for consistent theming
   - Current use of Tailwind's `!important` to override Vuetify styles is not ideal
   - Need to establish better styling hierarchy between Vuetify and Tailwind
   - Consider implementing a proper design token system for colors, spacing, and typography
   - "No results" message styling needs to match design specifications
   - Pagination component styling differs from design requirements

### Future Enhancements

1. **Accessibility**

   - Implement full ARIA support
   - Add keyboard navigation
   - Ensure WCAG compliance

2. **Code Organization**

   - Further component decomposition (if current components get more complex)
   - Implement proper routing

3. **Features**

   - Add user authentication
   - Implement account management
   - Add proper home page

4. **Design System**
   - Implement a proper design token system
   - Create a more maintainable styling approach between Vuetify and Tailwind
   - Establish clear styling hierarchy and override patterns
   - Document design decisions and styling guidelines

## 📝 Notes

### Assumptions

- API returns all data at once (no server-side pagination)
- Single search term for both name and login ID
- Home page will be implemented separately
- Account management will be added later

### Known Issues

- Account button in navbar is non-functional
- User name is hardcoded
- Accessibility needs improvement
- Some components could be further decomposed

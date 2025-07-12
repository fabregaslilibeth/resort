# Smooth Scroll Features for Lalaguna Villas Resort

This project now includes advanced smooth scroll effects inspired by the [smooth-scroll repository](https://github.com/olivierlarose/smooth-scroll). Here's what has been implemented:

## 🎯 Features Implemented

### 1. **Smooth Scrolling Navigation**
- **SmoothScrollLink Component**: Custom link component that provides smooth scrolling to sections
- **Hover Effects**: Underline animations on navigation links
- **Dynamic Navbar**: Changes appearance when scrolling (adds shadow and opacity)

### 2. **Scroll-Triggered Animations**
- **ScrollTrigger Component**: Animates elements when they come into view
- **Multiple Animation Types**:
  - `slide-bottom`: Elements slide up from bottom
  - `slide-left`: Elements slide in from left
  - `slide-right`: Elements slide in from right
  - `scale`: Elements scale in with fade
  - `fade`: Simple fade in effect

### 3. **Custom Hooks**
- **useSmoothScroll**: Manages smooth scrolling functionality and scroll state
- **useScrollTrigger**: Handles intersection observer for scroll-triggered animations
- **useParallax**: Provides parallax scrolling effects (ready for future use)

### 4. **Enhanced CSS Animations**
- **Smooth Scroll Behavior**: Native CSS smooth scrolling
- **Custom Keyframes**: Multiple animation types (fadeInUp, slideInFromBottom, etc.)
- **Staggered Animations**: Delayed animations for grid elements
- **Hover Effects**: Scale and transition effects on interactive elements

## 🚀 How to Use

### SmoothScrollLink Component
```tsx
import { SmoothScrollLink } from './components/SmoothScrollLink';

<SmoothScrollLink href="#section-id" className="your-classes">
  Link Text
</SmoothScrollLink>
```

### ScrollTrigger Component
```tsx
import { ScrollTrigger } from './components/ScrollTrigger';

<ScrollTrigger animationType="slide-bottom" delay={0.2}>
  <div>Your content here</div>
</ScrollTrigger>
```

### Available Animation Types
- `fade` - Simple fade in
- `slide-left` - Slide from left
- `slide-right` - Slide from right
- `scale` - Scale in with fade
- `slide-bottom` - Slide from bottom
- `slide-top` - Slide from top

## 🎨 CSS Classes Available

### Animation Classes
- `.animate-fade-in-up`
- `.animate-fade-in-left`
- `.animate-fade-in-right`
- `.animate-slide-in-bottom`
- `.animate-slide-in-top`
- `.animate-scale-in`

### Scroll Trigger Classes
- `.scroll-trigger` - Base scroll trigger
- `.scroll-trigger-left` - Left slide animation
- `.scroll-trigger-right` - Right slide animation
- `.scroll-trigger-scale` - Scale animation

### Utility Classes
- `.smooth-scroll-link` - Navigation link styling
- `.hover-scale` - Hover scale effect
- `.transition-all` - Smooth transitions
- `.stagger-1` through `.stagger-8` - Animation delays

## 🔧 Customization

### Adjusting Animation Timing
```css
/* In globals.css */
.scroll-trigger {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Changing Scroll Offset
```tsx
<SmoothScrollLink href="#section" offset={100}>
  Link with custom offset
</SmoothScrollLink>
```

### Custom Threshold for Scroll Triggers
```tsx
<ScrollTrigger threshold={0.3} delay={0.5}>
  Content with custom threshold and delay
</ScrollTrigger>
```

## 📱 Responsive Behavior

- All animations work seamlessly on mobile and desktop
- Touch scrolling is smooth and responsive
- Animations are optimized for performance
- Reduced motion support for accessibility

## 🎯 Performance Features

- **Intersection Observer**: Efficient scroll detection
- **CSS Transforms**: Hardware-accelerated animations
- **Debounced Scroll Events**: Prevents excessive re-renders
- **Optimized Transitions**: Smooth 60fps animations

## 🔮 Future Enhancements

The foundation is set for additional features:
- Parallax scrolling effects
- Scroll-based progress indicators
- Advanced easing functions
- Scroll-triggered sound effects
- Custom scroll paths

## 🛠️ Technical Implementation

### Dependencies
- React 19
- TypeScript
- Tailwind CSS
- Custom hooks for state management

### File Structure
```
src/app/
├── components/
│   ├── SmoothScrollLink.tsx
│   └── ScrollTrigger.tsx
├── hooks/
│   └── useSmoothScroll.ts
├── globals.css
└── page.tsx
```

The smooth scroll implementation provides a premium, engaging user experience that matches the luxury feel of the Lalaguna Villas resort website while maintaining excellent performance and accessibility. 
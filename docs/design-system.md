# 🎨 HVZMobilindo Design System

> Version 1.0  
> Last Updated: June 2026

---

# Philosophy

HVZMobilindo is designed around three principles:

- **Trust**
- **Premium**
- **Simplicity**

The interface should feel modern, elegant, and professional without looking overly luxurious or difficult to use.

Every component should follow the same visual language and interaction pattern.

---

# Design Principles

## 1. Consistency

Every page should use the same spacing, typography, border radius, shadows, and interaction.

Users should never feel that two pages were built by different developers.

---

## 2. Reusable Components

Avoid duplicated Tailwind classes.

Instead of writing:

```tsx
<div className="max-w-7xl mx-auto px-6">
```

use

```tsx
<Container>
```

Instead of

```tsx
<h2 className="text-4xl font-semibold">
```

use

```tsx
<SectionTitle />
```

---

## 3. Composition over Duplication

Pages should be assembled from reusable components.

Example:

```
HomePage

├── Hero
├── Services
├── FeaturedCars
└── About
```

Each feature is composed of smaller UI components.

---

# Design Layers

```
Foundation

Container
Section
Typography

↓

Surface

Button
GlassCard
Badge
Divider

↓

Feature Components

Hero
ServiceCard
CarCard
About

↓

Pages

Home
Inventory
Car Detail
Dashboard
```

---

# Layout Rules

## Container

Responsible for:

- Maximum width
- Horizontal padding
- Content alignment

Never add custom width directly inside pages.

Always use:

```tsx
<Container>
```

---

## Section

Responsible for:

- Vertical spacing
- Layout separation
- Scroll rhythm

Default spacing:

```
py-24
```

---

# Typography

Typography should remain consistent throughout the application.

| Component | Usage |
|-----------|-------|
| Heading | Titles |
| Text | Paragraph |
| SectionTitle | Section Heading |
| Label | Form Labels |

---

# Component Rules

## Buttons

Only use the shared Button component.

Allowed variants:

- default
- gold
- glass
- outlineGold
- destructive
- ghost

Never create page-specific button styles.

---

## Cards

Cards should use:

- rounded corners
- soft shadow
- subtle hover
- premium spacing

Cards should never look flat.

---

## Icons

Primary icon library:

- Lucide React

Avoid mixing icon libraries unless necessary.

---

# Spacing Scale

Use Tailwind spacing consistently.

Preferred values:

```
2
4
6
8
12
16
20
24
```

Avoid random spacing values.

---

# Border Radius

Default

```
rounded-xl
```

Large cards

```
rounded-2xl
```

Never mix multiple radius styles in one section.

---

# Shadows

Small

```
shadow-md
```

Card Hover

```
shadow-xl
```

Glass Card

```
shadow-black/20
```

Shadows should feel soft.

---

# Hover Rules

Cards

```
hover:scale-[1.02]
hover:-translate-y-1
transition-all
duration-300
```

Buttons

```
hover:opacity-90
transition
```

Images

```
group-hover:scale-110
transition-transform
duration-500
```

---

# Animation Rules

Animations should be subtle.

Preferred duration:

```
300ms
500ms
700ms
```

Avoid flashy animations.

Motion should support the content,
not distract from it.

---

# Responsive Strategy

Desktop First

Breakpoints:

```
sm
md
lg
xl
2xl
```

Components should scale naturally.

---

# Accessibility

Every interactive element must have:

- Hover state
- Focus state
- Keyboard support

Buttons should always remain readable.

---

# Code Standards

Prefer composition.

Avoid duplicated JSX.

Prefer reusable components.

Keep components focused on one responsibility.

---

# Goal

The design system exists to ensure that every page in HVZMobilindo feels like it belongs to the same product.

Consistency is more important than visual complexity.
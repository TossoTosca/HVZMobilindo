# 🎨 HVZMobilindo Color Guide

> Version 1.0

---

# Brand Personality

HVZMobilindo is not a luxury dealership.

It is a trusted premium used-car marketplace.

The visual language should communicate:

- Trust
- Professionalism
- Modern Technology
- Premium Quality

Not extravagance.

---

# Brand Palette

## Primary

Premium Gold

```
#D4AF37
```

Usage:

- Primary Button
- Active Navigation
- Icons
- Accent Elements

---

## Background

Dark

```
#09090B
```

Main application background.

---

## Surface

```
#18181B
```

Cards

Glass Components

Panels

---

## Border

```
rgba(255,255,255,0.08)
```

Should remain subtle.

---

## Text

Primary

```
#FFFFFF
```

Secondary

```
#A1A1AA
```

Muted

```
#71717A
```

---

# Semantic Colors

Success

```
#22C55E
```

Warning

```
#F59E0B
```

Danger

```
#EF4444
```

Info

```
#3B82F6
```

---

# Gradient Usage

Allowed

```
Primary

Gold → Transparent
```

```
Background

Black → Zinc
```

Avoid rainbow gradients.

---

# Glow

Primary Glow

```
Gold / 20%
```

Blur:

```
160px
```

Animation:

Slow Pulse

---

# Glass Effect

Background

```
rgba(255,255,255,0.04)
```

Border

```
rgba(255,255,255,0.08)
```

Backdrop

```
blur(16px)
```

---

# Hover States

Primary Button

Normal

Gold

↓

Hover

Gold 90%

Cards

Normal

↓

Scale 1.02

↓

Soft Shadow

Images

↓

Scale 1.10

---

# Section Background

Every section should remain transparent.

Never create different background colors
for different sections.

The GlobalBackground component is responsible
for the application's visual atmosphere.

---

# Global Background

Contains:

- Top Left Glow
- Bottom Right Glow
- Ambient Gradient
- Future Particle Layer

Every page shares the same background.

---

# Color Usage Ratio

Recommended

```
80%

Dark Background
```

```
15%

Surface
```

```
5%

Gold Accent
```

Gold should attract attention,
not dominate the interface.

---

# Things to Avoid

❌ Bright yellow

❌ Pure orange

❌ Heavy gradients

❌ Neon colors

❌ Multiple accent colors

❌ Strong borders

❌ Harsh shadows

---

# Future Theme Support

The design system should support:

- Dark Theme (Default)
- Light Theme (Future)

All colors should reference CSS variables.

Never hardcode colors inside components.

---

# Final Vision

When users open HVZMobilindo, the first impression should be:

> Clean.

> Premium.

> Trustworthy.

The interface should never compete with the cars.

The cars are the hero of the product.
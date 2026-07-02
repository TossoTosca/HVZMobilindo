# Struktur Folder Versi Final Untuk src/

```text
docs/
├──folder-structure.md
├──last_prompt.md
├──project_state.md
├──roadmap.md
│
public/
│
src/
│
├── assets/
│   ├── icons/
│   ├── images/
│   │   ├── hero/
│   │   ├── cars/
│   │   ├── showroom/
│   │   └── logo/
│   └── fonts/
│
├── components/
│   │
│   ├── layout/
│   │   ├── Container/
│   │   │   └── Container.tsx
│   │   │
│   │   ├── Section/
│   │   │   └── Section.tsx
│   │   │
│   │   ├── Navbar/
│   │   │   ├── Navbar.tsx
│   │   │   ├── DesktopMenu.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── Logo.tsx
│   │   │
│   │   ├── Footer/
│   │   │   └── Footer.tsx
│   │   │
│   │   ├── GlobalBackground/
│   │   │   └── GlobalBackground.tsx
│   │   │
│   │   └── PageLayout/
│   │       └── PageLayout.tsx
│   │
│   └── ui/
│       │
│       ├── button/
│       │   └── Button.tsx
│       │
│       ├── badge/
│       │   └── Badge.tsx
│       │
│       ├── card/
│       │   ├── GlassCard.tsx
│       │   └── Card.tsx
│       │
│       ├── typography/
│       │   ├── Heading.tsx
│       │   ├── Text.tsx
│       │   └── Label.tsx
│       │
│       ├── section/
│       │   └── SectionTitle.tsx
│       │
│       ├── divider/
│       │   └── Divider.tsx
│       │
│       ├── input/
│       ├── dialog/
│       ├── modal/
│       ├── table/
│       └── carousel/
│
├── features/
│   │
│   ├── home/
│   │   │
│   │   ├── Hero/
│   │   │   ├── Hero.tsx
│   │   │   ├── HeroContent.tsx
│   │   │   ├── HeroImage.tsx
│   │   │   └── HeroStats.tsx
│   │   │
│   │   ├── Services/
│   │   │   ├── Services.tsx
│   │   │   └── ServiceCard.tsx
│   │   │
│   │   ├── FeaturedCars/
│   │   │   ├── FeaturedCars.tsx
│   │   │   ├── CarCard.tsx
│   │   │   └── CarGrid.tsx
│   │   │
│   │   └── About/
│   │       └── About.tsx
│   │
│   ├── inventory/
│   │   ├── Inventory.tsx
│   │   ├── FilterSidebar.tsx
│   │   ├── SearchBar.tsx
│   │   └── InventoryGrid.tsx
│   │
│   ├── car-detail/
│   │   ├── Gallery.tsx
│   │   ├── Specification.tsx
│   │   ├── PriceCard.tsx
│   │   └── ContactSeller.tsx
│   │
│   ├── sell-car/
│   │   ├── SellCar.tsx
│   │   └── SellForm.tsx
│   │
│   └── dashboard/
│       ├── Dashboard.tsx
│       ├── widgets/
│       ├── inventory/
│       └── sales/
│
├── data/
│   ├── cars.json
│   ├── brands.json
│   ├── company.json
│   ├── services.json
│   └── testimonials.json
│
├── hooks/
│   ├── useScroll.ts
│   ├── useNavbar.ts
│   ├── useWindowSize.ts
│   └── useTheme.ts
│
├── lib/
│   ├── utils.ts
│   └── constants.ts
│
├── pages/
│   ├── HomePage.tsx
│   ├── InventoryPage.tsx
│   ├── CarDetailPage.tsx
│   ├── SellCarPage.tsx
│   └── DashboardPage.tsx
│
├── router/
│   └── index.tsx
│
├── types/
│   ├── car.ts
│   ├── company.ts
│   ├── service.ts
│   └── common.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

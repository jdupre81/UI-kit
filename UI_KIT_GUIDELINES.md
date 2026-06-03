# Swiss Data Science Center UI Design Kit

Complete design system for building modern data science and research applications. Based on datascience.ch visual identity.

**Version:** 2.1  
**Last Updated:** June 1, 2026  
**Tech Stack:** React + Tailwind CSS  
**Fonts:** Space Grotesk + Switzer

---

## Table of Contents

- [1. About this UI Design Kit](#1-about-this-ui-design-kit)
- [2. Design Tokens – Core Components](#2-design-tokens--core-components)
  - [Colors](#colors)
  - [Typography](#typography)
  - [Content Hierarchy & Labels](#content-hierarchy--labels)
  - [Logo](#logo)
  - [Dot Pattern Background](#dot-pattern-background)
- [3. Basic Components](#3-basic-components)
  - [Buttons](#buttons)
  - [Form Inputs](#form-inputs)
  - [Checkboxes](#checkboxes)
  - [Toggle Switches](#toggle-switches)
  - [Progress Indicators](#progress-indicators)
- [4. Page Layout Possibilities](#4-page-layout-possibilities)

---

## 1. About this UI Design Kit

This comprehensive UI Design Kit serves as a guide for SDSC developers building online platforms. It provides a complete design system based on the Swiss Data Science Center's visual identity, ensuring consistency and quality across all digital products.

The guidelines include design tokens, typography systems, color palettes, component patterns, and page layouts derived from [datascience.ch](https://datascience.ch). Each section provides practical examples, usage guidelines, and downloadable assets to streamline the development process.

Whether you're building a new platform from scratch or enhancing existing applications, this kit ensures your work aligns with SDSC's brand standards while maintaining flexibility for innovation.

---

## 2. Design Tokens – Core Components

### Colors

#### 〇 Primary Colors

| Color Name | Hex Value | Usage |
|------------|-----------|-------|
| Dark Blue | `#26245c` | Primary brand color, button hover states, banner backgrounds |
| Light Blue | `#5461a6` | Primary buttons, hyperlinks, interactive elements |

**Color Variations:**

Dark Blue Scale:
- Lighter: `#4a4889`
- Light: `#383673`
- Base: `#26245c`
- Dark: `#1e1c4a`
- Darker: `#161438`

Light Blue Scale:
- Lighter: `#8a94c9`
- Light: `#6f7ab8`
- Base: `#5461a6`
- Dark: `#434e85`
- Darker: `#323b64`

#### 〇 Secondary Colors

| Color Name | Hex Value | Usage |
|------------|-----------|-------|
| Green | `#90ca42` | Accent color, highlights, call-to-action elements |

**Green Scale:**
- Lighter: `#b8e186`
- Light: `#a4d564`
- Base: `#90ca42`
- Dark: `#73a235`
- Darker: `#567928`

#### 〇 Neutral Colors

| Color Name | Hex Value | Usage |
|------------|-----------|-------|
| Grey | `#848484` | Labels with circle prefix, secondary text, icons |
| Light Blue Background | `#dddeec` | Section banners, highlighted content areas |
| Black | `#000000` | Headings, body text, footers |
| White | `#FFFFFF` | Card backgrounds, text on dark backgrounds |

#### 〇 Surface Colors (Neutral Grayscale)

A 10-shade neutral grayscale palette for backgrounds, cards, borders, and subtle UI elements:

| Shade | Hex Value | Usage |
|-------|-----------|-------|
| 50 | `#fafafa` | Light backgrounds |
| 100 | `#f5f5f5` | Subtle borders |
| 200 | `#e5e5e5` | Disabled states |
| 300 | `#d4d4d4` | Dividers |
| 400 | `#a3a3a3` | Placeholder text |
| 500 | `#737373` | Secondary borders |
| 600 | `#525252` | Medium grays |
| 700 | `#404040` | Strong borders |
| 800 | `#262626` | Dark text |
| 900 | `#171717` | Overlay backgrounds |

**Surface Color Usage:**
- **50-200:** Light backgrounds, subtle borders, disabled states
- **300-500:** Medium grays for dividers, placeholder text, secondary borders
- **600-900:** Dark text, strong borders, overlay backgrounds

#### 〇 Semantic Colors

Status and feedback colors for interactive states, alerts, and notifications:

| Purpose | Base Color | Usage |
|---------|------------|-------|
| Success | `#10b981` | Success states, confirmations, positive actions |
| Warning | `#f59e0b` | Warning messages, caution states |
| Error | `#ef4444` | Error states, destructive actions, alerts |
| Info | `#3b82f6` | Informational messages, help text |

**Semantic Color Scales (5 shades each):**

Success Scale:
- Lighter: `#6ee7b7`, Light: `#34d399`, Base: `#10b981`, Dark: `#059669`, Darker: `#047857`

Warning Scale:
- Lighter: `#fcd34d`, Light: `#fbbf24`, Base: `#f59e0b`, Dark: `#d97706`, Darker: `#b45309`

Error Scale:
- Lighter: `#fca5a5`, Light: `#f87171`, Base: `#ef4444`, Dark: `#dc2626`, Darker: `#b91c1c`

Info Scale:
- Lighter: `#93c5fd`, Light: `#60a5fa`, Base: `#3b82f6`, Dark: `#2563eb`, Darker: `#1d4ed8`

---

### Typography

#### Font Families

**Primary Font:** Space Grotesk (for headlines and display text)
- Bold, geometric sans-serif
- Use for: H1-H6, all headings

**Secondary Font:** Switzer (for body text and UI elements)
- Clean, readable sans-serif
- Use for: Body text, paragraphs, buttons, forms, UI elements

#### Type Scale

```css
/* Headlines - Space Grotesk */
h1: 3rem (48px) - Space Grotesk, Bold
h2: 2rem (32px) - Space Grotesk, Bold
h3: 1.5rem (24px) - Space Grotesk, Semibold
h4: 1.125rem (18px) - Space Grotesk, Semibold

/* Body - Switzer */
body-large: 1.125rem (18px) - Switzer, Regular (lead text)
body: 1rem (16px) - Switzer, Regular
body-small: 0.875rem (14px) - Switzer, Regular
caption: 0.75rem (12px) - Switzer, Regular
button: 0.875rem (14px) - Switzer, Regular, Uppercase
```

#### Line Heights

- Headlines: 1.2 - 1.3
- Body text: 1.5 - 1.6
- UI elements: 1.4

#### Typography Guidelines

**Font Usage:**
- Use Space Grotesk for all headings (H1-H6)
- Use Switzer for body text, buttons, forms, and UI elements
- Maintain font consistency across the application
- Load both fonts for complete design system

**Best Practices:**
- Line Height: 1.5-1.6 for body text, 1.2-1.3 for headings
- Letter Spacing: Tight (-0.02em) for large headings
- Font Smoothing: Antialiased for crisp rendering
- Max line length: 65-75 characters for readability

---

### Content Hierarchy & Labels

#### Section Labels (Content Label Pattern)

Use circle icon (〇) with uppercase text for section identifiers:

```
〇 LABEL TEXT
```

**Styling:**
- Font: Switzer
- Size: 14px
- Weight: Medium (500)
- Transform: Uppercase
- Letter spacing: 0.05em
- Color: `#848484`

#### Content Label Pattern Structure

Three-level hierarchy: Label → Title → Body

1. **Label with Circle Prefix**
   - 〇 + LABEL TEXT in grey (#848484), uppercase, Switzer Medium, 14px

2. **Section Title**
   - Space Grotesk Bold, 32px, black (#000000)

3. **Body Content**
   - Switzer Regular, 16px, black (#000000) with hyperlinks in #5461a6

**Spacing:**
- Label to Title: 12px (0.75rem)
- Title to Body: 16px (1rem)
- Between Sections: 48-64px (3-4rem)

---

### Logo

#### Primary Logo

**Files:**
- Color: `SDSC_logo_horizontal_rgb_colors.png`
- White: `SDSC_logo_horizontal_rgb_white.png`

**Usage Guidelines:**

✓ **Do:**
- Use official logo files provided
- Maintain aspect ratio when scaling
- Ensure adequate clear space around logo (X = height of logo)
- Use color logo on white/light backgrounds
- Use white logo on dark backgrounds
- Minimum size: 32px height for digital

✗ **Don't:**
- Don't stretch or distort the logo
- Don't change logo colors arbitrarily
- Don't add effects (shadows, gradients, outlines)
- Don't place on busy backgrounds
- Don't use outdated logo versions

#### Partner Logos

Always display all 4 main partner logos in the footer along with the Swiss Data Science Center logo:

1. **ETH Zürich** - `eth_logo_kurz_pos.png`
2. **EPFL** - `EPFL_Logo_Digital_RGB_PROD.png`
3. **PSI** - `PSI_Logo_01_Standard_Positive_RGB.png`
4. **Biopôle Lausanne** - `Biopo_le_Lausanne_idca14LYxL_1.png`

**Partner Logo Guidelines:**
- **Footer Requirement:** Always display all 4 main partner logos in the footer
- **Size:** All partner logos should be 36px height (h-9) for consistency
- **Spacing:** Maintain 48px (3rem) gap between partner logos
- **On Light Backgrounds:** Use original colored versions
- **On Dark Backgrounds:** Use CSS filter `brightness(0) invert(1)`
- **Hover Effect:** Use opacity transition (70% → 100%)

---

### Dot Pattern Background

Subtle dot pattern for hero sections and key content areas.

**Files:**
- `global_background2.png` / `.svg`
- `global_background3.png` / `.svg`
- `global_background4.png` / `.svg`

#### Implementation

```css
background-image: url('path/to/global_background2.png');
background-size: cover;
background-position: left center; /* or right center */
background-repeat: no-repeat;
```

#### Best Uses

✓ Use for:
- Hero sections with primary messaging
- Featured content areas
- Call-to-action sections
- Background for cards with important content
- Landing page headers

✗ Avoid:
- Using on small text-heavy sections
- Combining with busy images or complex layouts
- Applying to entire pages (use sparingly)
- Layering multiple patterns
- Using without sufficient content overlay contrast

#### Implementation Notes

- **Pattern Files:** Available in both PNG and SVG formats for flexibility
- **Background Size:** Use `background-size: cover` for consistent scaling across screen sizes
- **Background Position:** Use `left center` or `right center` instead of `center` for better asymmetric positioning
- **Content Overlay:** Always use white or semi-transparent backgrounds with backdrop blur for content placed over the pattern
- **Contrast Compliance:** Ensure text maintains WCAG AA contrast ratios (4.5:1 minimum) when placed over the pattern

---

## 3. Basic Components

### Buttons

#### Primary Button

```css
background: #5461a6;
color: #FFFFFF;
padding: 12px 24px;
font-family: Switzer;
font-size: 14px;
text-transform: uppercase;
border-radius: 0; /* square corners */
transition: background 200ms;

/* Hover */
background: #26245c;
```

#### Secondary Button (Outline)

```css
background: transparent;
color: #5461a6;
border: 1px solid #5461a6;
padding: 12px 24px;
font-family: Switzer;
font-size: 14px;
text-transform: uppercase;
border-radius: 0;
transition: all 200ms;

/* Hover */
background: #5461a6;
color: #FFFFFF;
```

#### Text Button (Link Style)

```css
background: transparent;
color: #5461a6;
border: none;
padding: 8px 16px;
font-family: Switzer;
font-size: 14px;
transition: color 200ms;

/* Hover */
color: #26245c;
text-decoration: underline;
```

#### Button States

- **Default:** Base styling
- **Hover:** Darker background, smooth transition (200ms)
- **Active/Focus:** Maintain accessibility with visible focus states
- **Disabled:** 50% opacity, cursor-not-allowed, no pointer events

---

### Form Inputs

Standard form elements with consistent styling and **4px border-radius**.

#### Text Input

```css
/* Normal State */
width: 100%;
padding: 8px 16px;
border: 1px solid #E5E5E5;
border-radius: 4px;
background: #FFFFFF;
color: #000000;
font-family: Switzer;
font-size: 16px;

/* Focus State */
border-color: #5461a6;
outline: none;

/* Disabled State */
background: #F7F7F8;
color: #848484;
cursor: not-allowed;
```

#### Textarea

```css
width: 100%;
padding: 8px 16px;
border: 1px solid #E5E5E5;
border-radius: 4px;
background: #FFFFFF;
color: #000000;
font-family: Switzer;
font-size: 16px;
resize: vertical;
min-height: 100px;

/* Focus State */
border-color: #5461a6;
outline: none;
```

#### Select Dropdown

```css
width: 100%;
padding: 8px 16px;
border: 1px solid #E5E5E5;
border-radius: 4px;
background: #FFFFFF;
color: #000000;
font-family: Switzer;
font-size: 16px;

/* Focus State */
border-color: #5461a6;
outline: none;
```

**Form Input Guidelines:**
- All form elements use **4px border-radius**
- Use placeholder text in #848484 color
- Maintain consistent padding (8px vertical, 16px horizontal)
- Focus states use primary color (#5461a6) border
- Labels should be Switzer Medium, 14px, positioned above inputs with 8px margin

---

### Checkboxes

Standard checkbox components with **4px border-radius**.

```css
/* Checkbox */
width: 20px;
height: 20px;
border: 2px solid #E5E5E5;
border-radius: 4px;
background: #FFFFFF;

/* Checked State */
background: #5461a6;
border-color: #5461a6;

/* Focus State */
box-shadow: 0 0 0 2px rgba(84, 97, 166, 0.2);

/* Disabled State */
background: #F7F7F8;
border-color: #E5E5E5;
opacity: 0.5;
cursor: not-allowed;
```

**Checkbox States:**
- Unchecked: White background with grey border
- Checked: Blue background (#5461a6) with checkmark
- Disabled: Grey background with 50% opacity
- All states use **4px border-radius**

---

### Toggle Switches

Toggle switches for binary on/off states.

```css
/* Track */
width: 48px;
height: 24px;
background: #E5E5E5;
border-radius: 12px;
transition: background 200ms;

/* Track (Active) */
background: #5461a6;

/* Thumb */
width: 16px;
height: 16px;
background: #FFFFFF;
border-radius: 50%;
position: absolute;
left: 4px;
top: 4px;
transition: transform 200ms;

/* Thumb (Active) */
transform: translateX(24px);

/* Disabled State */
opacity: 0.5;
cursor: not-allowed;
```

**Toggle States:**
- Off: Grey track (#E5E5E5), thumb at left
- On: Blue track (#5461a6), thumb at right
- Disabled: 50% opacity, no interaction

---

### Progress Indicators

#### Progress Bars

Progress bars with **4px border-radius**.

```css
/* Container */
width: 100%;
height: 8px;
background: #E5E5E5;
border-radius: 4px;
overflow: hidden;

/* Fill */
height: 100%;
background: #5461a6;
border-radius: 4px;
transition: width 300ms ease;

/* Complete State */
background: #90ca42; /* Green for 100% */
```

**Progress Bar Usage:**
- Use #5461a6 (blue) for in-progress states
- Use #90ca42 (green) for complete (100%) state
- Always show percentage label above or beside the bar
- Animate width changes with 300ms transition
- All progress bars use **4px border-radius**

#### Loading Spinner

```css
/* Spinner */
width: 32px;
height: 32px;
border: 4px solid #E5E5E5;
border-top-color: #5461a6;
border-radius: 50%;
animation: spin 1s linear infinite;

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

**Spinner Sizes:**
- Small: 24px
- Medium: 32px (default)
- Large: 48px

---

## 4. Page Layout Possibilities

### 1. Hero Section: Image + Content

Full-width background with overlay gradient and centered content.

```html
<section class="hero">
  <div class="background-pattern">
    <div class="gradient-overlay"></div>
    <div class="content">
      <h1>Headline</h1>
      <p>Description text</p>
      <button>Call to Action</button>
    </div>
  </div>
</section>
```

**Specifications:**
- Background: Dot pattern image
- Overlay: Linear gradient from primary dark to primary light with 90-95% opacity
- Text: White on dark overlay
- Max-width: 1280px centered container

---

### 2. Feature Grid: 3-Column

```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
  <div class="feature-card">
    <h3>Feature Title</h3>
    <p>Feature description</p>
  </div>
  <!-- Repeat for 3 columns -->
</div>
```

**Usage:** Ideal for showcasing three equal-weight features or services.

---

### 3. Feature Grid: 4-Column

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <div class="feature-card">...</div>
  <!-- Repeat for 4 columns -->
</div>
```

**Usage:** Perfect for displaying multiple smaller items like icons, stats, or service categories.

---

### 4. Feature Grid: 2-Column

```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
  <div class="feature-card">...</div>
  <div class="feature-card">...</div>
</div>
```

**Usage:** Best for comparisons, paired content, or two main offerings.

---

### 5. Key Numbers

Large statistics with labels for impact metrics.

```html
<div class="stats-grid">
  <div class="stat">
    <div class="number">250+</div>
    <div class="label">Projects</div>
  </div>
  <!-- Repeat for multiple stats -->
</div>
```

**Styling:**
- Numbers: Space Grotesk Bold, 48-64px, Primary color
- Labels: Switzer Regular, 16px, Grey

---

### 6. Full-Width Banner

Attention-grabbing full-width section with call-to-action.

```html
<section class="banner bg-[#dddeec]">
  <div class="container">
    <h2>Banner Headline</h2>
    <p>Supporting text</p>
    <button>Take Action</button>
  </div>
</section>
```

---

### 7. List Layout

Vertical list with dividers for sequential content.

```html
<div class="list">
  <div class="list-item">
    <span class="icon">〇</span>
    <div class="content">...</div>
  </div>
  <!-- Repeat items with dividers -->
</div>
```

---

### 8. Content + Sidebar

Two-column layout: main content (2/3) + sidebar (1/3).

```html
<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
  <main class="lg:col-span-2">
    <!-- Main content -->
  </main>
  <aside>
    <!-- Sidebar -->
  </aside>
</div>
```

---

### 9. Event Index

Card grid for events, news, or blog posts.

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <article class="event-card">
    <div class="date">May 28, 2026</div>
    <h3 class="title">Event Title</h3>
    <p class="description">...</p>
    <a href="#" class="link">Learn more →</a>
  </article>
  <!-- Repeat cards -->
</div>
```

---

### 10. Article Grid

Uniform grid for article previews.

```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
  <article class="article-card">
    <img src="..." alt="..." />
    <h3>Article Title</h3>
    <p>Preview text...</p>
    <a href="#">Read more →</a>
  </article>
  <!-- Repeat articles -->
</div>
```

---

## Design Principles

### 1. Consistency

- Use the defined color palette consistently
- Maintain typography hierarchy across all pages
- Apply spacing system uniformly (8px base unit)
- Follow component patterns for all UI elements

### 2. Clarity

- Prioritize readability with adequate line spacing
- Use ample white space between sections
- Maintain clear visual hierarchy with size and weight
- Ensure labels and CTAs are descriptive and actionable

### 3. Accessibility

- WCAG AA contrast ratios minimum (4.5:1 for text)
- Keyboard navigation support for all interactive elements
- Screen reader friendly semantic markup
- Focus states visible on all interactive elements
- Color not used as the only means of conveying information

### 4. Responsiveness

- Mobile-first approach for all layouts
- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Flexible layouts that adapt to screen size
- Touch-friendly tap targets (minimum 44x44px)

### 5. Performance

- Optimize images (use appropriate formats and sizes)
- Load fonts efficiently (subset if needed)
- Minimize CSS and JavaScript
- Use semantic HTML for better parsing

---

## Dark Mode Support

The design system includes full dark mode support with the following color mappings:

### Dark Mode Colors

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Page Background | `#F7F7F8` | `#1a1a1a` |
| Card Background | `#FFFFFF` | `#2d2d2d` |
| Border | `#E5E5E5` | `#404040` |
| Text Primary | `#000000` | `#FFFFFF` |
| Text Secondary | `#848484` | `#d4d4d4` |
| Link Normal | `#5461a6` | `#93c5fd` |
| Link Hover | `#26245c` | `#FFFFFF` |

### Dark Mode Implementation

```css
/* Light mode (default) */
.element {
  background: #FFFFFF;
  color: #000000;
}

/* Dark mode */
.dark .element {
  background: #2d2d2d;
  color: #FFFFFF;
}
```

---

## Usage for Slidev

### Quick Start

1. Import this markdown file into your Slidev project
2. Use code blocks to show implementation examples
3. Reference color codes and typography directly from tables

### Example Slide Structure

```markdown
---
layout: center
---

# Swiss Data Science Center UI Design Kit

Complete design system for modern data science applications

---

# Color Palette

<div class="grid grid-cols-3 gap-4">
  <div class="color-swatch" style="background: #26245c">Primary Dark</div>
  <div class="color-swatch" style="background: #5461a6">Primary</div>
  <div class="color-swatch" style="background: #90ca42">Accent Green</div>
</div>

---

# Typography System

**Headlines:** Space Grotesk (Bold, Geometric)

**Body Text:** Switzer (Clean, Readable)
```

---

## Resources

- **Design Tokens:** Defined color, typography, and spacing values
- **Component Library:** Reusable React components with Tailwind CSS
- **Layout Patterns:** Pre-built page compositions
- **Usage Guidelines:** Best practices and accessibility standards
- **Asset Files:** Logos, backgrounds, and patterns in PNG/SVG formats

---

## Credits

**Design System:** Swiss Data Science Center  
**Website:** [datascience.ch](https://datascience.ch)  
**Main Partners:** ETH Zürich, EPFL, PSI, Biopôle Lausanne

---

*Enabling data-driven design and innovation*

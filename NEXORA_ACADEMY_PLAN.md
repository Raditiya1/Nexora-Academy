# Nexora Academy - Project Plan

## 1. Project Overview

- **Project Name**: Nexora Academy
- **Type**: Education/Course Platform Website
- **Tech Stack**: Next.js (Pages Router), TypeScript, Tailwind CSS
- **Goal**: Create a modern, clean EdTech platform for international students

## 2. Folder Structure

```
nexora-academy/
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── index.tsx
│   ├── courses.tsx
│   ├── about.tsx
│   └── contact.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── CourseCard.tsx
│   ├── Hero.tsx
│   ├── FeaturedCourses.tsx
│   ├── WhyChooseUs.tsx
│   ├── LearningProcess.tsx
│   ├── Testimonials.tsx
│   ├── CTA.tsx
│   └── ContactForm.tsx
├── styles/
│   └── globals.css
└── public/
    └── images/
        ├── hero.jpg
        ├── course1.jpg
        ├── course2.jpg
        ├── course3.jpg
        ├── course4.jpg
        ├── course5.jpg
        ├── course6.jpg
        ├── instructor1.jpg
        ├── instructor2.jpg
        ├── instructor3.jpg
        └── testimonial1.jpg
```

## 3. Color Palette

- **Primary**: Soft Blue (#3B82F6 / blue-500)
- **Secondary**: White (#FFFFFF)
- **Background**: Light Grey (#F8FAFC / slate-50)
- **Accent**: Dark Blue (#1E40AF / blue-800)
- **Text Primary**: Slate-800
- **Text Secondary**: Slate-600

## 4. Pages & Components

### 4.1 Home Page (index.tsx)

- **Hero Section**:
  - Background image/illustration
  - Headline: "Upgrade Your Skills with Modern Online Courses"
  - Subheadline: "Learn from industry-focused curriculum designed to help you build real-world skills."
  - CTA Buttons: "Explore Courses" & "Get Started"
- **Featured Courses Section**:
  - 6 course cards (Web Development, Fullstack JS, UI/UX, Backend API, Database, Digital Entrepreneurship)
- **Why Choose Us Section**:
  - 6 points with icons (Industry-Relevant Curriculum, Practical Projects, Flexible Learning, Expert Mentors, Lifetime Access, Community Support)
- **Learning Process Section**:
  - 4 steps horizontal layout (Enroll → Learn → Complete Projects → Get Certified)
- **Testimonials Section**:
  - 3-4 student testimonials with photos
- **CTA Section**:
  - "Start Your Learning Journey Today" with "Browse Courses" button

### 4.2 Courses Page (courses.tsx)

- Grid layout of all courses
- Filter by category (Frontend, Backend, Design, Business)
- Responsive grid with hover animations

### 4.3 About Page (about.tsx)

- Company story and mission
- Team/instructor profiles (dummy cards with photos)

### 4.4 Contact Page (contact.tsx)

- Contact form (Name, Email, Subject, Message)
- Business email
- FAQ link

## 5. Components Breakdown

### 5.1 Navbar.tsx

- Logo (Nexora Academy)
- Navigation links (Home, Courses, About, Contact)
- CTA button (Get Started)
- Sticky on scroll
- Mobile responsive hamburger menu

### 5.2 Footer.tsx

- Logo and description
- Quick links
- Contact info
- Social media icons
- Copyright

### 5.3 CourseCard.tsx

- Course image
- Title
- Short description
- Duration
- Level badge (Beginner/Intermediate/Advanced)
- "View Details" button

## 6. Implementation Steps

### Step 1: Setup Project

- [ ] Initialize Next.js project with TypeScript
- [ ] Configure Tailwind CSS
- [ ] Create folder structure

### Step 2: Global Styles

- [ ] Setup globals.css with Tailwind directives
- [ ] Configure custom colors in tailwind.config.js

### Step 3: Components

- [ ] Create Navbar component
- [ ] Create Footer component
- [ ] Create CourseCard component
- [ ] Create all section components

### Step 4: Pages

- [ ] Create index.tsx (Home page)
- [ ] Create courses.tsx
- [ ] Create about.tsx
- [ ] Create contact.tsx

### Step 5: Optimization

- [ ] Add SEO meta tags
- [ ] Ensure responsive design
- [ ] Test all functionality

## 7. Placeholder Images

Since we need images, I'll use placeholder services:

- https://placehold.co/ for placeholder images
- OR create SVG illustrations inline
- Users can replace with actual images later

## 8. Output Requirements

- All files in .tsx format
- Clean, TypeScript-valid code
- Separated per file
- Ready to copy-paste
- No combined/long files

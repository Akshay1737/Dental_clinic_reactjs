<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=220&color=0:14B8A6,100:0EA5E9&text=Infinity%20Dental%20Clinic&fontAlign=50&fontAlignY=40&fontSize=48&fontColor=ffffff&desc=Modern%20Animated%20Dental%20Website&descAlign=50&descAlignY=63" alt="Infinity Dental Clinic Banner" />

<img src="https://readme-typing-svg.demolab.com?font=Plus+Jakarta+Sans&weight=700&size=26&pause=900&center=true&vCenter=true&width=820&lines=React+%2B+Vite+Powered+Dental+Clinic+Website;Smooth+Framer+Motion+Animations;WhatsApp+Appointment+Booking+Flow;Responsive+UI+with+Light%2FDark+Theme" alt="Typing animation" />

<br />

<img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=061a23" alt="React" />
<img src="https://img.shields.io/badge/Vite-7.3.0-646CFF?style=for-the-badge&logo=vite&logoColor=ffffff" alt="Vite" />
<img src="https://img.shields.io/badge/TailwindCSS-3.4.17-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=ffffff" alt="Tailwind" />
<img src="https://img.shields.io/badge/Framer%20Motion-11.13.1-111827?style=for-the-badge&logo=framer&logoColor=ffffff" alt="Framer Motion" />
<img src="https://img.shields.io/badge/Status-Ready%20for%20GitHub-10B981?style=for-the-badge" alt="Status" />

</div>

---

## Overview
Infinity Dental Clinic is a modern, multi-page dental website built with React + Vite.
It focuses on conversion-friendly design, smooth animations, and WhatsApp-first lead capture for appointments and contact messages.

## Highlights
- Animated hero and section transitions using `framer-motion`
- WhatsApp-powered appointment booking flow with structured message payload
- Contact form with validation (`react-hook-form` + `zod`) and toast feedback
- Dedicated pages: Home, About, Services, Contact, plus 404 fallback
- Light/Dark theme toggle via `next-themes`
- Responsive layout for desktop, tablet, and mobile

## Live Features
- Navigation with sticky animated header
- Service cards with subtle motion and visual hierarchy
- Appointment widget with:
  - Date picker
  - Time slot selector
  - Service selector
  - WhatsApp redirect to confirm booking
- Contact page cards for location, phone, email, and clinic timings

## Tech Stack
- `react` + `react-dom`
- `vite`
- `tailwindcss` + `postcss` + `autoprefixer`
- `framer-motion`
- `wouter` (routing)
- `react-hook-form` + `zod`
- `radix-ui` primitives
- `lucide-react` icons

## Quick Start
```bash
# 1) Clone
git clone https://github.com/Akshay1737/Dental_clinic_reactjs.git

# 2) Enter project
cd dentist-final

# 3) Install dependencies
npm install

# 4) Start development server
npm run dev
```

App runs at the local URL shown by Vite (typically `http://localhost:5173`).

## Build for Production
```bash
npm run build
npm run preview
```

Production files are generated in the `dist/` folder.

## Project Structure
```text
dentist-final/
|- public/
|- src/
|  |- components/
|  |- pages/
|  |- hooks/
|  |- lib/
|  |- App.jsx
|  |- main.jsx
|  |- index.css
|- dist/
|- package.json
|- tailwind.config.js
|- vite.config.js
```

## WhatsApp Integration
The booking and contact flows open WhatsApp with pre-filled messages to:

`+91 99232 71737`

Update this number in:
- `src/components/AppointmentForm.jsx`
- `src/pages/Contact.jsx`
- `src/pages/Home.jsx`
- `src/components/Navbar.jsx`

## Deployment
This project can be deployed easily on:
- Surge




<div align="center">

### Crafted with clean UI, motion, and patient-first UX

<img src="https://capsule-render.vercel.app/api?type=waving&section=footer&height=120&color=0:0EA5E9,100:14B8A6" alt="Footer wave" />

</div>

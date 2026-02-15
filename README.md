# 🏡 CareNest — Trusted Baby & Elderly Care Service Platform

## 📘 Project Name
**CareNest — Trusted Care at Home**

---

## 🎯 Project Purpose
**CareNest** is a modern and responsive caregiving service platform designed to help families easily find and book trusted caregivers for babies, elderly individuals, and sick family members.

The platform allows users to explore available care services, book caregivers based on duration and location, track booking status, and receive booking confirmation via email.

**The main goal** of this project is to make caregiving simple, secure, and accessible for everyone through a digital platform.

---

## 🌐 Live URL
🔗 **Live Site:** *(https://carenest-khaki.vercel.app/)*

---

## 🚀 Key Features

### 🏠 Home Page
- Professional SaaS-style landing page  
- Services overview (Baby Care, Elderly Care, Sick Care)  
- Responsive hero banner  
- Testimonials and trust section  
- Call-to-action sections  
- Fully responsive design (Mobile, Tablet, Desktop)

---

### 🔐 Authentication System
- Email & Password authentication  
- Google Social Login  
- Secure password validation:
  - Minimum 6 characters  
  - At least 1 uppercase letter  
  - At least 1 lowercase letter  
- Private route protection  
- Logged-in users stay authenticated on page reload  

---

### 📋 Service Detail Page
- Dynamic routing (`/service/[id]`)  
- Detailed information about selected service  
- Dynamic metadata implementation  
- Book Service button  

---

### 📅 Booking System
- Private booking route (`/booking/[id]`)  
- Select service duration (hour/day based)  
- Location selection:
  - Division  
  - District  
  - City  
  - Area  
  - Address input  
- Dynamic total cost calculation (Duration × Service Charge)  
- Booking stored with default status: **Pending**

---

### 📦 My Bookings Page
- View all personal bookings  
- Displays:
  - Service Name  
  - Duration  
  - Location  
  - Total Cost  
  - Booking Status (Pending / Confirmed / Completed / Cancelled)  
- Cancel booking functionality  
- Secure private route access  

---

### 📧 Email Invoice System
- Automatic email confirmation after booking  
- Invoice includes:
  - Service name  
  - Duration  
  - Total cost  
  - Booking ID  
- Implemented using Nodemailer  

---

### ⚙️ Optional Enhancements
- Stripe Payment Integration  
- Admin Dashboard  
- Booking status management  
- Payment history tracking  

---

## 🎨 UI & Design System

CareNest uses a carefully selected premium healthcare-inspired color palette:

| Purpose | Color | Hex Code |
|----------|--------|----------|
| Primary | Deep Teal | `#0F766E` |
| Secondary | Soft Mint | `#99F6E4` |
| Accent | Warm Peach | `#FDBA74` |
| Background | Off White | `#F8FAFC` |
| Text | Dark Slate | `#1E293B` |

Design principles:
- Clean and modern SaaS layout  
- Minimal shadows  
- Soft rounded corners  
- Accessible typography  
- Emotionally warm and trustworthy tone  

---

## 🧩 Tech Stack Used

| Category | Technologies |
|------------|----------------|
| **Frontend** | Next.js (Latest App Router), React |
| **Styling** | Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **Authentication** | JWT / NextAuth / Firebase (based on implementation) |
| **Email Service** | Nodemailer |
| **Payment (Optional)** | Stripe |
| **Deployment** | Vercel |
| **Environment Config** | .env variables |

---

## 📦 NPM Packages Used

| Package | Purpose |
|------------|----------|
| **next** | React framework |
| **react** | UI building |
| **react-dom** | DOM rendering |
| **mongoose** | MongoDB object modeling |
| **jsonwebtoken** | Authentication |
| **bcryptjs** | Password hashing |
| **nodemailer** | Email invoice sending |
| **tailwindcss** | Styling |
| **lucide-react** | Icons |
| **axios** | API requests |
| **react-hook-form** | Form handling |
| **sweetalert2** | Alerts and confirmations |

---

## 📂 Folder Structure Overview

```
care-nest/
│
├── app/
│   ├── page.js
│   ├── service/[id]/page.js
│   ├── booking/[id]/page.js
│   ├── my-bookings/page.js
│   ├── login/page.js
│   ├── register/page.js
│   ├── not-found.js
│   └── api/
│
├── components/
│   ├── Navbar.jsx
│   ├── HeroSection.jsx
│   ├── ServicesSection.jsx
│   ├── Footer.jsx
│
├── models/
│   ├── User.js
│   ├── Booking.js
│   ├── Service.js
│
├── lib/
│   ├── db.js
│   ├── auth.js
│   ├── sendEmail.js
│
├── middleware.js
├── .env.local
└── package.json
```

---

## 🔐 Environment Variables

All sensitive keys are stored securely in `.env.local`:

```
MONGODB_URI=
JWT_SECRET=
EMAIL_USER=
EMAIL_PASS=
STRIPE_SECRET_KEY=
NEXT_PUBLIC_BASE_URL=
```

---

## 📥 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/carenest

# Navigate to the project directory
cd carenest

# Install dependencies
npm install

# Run development server
npm run dev
```

---

## 🎯 Future Improvements

- Caregiver profile system  
- Real-time chat between client & caregiver  
- Rating & review system  
- Admin analytics dashboard  
- Advanced role-based authorization  

---

## 📌 Final Goal

CareNest is designed as a real-world SaaS-style caregiving marketplace MVP that demonstrates:

- Authentication & Authorization  
- Dynamic Routing  
- Database Integration  
- Secure Booking Workflow  
- Email Automation  
- Modern UI Architecture  

---

⭐ If you found this project useful, feel free to give it a star!

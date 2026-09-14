# ISMT Website

A static, multi-page education/institute website built with plain HTML & CSS.

## 🔗 Live Preview

> Run locally with VS Code's Live Server extension (see "Running Locally" below), or add a GitHub Pages link here once deployed.

## 📄 Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Landing page with hero banner, highlights, featured courses, and trust/partner logos. |
| About | `about.html` | Information about the institute, its mission, and background. |
| Courses | `courses.html` | Listing of all available courses. |
| Course Detail | `course-inner.html` | Detailed view of a single course. |
| Blog | `blog.html` | List of blog articles. |
| Post | `post.html` | Individual blog post page. |
| Contact | `contact.html` | Contact form and details. |

## 🖼️ Screenshots

Add your screenshots to a `screenshots/` folder in the project root, then they'll render below automatically on GitHub.

### Homepage
![Homepage](screenshots/Homepage.png)

### About Page
![About](screenshots/About.png)

### Courses Page
![Courses](screenshots/Courses.png)

### Contact Page
![Contact](screenshots/Contact.png)

### Blog Page
![Blog](screenshots/Blog.png)

## ✨ Features

- Responsive mobile menu with auto-close on link tap
- Active page highlighting in the navigation
- Sticky navbar with a scroll shadow
- Fade-in scroll animations on sections and cards
- Floating back-to-top button
- Live countdown timer on the homepage registration section
- Client-side validation with inline feedback on the contact, registration, and newsletter forms
- Real, distinct course titles/prices matching each course image (no more duplicated placeholder cards)
- SEO-friendly meta descriptions and unique page titles on every page
- Descriptive alt text on logo, course, and profile images for accessibility
- Education-relevant footer content (replacing leftover template placeholder links)

## 🛠️ Tech Stack

- HTML5
- CSS3
- Vanilla JS + jQuery (`script.js`, shared across all pages)
- No build tools or dependencies required

## ▶️ Running Locally

1. Clone this repo:
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   ```
2. Open the folder in VS Code.
3. Install the **Live Server** extension.
4. Right-click `index.html` → **Open with Live Server**.

The site will open in your browser and auto-reload as you make changes.

## 📁 Project Structure

```
ismt-website-main/
├── index.html          # Homepage
├── about.html / about.css
├── courses.html
├── course-inner.html / course-inner.css
├── blog.html / blog.css
├── post.html / post.css
├── contact.html / contact.css
├── style.css            # Shared/global styles
├── script.js             # Shared site JavaScript (menu, animations, forms, etc.)
├── img/                  # Images and icons
└── screenshots/          # README screenshots (add your own)
```

## 📜 License

Add your license here (e.g. MIT), or note that this is a personal/learning project.

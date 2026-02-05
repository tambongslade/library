# Mobile Application Specification: HAKAPOKA
## "Intelligence Économique Library"

### 1. Overview
**App Name:** HAKAPOKA Mobile
**Goal:** To provide professionals and decision-makers in Africa with on-the-go access to high-value economic intelligence resources (Books, Videos, Reports).
**Target Audience:** Executives, Entrepreneurs, Researchers, Policy Makers.

---

### 2. Core Features

#### 2.1 Authentication & Onboarding
*   **Sign Up/Login:** Email/Password, Social Login (LinkedIn, Google).
*   **Onboarding:** Brief tour of features (Library, Offline Mode, Expert Analysis).
*   **Subscription Selection:** In-app purchase or link to web payment for plans:
    *   *Standard* (50,000 FCFA/mo): Books only.
    *   *Professional* (150,000 FCFA/mo): Books + Videos + Reports.
    *   *Enterprise:* Contact sales.

#### 2.2 Home / Dashboard
*   **Personalized Feed:** "Recommended for you" based on read history.
*   **Continue Reading:** Quick access to the last opened book or video.
*   **New Arrivals:** Horizontal scroll of latest content.
*   **Quick Stats:** Number of reports read, hours spent learning (Gamification).

#### 2.3 The Library (Hub)
*   **Tabs/Filters:**
    1.  **Books & Theses:** Cover view, filter by category (Economics, Strategy, Law).
    2.  **Videos & Conferences:** Thumbnail view with duration.
    3.  **Reports & Analysis:** List view with metadata (Date, Size, Type).
*   **Search:** Global search with filters for content type and tags.

#### 2.4 Document Reader (Books & Reports)
*   **Format Support:** PDF, ePub.
*   **Features:**
    *   Night/Day mode.
    *   Highlighting and Annotations.
    *   Font size adjustment.
    *   **Offline Mode:** Download documents for offline access (DRM protected).
    *   Table of Contents navigation.

#### 2.5 Video Player
*   **Features:**
    *   Background play (audio only).
    *   PiP (Picture in Picture).
    *   Speed control (1.25x, 1.5x, 2x).
    *   Offline download support.

#### 2.6 User Profile
*   **My Library:** Saved/Downloaded items.
*   **History:** Recently viewed.
*   **Subscription Status:** Current plan, renewal date.
*   **Settings:** Notifications, Language (FR/EN), Theme (Dark/Light).

---

### 3. Data Requirements

#### 3.1 Content Types
*   **Book:**
    *   `id`, `title`, `author`, `category`, `coverImage`, `fileUrl`, `price`, `rating`, `summary`.
*   **Video:**
    *   `id`, `title`, `duration`, `thumbnail`, `videoUrl`, `category` (Interview, Conference).
*   **Report:**
    *   `id`, `title`, `date`, `fileSize`, `fileUrl`, `type` (PDF/Doc).

#### 3.2 User Data
*   `id`, `name`, `email`, `subscriptionTier` (Standard, Pro, Enterprise), `bookmarks`, `downloadedItems`.

---

### 4. Technical Specifications
*   **Platform:** iOS & Android (React Native or Flutter recommended).
*   **Backend:** Sync with existing web backend.
*   **Security:**
    *   DRM for downloadable content (prevent sharing).
    *   Secure authentication (JWT).
*   **Colors & Theme:**
    *   **Primary:** `#FF5722` (Orange/Gold - Action color).
    *   **Secondary:** `#0F341F` (Deep Forest Green - Corporate/Premium).
    *   **Accent:** `#14532D`.
    *   **Font Family:** `Outfit` (Google Fonts).
    *   **Backgrounds:** Clean White (`#f8f9fa` / `#FFFFFF`).

### 5. Future Roadmap
*   **Community:** Comments and discussions on reports.
*   **Lives:** Real-time streaming of conferences.
*   **Audiobooks:** TTS (Text-to-Speech) for reports.

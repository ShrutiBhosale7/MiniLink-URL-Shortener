📌 MiniLink – URL Shortener Platform
MiniLink is a full-stack URL shortening platform built using Spring Boot, MySQL, and React.
It allows users to create short URLs, track clicks, and view analytics through interactive dashboards.

Features
🔐 Secure User Authentication (JWT Based)
🔗 Short URL Generation (Base62 encoding)
📊 Click Analytics with Date-wise Aggregation
📈 Dashboard with Chart Visualization
👤 User-specific URL Management
⚡ RESTful API Design


📌Tech Stack
 Backend
1.Spring Boot
2.Spring Security (JWT)
3.Spring Data JPA
4.MySQL
5.Maven

Frontend
1.React.js
2.React Query
3.Chart.js
4.Tailwind CSS
5.Axios


🗄️Database Design
The application consists of three main tables:

1️⃣ User Table
Stores user authentication details.
(id,
username,
email,
password)

2️⃣ UrlMapping Table
Stores shortened URLs.
(id,
original_url,
short_url,
created_date,
click_count,
user_id (FK)
)
3️⃣ ClickEvent Table
Tracks each click event for analytics.
(id,
click_date,
url_mapping_id (FK))

🔗 Relationships
One User → Many UrlMappings
One UrlMapping → Many ClickEvents


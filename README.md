# 🚀 Uptime Monitor

A modern **Full-Stack Website Uptime Monitoring Dashboard** built using **FastAPI**, **React**, **Tailwind CSS**, **SQLite**, and **Docker**.

> The application monitors website availability by performing scheduled health checks every **5 seconds**, displaying real-time website status, HTTP response codes, response times, and monitoring statistics through a responsive dashboard.

📖 Overview

Uptime Monitor is a full-stack web application designed to monitor the health and availability of websites.

Users can add websites to be monitored, view their current status, measure response times, and remove monitors when no longer needed. The backend performs scheduled health checks while the frontend automatically refreshes to display the latest monitoring information.

---



# ✨ Features



## 🌐 Website Monitoring

- Add website URLs for monitoring
- Delete monitored websites
- Automatic health checks every 5 seconds
- HTTP Status Code monitoring
- Response time measurement
- Last checked timestamp
- Live availability tracking

---



## 📊 Dashboard

- Total monitored websites
- Online websites count
- Offline websites count
- Average response time
- Live connection indicator
- Automatic dashboard refresh
- Clean and responsive monitoring cards

---



## 🎨 User Interface

- Modern Dark Theme
- Glassmorphism Design
- Responsive Layout
- Smooth Hover Animations
- Mobile-Friendly Interface
- Clean Dashboard Components

---



# 🛠️ Technology Stack

| Category | Technology |

|-----------|------------|

| Frontend | React, Vite, Tailwind CSS |

| Backend | FastAPI |

| Database | SQLite |

| ORM | SQLAlchemy |

| Background Scheduler | APScheduler |

| Icons | Lucide React |

| Containerization | Docker & Docker Compose |

---



# 📂 Project Structure

```text

Uptime-Monitor
│
├── backend
│   ├── app
│   │   ├── main.py
│   │   ├── routes.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   ├── database.py
│   │   ├── scheduler.py
│   │   └── checker.py
│   │
│   ├── requirements.txt
│   └── Dockerfile
│
├── frontend
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── hooks
│   │   ├── utils
│   │   └── App.jsx
│   │
│   ├── package.json
│   └── Dockerfile
│
├── docker-compose.yml
├── README.md
└── AI_LOG.mdend

│   ├── src

│   │   ├── api

│   │   ├── components

│   │   ├── hooks

│   │   ├── utils

│   │   └── App.jsx

│   │

│   ├── package.json

│   └── Dockerfile

│

├── docker-compose.yml

├── [README.md](http://README.md)

└── AI_[LOG.md](http://LOG.md)

```

---



# 🚀 Getting Started



## Clone the Repository

```bash

git clone <repository-url>

cd Uptime-Monitor

```

---



# ▶️ Run the Application Locally



## Backend

```bash

cd backend/app

python -m uvicorn main:app --reload

```

Backend URL

```

[http://localhost:8000](http://localhost:8000)

```

Swagger Documentation

```

[http://localhost:8000/docs](http://localhost:8000/docs)

```

---



## Frontend

```bash

cd frontend

npm install

npm run dev

```

Frontend URL

```

[http://localhost:5173](http://localhost:5173)

```

---



# 🐳 Run with Docker

Build and start the complete application using Docker Compose.

```bash

docker compose up --build

```

Application URLs

Frontend

```

[http://localhost:5173](http://localhost:5173)

```

Backend

```

[http://localhost:8000](http://localhost:8000)

```

Swagger API

```

[http://localhost:8000/docs](http://localhost:8000/docs)

```

---



# 📡 REST API

| Method | Endpoint | Description |

|----------|-----------------|------------------------------|

| GET | `/urls` | Retrieve all monitored websites |

| POST | `/urls` | Add a new website for monitoring |

| DELETE | `/urls/{id}` | Delete an existing monitor |

---



# 🔄 Monitoring Workflow

1. User adds a website URL.
2. The URL is stored in the SQLite database.
3. APScheduler automatically checks every monitored website every **5 seconds**.
4. HTTP status code and response time are stored.
5. The React frontend automatically refreshes every **5 seconds**.
6. Dashboard statistics update in real time.

---



# 📈 Dashboard Statistics

The dashboard provides real-time monitoring insights including:

- 🌐 Total Websites
- 🟢 Online Websites
- 🔴 Offline Websites
- ⏱️ Average Response Time

---



# 🐳 Docker Support

The application is fully containerized.

Docker configuration includes:

- Backend Dockerfile
- Frontend Dockerfile
- Docker Compose

The complete project can be started using a single command:

```bash

docker compose up --build

```

---



# 🧪 Testing Steps



## 1. Start the application

Run the following command from the project root:

```bash

docker compose up --build

```

---



## 2. Open the application

Frontend

[http://localhost:5173](http://localhost:5173)

Backend API

[http://localhost:8000/docs](http://localhost:8000/docs)

---



## 3. Verify a healthy website

Add the following URL:

[https://example.com](https://example.com)

Expected Result

- Website status should appear as **Online**
- HTTP Status Code should be **200**
- Response time should be displayed

---



## 4. Verify an unreachable website

Add the following URL:

[https://this-domain-does-not-exist-12345.com](https://this-domain-does-not-exist-12345.com)

Expected Result

- Website status should appear as **Offline**
- Health check should fail
- Dashboard should update automatically after the next scheduled check

---



## 5. Verify Delete Functionality

Delete any monitored website.

Expected Result

- Website is removed from the dashboard
- Statistics update automatically



# ☁️ Deployment Sketch

For production deployment, I would use the following architecture:

```

                Internet

                    │

                    ▼

            Load Balancer

                    │

        ┌───────────┴───────────┐

        ▼                       ▼

 React Frontend           FastAPI Backend

    (Container)             (Container)

                    │

                    ▼

              PostgreSQL Database

```



### Deployment Plan

- Deploy the React frontend as a static web application.
- Deploy the FastAPI backend as a Docker container.
- Replace SQLite with PostgreSQL for production.
- Use Docker Compose or Kubernetes for container orchestration.
- Deploy the application on AWS, Azure, or Google Cloud.

---



# 👨‍💻 Author

**Majji Chandramouli**

> **Computer Science Graduate**
>
> **Interested in Software Engineering, Data Science, Artificial Intelligence, and Machine Learning,Ai Data Annotator.**
>
> **This project was developed as part of a Full-Stack Engineering technical assessment to demonstrate backend API development, frontend application development, scheduled background processing, Docker containerization, and end-to-end system integration.**  


# AI Collaboration Log

## Overview

I used AI throughout this project as a development assistant rather than a code generator. My goal was to speed up development while making sure I understood every feature I implemented.

Instead of asking AI to build the entire application, I worked feature by feature. I first understood the requirement, broke it into smaller tasks, then used AI to explore different implementation approaches. Every suggestion was reviewed, modified where necessary, and tested before becoming part of the final project.

This approach helped me move faster while still maintaining complete ownership of the final implementation.

---



# AI Tools Used

During the project I primarily worked with:

- ChatGPT
- Cursor AI

I used both tools differently depending on the task.

**ChatGPT** helped me understand requirements, plan the overall implementation, troubleshoot issues, and explain concepts whenever I got stuck.

**Cursor AI** was mainly used inside the editor to speed up development by generating boilerplate code, refactoring components, and helping with repetitive implementation tasks.

---



# How I Worked with AI

For almost every feature, I followed the same process.

- Read and understood the requirement.
- Broke the feature into smaller tasks.
- Wrote a clear prompt describing exactly what I wanted.
- Reviewed the generated solution instead of accepting it immediately.
- Modified the code whenever it didn't fit my project.
- Tested everything locally.
- Moved to the next feature only after the current one worked correctly.

Using this workflow allowed me to stay in control of the project while significantly reducing development time.

---



# Examples of Prompts I Used



### Backend

> Help me build a FastAPI backend that stores monitored URLs, periodically checks each website, records HTTP status codes, response times, and timestamps using SQLite.

---



### Frontend

> Design a modern React dashboard using Tailwind CSS that displays monitored websites, live status, response times, dashboard statistics, and refreshes automatically every few seconds without changing the backend API.

---



### Delete Feature

> Add a delete feature to both FastAPI and React while keeping the existing UI consistent and automatically refreshing the dashboard after deletion.

---



### Docker

> Help me Dockerize both the backend and frontend and configure Docker Compose so the complete project runs using a single command.

---



### Documentation

> Help me prepare a professional README and AI collaboration log for this assessment.

---



# Course Corrections

AI made development much faster, but not every generated solution worked perfectly on the first attempt.

One example was during the React implementation, where a generated update introduced a syntax issue that prevented the application from compiling. Instead of replacing everything, I identified the problem, corrected the implementation, and verified that the feature worked correctly.

Another challenge occurred while setting up Docker. The initial build failed because of configuration issues. After reviewing the error messages, I refined the Docker configuration, rebuilt the containers, and confirmed that both frontend and backend were running successfully.

The first version of the dashboard was also quite basic. Through several prompt iterations and manual refinements, I gradually improved it into the final glassmorphism-style interface while preserving all functionality.

---



# How I Validated AI Responses

One rule I followed throughout the project was never to assume AI-generated code was correct.

Before keeping any generated solution, I always:

- Read through the code.
- Made sure I understood how it worked.
- Compared it with the project requirements.
- Adjusted the implementation whenever necessary.
- Tested the feature locally.
- Confirmed the expected behaviour before moving forward.

This process helped me avoid blindly accepting generated code and ensured the final project remained maintainable and reliable.

---



# What I Learned

The biggest takeaway from this project was learning how to collaborate effectively with AI.

I found that the quality of the results depended heavily on the quality of the prompts. Breaking larger problems into smaller tasks, asking precise questions, and validating every response produced much better outcomes than requesting complete solutions.

Using AI this way allowed me to develop the project much more efficiently while still understanding the architecture, debugging issues independently, and taking full responsibility for the final implementation.
# Web Development Fundamentals: Core Concepts

## Q1. Role of Frontend (FE)
The Frontend is the **"Client-side"** of the application—essentially everything a user sees and interacts with in their browser.

* **User Interface (UI):** This involves the visual elements like layouts, buttons, fonts, and colors. It ensures the app is aesthetically pleasing and accessible.
* **User Interaction:** FE developers use languages like JavaScript to make the site "alive." This includes handling clicks, form inputs, animations, and providing immediate feedback (like a loading spinner).
* **Communication with Backend:** The FE doesn't have all the data. It sends "requests" to the Backend (via APIs) to fetch user profiles or save new posts, then displays that data to the user.



[Image of frontend vs backend architecture]


---

## Q2. Role of Backend (BE)
The Backend is the **"Server-side."** It’s the engine room that the user never sees but relies on for the app to function.

* **Server-side Processing:** While the FE handles "how things look," the BE handles "how things work." It processes requests, runs complex calculations, and manages the logic of the application.
* **Database Handling:** The BE is responsible for CRUD operations (Create, Read, Update, Delete). It talks to the database to retrieve or store information securely.
* **Security and Authentication:** The BE verifies user identity. It handles login credentials, encrypts passwords, and ensures that User A cannot access User B’s private data.

---

## Q3. Business Logic
**Business Logic** is the set of custom rules that determine how data is created, stored, and changed. It is the "brain" of the application that encodes real-world business requirements into code.

### Real-World Examples:
1.  **E-commerce:** A rule that states: *"If a customer spends over $100, apply a 10% discount and provide free shipping."*
2.  **Banking:** A logic check that prevents a withdrawal if the account balance is lower than the requested amount.
3.  **Social Media:** A rule that only allows "Friends" of a user to view their private photo albums.

---

## Q4. Client–Server Model
The Client-Server model is the foundational communication structure of the internet.

* **The Client:** Usually your web browser (Chrome, Safari) or a mobile app. It is the party that requests information or services.
* **The Server:** A powerful computer or cloud instance that "serves" resources or data. It waits for requests, processes them, and sends back the result.
* **Communication:** This happens via **HTTP/HTTPS requests**. The client sends a request (e.g., "GET /profile"), and the server sends back a response (e.g., "200 OK" with the data).

---

## Q5. Three-Tier Architecture
This architecture separates an application into three logical layers to make it easier to manage, scale, and secure.

| Tier | Name | Responsibility |
| :--- | :--- | :--- |
| **Tier 1** | **Presentation Layer** | The UI (Frontend) where the user interacts. |
| **Tier 2** | **Application Layer** | The "Logic" (Backend) where data is processed and rules are applied. |
| **Tier 3** | **Data Layer** | The Database (Storage) where all persistent information lives. |



> **Why use this?** It provides **scalability** (you can upgrade the database without touching the UI), **security** (the UI never talks directly to the database), and **easier maintenance** (different teams can work on different layers simultaneously).

---

## Q6. JavaScript as a Backend Language
Originally, JavaScript only lived in the browser. Thanks to **Node.js**, it is now a dominant server-side language.

* **Performance:** Node.js uses an "Asynchronous, Event-driven" model. This allows it to handle thousands of concurrent connections efficiently, making it ideal for real-time apps.
* **Ecosystem:** It utilizes **npm** (Node Package Manager), the world's largest software registry, giving developers access to millions of pre-built modules.
* **Popular Backend Frameworks:** * **Express.js:** The industry standard, minimalist framework for building APIs.
    * **NestJS:** A structured, TypeScript-based framework for scalable enterprise applications.

#Q1. Role of Frontend (FE)The Frontend is the "Client-side" of the application—essentially everything a user sees and interacts with in their browser.
-User Interface (UI): This involves the visual elements like layouts, buttons, fonts, and colors. It ensures the app is aesthetically pleasing and accessible.
-User Interaction: FE developers use languages like JavaScript to make the site "alive." This includes handling clicks, form inputs, animations, and providing immediate feedback (like a loading spinner).
-Communication with Backend: The FE doesn't have all the data. It sends "requests" to the Backend (via APIs) to fetch user profiles or save new posts, then displays that data to the user.ShutterstockExplore

#Q2. Role of Backend (BE)The Backend is the "Server-side." It’s the engine room that the user never sees but relies on for the app to function.
-Server-side Processing: While the FE handles "how things look," the BE handles "how things work." It processes requests, runs complex calculations, and manages the flow of information.
-Database Handling: The BE is responsible for CRUD operations (Create, Read, Update, Delete). It talks to the database to retrieve or store information securely.
-Security and Authentication: The BE verifies who you are. It handles login credentials, encrypts passwords, and ensures that User A cannot see User B’s private data.

#Q3. Business LogicBusiness Logic is the set of custom rules that determine how data is created, stored, and changed. It is the "brain" of the application that encodes real-world business rules into code.
-Real-World Examples:E-commerce: A rule that says, "If a customer spends over $100, apply a 10% discount and provide free shipping."Banking: A rule that prevents a withdrawal if the account balance is lower than the requested amount.
-Social Media: A rule that only allows "Friends" of a user to view their private photos.

#Q4. Client–Server ModelThis is the foundational communication structure of the internet.
-The Client: Usually your web browser (Chrome, Safari) or a mobile app. It is the requester of information.
-The Server: A powerful computer (or cloud instance) that "serves" resources or data.
-Communication: This happens via HTTP/HTTPS requests. The client sends a request (e.g., "Hey, show me this webpage"), and the server sends back a response (e.g., "Here is the HTML file" or "Error: Not Found").

#Q5. Three-Tier ArchitectureThis architecture separates an application into three logical and physical computing tiers to make it easier to manage and scale.
->TierNameResponsibility
-Tier 1Presentation LayerThe UI (Frontend) where the user interacts.
-Tier 2Application LayerThe "Logic" (Backend) where data is processed and rules are applied.
-Tier 3Data LayerThe Database (Storage) where all persistent info lives.
-Why use it? It provides scalability (you can upgrade the database without touching the UI), security (the UI never talks directly to the database), and easier maintenance (different teams can work on different layers simultaneously).

#Q6. JavaScript as a Backend LanguageOriginally, JavaScript only lived in the browser. Thanks to Node.js, it moved to the server-side.
-Performance: Node.js uses an "Asynchronous, Event-driven" model. This means it can handle thousands of concurrent connections (like a busy chat app) without slowing down.
-Ecosystem: It has npm (Node Package Manager), the world's largest software registry, giving developers access to millions of pre-built code packages.
-Popular Frameworks: * Express.js: The standard, minimalist framework for building APIs.NestJS: A more structured, enterprise-grade framework.

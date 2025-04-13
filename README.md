Shaik's Hotel Management System
===================================

This project is a **Hotel Management System** built using **Spring Boot** for the backend and **React** for the frontend. It provides a comprehensive solution for managing hotel operations, including user authentication, room management, booking management, and role-based access control.

* * * * *

Features
--------

### Backend (Spring Boot)

1.  **Authentication and Authorization**:

    -   User registration and login using JWT (JSON Web Token).
    -   Role-based access control (Admin/User).
    -   Secure endpoints with Spring Security.
2.  **Room Management**:

    -   Add, update, delete, and retrieve room details.
    -   Fetch available rooms based on check-in and check-out dates.
    -   Upload and retrieve room photos.
3.  **Booking Management**:

    -   Book rooms with guest details.
    -   Retrieve bookings by email or confirmation code.
    -   Cancel bookings.
4.  **Role Management**:

    -   Assign roles to users.
    -   Remove roles from users.
    -   Manage roles and their associated users.
5.  **Database Integration**:

    -   MySQL database for storing user, room, booking, and role data.
    -   Hibernate ORM for database operations.
6.  **Security**:

    -   JWT-based authentication.
    -   CORS configuration for frontend-backend communication.
    -   Password hashing using BCrypt.

* * * * *

### Frontend (React)

1.  **Admin Panel**:

    -   Manage rooms and bookings.
    -   Access restricted to admin users.
2.  **User Interface**:

    -   User-friendly interface for booking rooms.
    -   Login and registration forms.
3.  **Routing**:

    -   React Router for navigation between pages.
4.  **State Management**:

    -   State passed between components for seamless user experience.

* * * * *

Project Structure
-----------------

### Backend

-   **Controllers**: Handle HTTP requests and responses.

    -   [AuthController](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html): User authentication (login/register).
    -   [RoomController](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html): Room management.
    -   [BookingController](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html): Booking management.
    -   [RoleController](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html): Role management.
    -   [UserController](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html): User management.
-   **Services**: Business logic for the application.

    -   [UserService](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html): User-related operations.
    -   [RoomService](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html): Room-related operations.
    -   [BookingService](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html): Booking-related operations.
    -   [RoleService](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html): Role-related operations.
-   **Repositories**: Data access layer using Spring Data JPA.

    -   [UserRepository](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html), [RoleRepository](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html), [BookingRepository](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html), etc.
-   **Security**:

    -   [JwtUtils](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html): Generate and validate JWT tokens.
    -   [WebSecurityConfig](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html): Configure Spring Security.
    -   [CorsConfig](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html): Configure CORS for frontend-backend communication.
-   **Models**: Represent database entities.

    -   [User](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html), [Role](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html), [Room](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html), [BookedRoom](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html), etc.
-   **Responses**: Custom response objects for API responses.

    -   [LoginResponse](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html), [RoomResponse](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html), [BookingResponse](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html).
-   **Database**:

    -   MySQL database configured in [application.properties](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html).

### Frontend

-   **Components**:

    -   [Admin.jsx](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html): Admin panel for managing rooms and bookings.
    -   Other components for user interface and navigation.
-   **Configuration**:

    -   [vite.config.js](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html): Vite configuration for React.
    -   [.eslintrc.cjs](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html): ESLint configuration for code quality.

* * * * *

Installation and Setup
----------------------

### Prerequisites

-   **Java 17** or higher.
-   **Node.js** and **npm**.
-   **MySQL** database.

### Backend Setup

1.  Clone the repository:

    git clone <repository-url>

    cd spring-boot-hotel

2.  Configure the database:

    -   Update [application.properties](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html) with your MySQL credentials.
3.  Build and run the backend:

    ./mvnw spring-boot:run

4.  The backend will run on [http://localhost:9192](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html).

### Frontend Setup

1.  Navigate to the frontend directory:

    cd hotel-app-client/hotel-react-app

2.  Install dependencies:

    npm install

3.  Start the development server:

    npm run dev

4.  The frontend will run on [http://localhost:5173](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html).

* * * * *

API Endpoints
-------------

### Authentication

-   [POST /auth/register-user](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html): Register a new user.
-   [POST /auth/login](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html): Login and receive a JWT token.

### Room Management

-   [GET /room/all-rooms](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html): Retrieve all rooms.
-   [GET /room/available-rooms](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html): Retrieve available rooms.
-   [POST /room/add/new-room](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html): Add a new room (Admin only).
-   [PUT /room/update-room/{roomId}](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html): Update room details (Admin only).
-   [DELETE /room/delete-room/{roomId}](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html): Delete a room (Admin only).

### Booking Management

-   [POST /bookings/room/booking/{roomId}](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html): Book a room.
-   [GET /bookings/user/{email}/bookings](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html): Get bookings by user email.
-   [GET /bookings/confirmation/{confirmationCode}](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html): Get booking by confirmation code.
-   [DELETE /bookings/booking/{bookingId}/delete](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html): Cancel a booking.

### Role Management

-   [POST /roles/assign-user-to-role](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html): Assign a role to a user.
-   [POST /roles/remove-user-from-role](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html): Remove a role from a user.
-   [GET /roles/all](vscode-file://vscode-app/c:/Users/GIRIDHAR/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html): Get all roles.

* * * * *

Technologies Used
-----------------

### Backend

-   **Spring Boot**: Framework for building the backend.
-   **Spring Security**: Authentication and authorization.
-   **Hibernate**: ORM for database operations.
-   **MySQL**: Relational database.
-   **JWT**: Token-based authentication.

### Frontend

-   **React**: Frontend library for building the user interface.
-   **Vite**: Build tool for React.
-   **React Router**: Navigation and routing.

* * * * *

Security Features
-----------------

-   **JWT Authentication**: Secure token-based authentication.
-   **Role-Based Access Control**: Restrict access to endpoints based on roles.
-   **Password Hashing**: Secure storage of user passwords using BCrypt.
-   **CORS Configuration**: Allow frontend-backend communication.

* * * * *

Future Enhancements
-------------------

-   Add email notifications for booking confirmations.
-   Implement payment gateway integration.
-   Add more detailed analytics for admin users.

* * * * *

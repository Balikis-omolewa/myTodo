<h1>My Todo App</h1><br/>

Welcome to **My Todo App**, a modern and intuitive task management application designed to help you stay organized and productive. This README provides an overview of the features, installation instructions, and challenges faced during development.

<h2>Features</h2><br/>

1. **Splash Screen**
   - A visually appealing splash screen welcomes users when they first open the app.
   - Includes a call-to-action button to transition to the login form.

<h2>User Authentication</h2><br/>
   - Login Form: Allows users to create an account and log in with their name and email.
   - User data is stored in local storage for session management.

<h2>Task Management</h2><br/>
   - Add Tasks: Users can add tasks with a title, description, and due date.<br/>
   - Edit Tasks: Update existing tasks with new details, including the start date and due date.<br/>
   - Delete Tasks: Remove tasks with a confirmation prompt.<br/>
   - Mark Tasks as Completed**: Toggle the completion status of tasks.<br/>
   - Preview Tasks: View detailed information about tasks in a modal.

### 4. **Task Filtering**
   - **Pending Tasks**: View tasks that are yet to be completed.
   - **Completed Tasks**: View tasks that have been marked as completed.
   - **Show More**: Option to expand and view more tasks in each category.

### 5. **User Experience Enhancements**
   - **Welcome Message**: Personalized greeting with the user's name.
   - **Responsive Design**: Optimized for various screen sizes and devices.
   - **Visual Indicators**: Use of colors and icons for better task management.
   - **Task Preview**: Detailed view of tasks in a modal to see more information.

## Installation

To get started with **My Todo App**, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Balikis-omolewa/myTodo/
   ```

2. **Navigate to the Project Directory**
   ```bash
   cd my-todo-app
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Start the Development Server**
   ```bash
   npm start
   ```

   Open `http://localhost:3000` in your browser to view the app.


## Challenges Faced

### 1. **State Management and Navigation**
   - Implementing a splash screen with smooth transitions to the login form and then to the main app required careful state management. Ensuring the app correctly handles screen transitions and user sessions was challenging.

### 2. **Local Storage Integration**
   - Managing user data and task information with local storage posed challenges, particularly in ensuring data integrity and synchronization between the UI and local storage.

### 3. **Form Handling**
   - Updating and validating form inputs, especially with date fields and user information, required extensive testing to ensure that data was correctly captured and displayed.

### 4. **Dynamic Content Display**
   - Implementing features like "Show More" for tasks and ensuring the UI updates dynamically as tasks are added, edited, or deleted required thorough testing and optimization.


## Future Improvements

- **User Authentication Enhancements**: Adding features such as password protection and user registration.
- **Advanced Task Management**: Integrating task categories, priorities, and notifications.
- **Mobile Optimization**: Further optimizing the app for mobile devices with additional responsive design adjustments.

## Contributing

Contributions are welcome! If you have suggestions or find issues, please open an issue or submit a pull request. Follow the [contributing guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to adjust any details to better match your project or personal preferences!

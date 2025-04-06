
Built by https://www.blackbox.ai

---

```markdown
# Vegetarian Meal Planner 3.0 

A simple web-based application that helps you plan vegetarian meals from different food groups. Spin the wheel daily to discover one dish from each food group, and manage your meal groupings and dishes dynamically.

## Project Overview

This project serves as a vegetarian meal planning tool, utilizing a node.js backend with WebSocket support for real-time communication and an interactive frontend built with HTML and JavaScript. Users can generate a weekly meal plan, add new groups and dishes, edit or remove existing dishes, and reset the plan easily.

## Installation

To run the Vegetarian Meal Planner locally, you need to have Node.js installed on your machine.

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd vegetarian-meal-planner
   ```

2. **Install dependencies**:
   Use npm to install the necessary dependencies.
   ```bash
   npm install
   ```

3. **Start the server**:
   Run the application using the following command:
   ```bash
   npm start
   ```

4. **Access the application**:
   Open your browser and navigate to `http://localhost:3000`.

## Usage

Once the application is running, you can use the following features:

- **Generate Meal Plan**: Click the "🎲 Generate Plan" button to randomly generate one dish from each food group for a weekly meal plan.
- **Reset Meal Plan**: Click the "🗑 Reset" button to clear the current meal plan.
- **Add New Food Group**: Enter a new group name and click "Add Group" to create a new food group.
- **Add New Dish**: Select a food group, input a dish name, and click "Add Dish" to include it in the selected group.
- **Edit or Remove a Dish**: Select a food group, choose a dish to edit, input a new name, and click "Edit". To remove a dish, select it and click "Remove".
- **Remove Food Group**: Select a group from the dropdown and click "Remove Group" to delete it.

## Features

- WebSocket support for live updates across connected clients.
- Easily add, edit, or remove food groups and dishes.
- Automatically generates a surprise weekly meal plan every day.
- Responsive design using Tailwind CSS for a modern UI.

## Dependencies

This project uses the following Node.js dependencies as defined in `package.json`:

- `express`: Fast, unopinionated, minimalist web framework for Node.js.
- `ws`: Simple to use WebSocket client and server for Node.js.

## Project Structure

The project consists of the following key files:

```
/vegetarian-meal-planner
├── server.js               # Server-side application entry point.
├── index.html              # Frontend HTML interface for the meal planner.
├── package.json            # Node.js dependencies and project metadata.
└── package-lock.json       # Dependencies version lock file for npm.
```

### Server Code (server.js)

- Sets up an Express server and WebSocket server for real-time data synchronization.
- Manages food groups and dishes in a shared data store and provides methods for updating and broadcasting changes to connected clients.

### Client Code (index.html)

- Contains the layout and client-side logic for interacting with the server via WebSocket.
- Provides UI elements for user interactions like generating meal plans, adding/removing dishes, and managing groups.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue if you find any bugs or have feature suggestions.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
```
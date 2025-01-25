
# Doom Fire with Next.js

This project is an implementation of the classic Doom fire effect using React and Next.js. It simulates the dynamic propagation of flames, recreating the nostalgic visual aesthetic of the original Doom game.

## Features

- **Doom Fire Simulation**: Recreates the pixelated fire effect characteristic of the Doom game, with dynamic flame propagation.
- **Customizable Configuration**: Allows adjustment of parameters such as width, height, and fire color palette for personalized simulation.
- **Debug Mode**: Includes a debug mode that displays detailed information about the fire intensity at each pixel, useful for educational and development purposes.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for rapid and efficient styling.
- **TypeScript**: Superset of JavaScript that adds static typing to the code.

## Getting Started

1. **Prerequisites**: Ensure that Node.js is installed on your machine.

2. **Install Dependencies**:
   Run the following command to install the project dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Start the Development Server**:
   Launch the development server with the command:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```
   The application will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

- **`/public`**: Contains static assets such as images and icons.
- **`/src`**: Includes the application source code, organized into React components and styles.
- **`/src/app`**: Contains the main components of the application, including the fire simulation.
- **`/src/styles`**: Styling files using Tailwind CSS.

## Customization

You can adjust the fire simulation settings by modifying the parameters in the `appConfig` file located at `/src/constants/app-config.ts`. For example, you can change the width, height, and color palette of the fire to create different visual effects.

## Contribution

Contributions are welcome! Feel free to open issues or submit pull requests for improvements or fixes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.

This project is an excellent opportunity to learn about algorithm-based animations and the use of modern frameworks like React and Next.js to create dynamic visual effects on the web.

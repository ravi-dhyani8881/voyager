# Use the official Node.js 18 image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port the app runs on (adjust according to your app)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]

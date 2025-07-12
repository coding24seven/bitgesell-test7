# Use official Node.js image as base
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json for both apps
COPY backend/package*.json ./backend/
COPY frontend/package*.json ./frontend/

# Install dependencies for both backend and frontend
RUN cd backend && npm install
RUN cd frontend && npm install

# Copy the rest of the application code
COPY backend ./backend
COPY frontend ./frontend
COPY data ./data

# Expose ports for backend (3001) and frontend (3000)
EXPOSE 3001 3000

# Copy a startup script
COPY start.sh .
RUN chmod +x start.sh

# Start both apps
CMD ["./start.sh"]

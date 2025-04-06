const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Shared data store
let foodGroups = {
  "North Indian": ['Paneer Butter Masala', 'Dal Makhani', 'Chole'],
  "South Indian": ['Dosa', 'Idli', 'Sambar'],
  "East Indian": ['Aloo Posto', 'Litti Chokha', 'Cholar Dal'],
  "West Indian": ['Dhokla', 'Pav Bhaji', 'Bhel Puri'],
  "Junk Food": ['Pani Puri', 'Samosa', 'Veg Pizza']
};

// WebSocket handlers
wss.on('connection', (ws) => {
  console.log('New client connected');
  
  ws.on('message', (message) => {
    console.log('Received message:', message);
    const data = JSON.parse(message);
    switch (data.type) {
      case 'UPDATE':
        updateData(data.payload);
        broadcastData();
        break;
      default:
        console.log('Unknown message type:', data.type);
    }
  });

  // Send initial data on connection
  ws.send(JSON.stringify({ type: 'INIT', payload: foodGroups }));
});

function updateData(changes) {
  // Implement data updates here
  foodGroups = changes; // Update the foodGroups with the new data
  console.log('Updated foodGroups:', foodGroups);
}

function broadcastData() {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ type: 'UPDATE', payload: foodGroups }));
    }
  });
}

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
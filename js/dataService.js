"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchJsonData = fetchJsonData;
const jsonFilePath = 'http://localhost:3000/rooms';
async function fetchJsonData() {
    try {
        const response = await fetch(jsonFilePath);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    }
    catch (error) {
        console.error('Error loading JSON data:', error);
        throw error;
    }
}

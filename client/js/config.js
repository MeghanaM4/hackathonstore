/**
 * Configuration module for the Hackathon Hardware Store Client
 * Centralizes configuration variables
 */

const Config = {
  // By default, we'll connect to local development server
  API_BASE_URL: 'https://localhost:3000',
  
  // Default to empty admin code - should be provided at login time
  ADMIN_CODE: '',
  
  // Environment-specific configuration
  production: {
    API_BASE_URL: 'https://hackathonstore.onrender.com/hackathon',
  },
  
  // Get environment-specific configuration or default
  get(key) {
    // Use the isProduction method for consistency
    const isProd = this.isProduction();
    
    // Return environment-specific value or default
    return isProd && this.production[key] ? this.production[key] : this[key];
  },
  
  // Determine if we're running in production or development
  isProduction() {
    const hostname = window.location.hostname;
    // Check for both localhost and 127.0.0.1 (IPv4 loopback) and ::1 (IPv6 loopback)
    return hostname !== 'localhost' && hostname !== '127.0.0.1' && hostname !== '[::1]';
  }
};

// Log environment message to console
const envMessage = Config.isProduction() ? 'Hello, prod' : 'Hello, dev';
console.log(envMessage);

// For convenience, export both the raw config and the getter
export default Config;
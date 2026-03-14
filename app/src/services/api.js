class ApiService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getPosts() {
    return this.get('/posts');
  }

  async get(endpoint) {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`);

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error while processing the request:', error);
      throw error;
    }
  }
}

export const api = new ApiService('https://jsonplaceholder.typicode.com');

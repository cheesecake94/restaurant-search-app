import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer vobShGmku8YhhJm6IVJiGjREz99YDaiLzyDgFtLFrVyxZRppLlUNj9KeoL1GIzcQ0wq-WWInYB0k-UX27blp-_QUjlkNyu47nGJqO65vSVnqZf98YmTAFshE4YtlYHYx'
  }
});
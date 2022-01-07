import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer -LCpfxIURZql980pvCTf1lIUzkzRb9THkFgDY9DyrVSlzqT9dygbKNhyky_gYvyLqikjTGZHI-01WfnxQNqDNv7dDi6gA55kEkd0rCKgjbsXvWFvyu9tQpTd6GHWYXYx',
  },
});

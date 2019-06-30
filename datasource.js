import { RESTDataSource } from 'apollo-datasource-rest';

export class PortfolioAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://portfolio-voltis.herokuapp.com';
  }

  async getPortfolio() {
    return await this.get('/');
  }
}

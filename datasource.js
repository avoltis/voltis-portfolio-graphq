import { RESTDataSource } from 'apollo-datasource-rest';

export class PortfolioAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://portfolio-voltis.herokuapp.com';
  }

  async getPortfolio() {
    const jsonResp = await this.get('/');
    return jsonResp.data;
  }
}

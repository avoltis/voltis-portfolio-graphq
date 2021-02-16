import { PortfolioAPI } from "./datasource";
import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type certifications {
    name: String
    issuingOrganization: String
    issueDate: String
    expirationDate: String
    credentialID: String
    credentialUrl: String
  }

  type education {
    university: String
    degree: String
    startYear: String
    endYear: String
    timeLine: String
    present: Boolean
    fieldOfStudy: String
    address: String
  }

  type experience {
    company: String
    title: String
    startDate: String
    endDate: String
    timeLine: String
    present: Boolean
    description: String
    address: String
  }

  type social {
    github: String
    linkedIn: String
    email: String
  }

  type data {
    firstName: String
    lastName: String
    title: String
    address: String
    summary: String
    social: social
    resume: String
    experience: [experience]
    education: [education]
    certifications: [certifications]
    skills: [String]
    topSkills: [String]
    languages: [String]
  }

  type Query {
    getPortfolio: data
  }
`;

const resolvers = {
  Query: {
    getPortfolio: (root, args, { dataSources }) =>
      dataSources.portfolioAPI.getPortfolio(),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    portfolioAPI: new PortfolioAPI(),
  }),
  introspection: true,
  playground: true,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});


import { Page } from "@/interfaces/hygraph.interface";
import { GraphQLClient, gql } from "graphql-request";

const hygraph_endpoint = "https://eu-west-2.cdn.hygraph.com/content/cluhhe6ol2j2207vxwns363fd/master"

const graphQLClient = new GraphQLClient(hygraph_endpoint!);
interface GraphClientResponse {
  pages: Page
}

export const getHomePage = async (locale: string): Promise<GraphClientResponse> => {
  const query = gql`
  query MyQuery($locale: Locale!) {
    pages(locales: [$locale]) {
      meta {
        title
        desc
        siteName
        ogSiteName
        ogDesc
        __typename
      }
      navBar {
        logo {
          url
        }
        ctas {
          label
          link
        }
      }
      dynamicZone {
        ... on IntroSection {
          __typename
          title
          careerRole {
            raw
          }
          introParagraph {
            raw
          }
          contact_me {
            label
            link
          }
        }
        ... on AboutSection {
          __typename
          title
          aboutParagraph {
            raw
          }
          useFullLinks
          usedStacks {
            title
            stack
          }
        }
        ... on ProjectSection {
          __typename
          title
          projectItems {
            name
            summary {
              raw
            }
            fullDescription {
              raw
            }
            projectBanner {
              url
            }
            githubLink
            demoLink
            techStack
          }
        }
        ... on ExperienceSection {
          __typename
          title
          experienceItems {
            companyName
            role
            period
            roleDescription
            techSkills
          }
        }
        ... on ContactSection {
          __typename
          title
          contactMeParagraph {
            raw
          }
        }
      }
    }
  }
`;
  const response = graphQLClient.request(query, { locale });
  return response as unknown as GraphClientResponse;
}




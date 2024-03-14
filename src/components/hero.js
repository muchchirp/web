//hero.js
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import {
  Box,
  ButtonList,
  Container,
  Flex,
  Heading,
  Kicker,
  Section,
  Text,
  Subhead,
  whiteBox,
  boxWidths
} from "./ui"



export default function Hero(props) {
  console.log(props); // This line will log the props to the console
  const imageAlt = props.image?.alt ? props.image.alt : '';
  const { bsubhead, btext, bcontent } = props;

  return (
    <Section>
      <Container>
        <Flex gap={4} variant="responsive">
          <Box width="half">
            {props.image && (
              <GatsbyImage
                alt={imageAlt}
                image={getImage(props.image.gatsbyImageData)}
              />
            )}
          </Box>
          <Box width="half">
            <Heading as="h1">
              {props.kicker && <Kicker>{props.kicker}</Kicker>}
              {props.h1}
            </Heading>
            <Text as="p">{props.text}</Text>
            <ButtonList links={props.links} />
          </Box>
        </Flex>


      {/* New Section for bcontent */}
      <Section>
        <Kicker style={{ paddingBottom: '20px' }}>{bsubhead}</Kicker>
          <Flex gap={4} variant="start" wrap>
            {bcontent.map((item, index) => (
              <Box key={index} style={{ width: 'calc(30% - 6px)', backgroundColor: '#F5F8FE', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', }} className={whiteBox}>
                {item.image && item.image.gatsbyImageData && (
                  <GatsbyImage
                    image={getImage(item.image.gatsbyImageData)}
                    alt={item.text}
                    style={{ height: '24px', width: '24px' }}
                  />
                )}
                <Text>{item.text}</Text>
              </Box>
            ))}
          </Flex>

        <Text center as="p" style={{ paddingTop: '20px' }}>{btext}</Text>
      </Section>


      </Container>
    </Section>
  )
}


export const query = graphql`
  fragment HomepageHeroContent on HomepageHero {
    ... on SanityHomepageHero {
      bcontent {
        image {
          gatsbyImageData
        }
        text
      }
      bsubhead
      btext
    }
    id
    kicker
    h1: heading
    subhead
    text
    links {
      id
      href
      text
    }
    image {
      id
      gatsbyImageData
      alt
    }

  
    
  }
`

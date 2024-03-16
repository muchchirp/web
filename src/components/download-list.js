//download.js
import * as React from "react"
import { graphql } from "gatsby"
import { Space, Container, Section, FlexList, Text, Logo } from "./ui"

export function DownloadItem(props) {
  if (!props.image) return null

  return (
    <Logo alt={props.alt} image={props.image.gatsbyImageData} size="medium" />
  )
}

export default function DownloadList(props) {
  console.log(props); // This line will log the props to the console

  return (
    <Section paddingY={4}>
      <Container width="narrow">
        {props.text && (
          <Text center variant="lead">
            {props.text}
          </Text>
        )}
        <Space size={4} />
        <FlexList gap={4} variant="center">
          {props.downloads.map(
            (download) =>
            download && (
                <li key={download.id}>
                  <DownloadItem {...download} />
                </li>
              )
          )}
        </FlexList>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageDownloadListContent on HomepageDownloadList {
    id
    text
    downloads {
      id
      alt
      image {
        id
        gatsbyImageData
        alt
      }
    }
  }
`

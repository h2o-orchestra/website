import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import {Layout} from "../components/Layout";
import {NextConcert} from "../components/NextConcert";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
        <div className="bg-main-back bg-no-repeat bg-center bg-content h-1/2">
            <NextConcert />
        </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

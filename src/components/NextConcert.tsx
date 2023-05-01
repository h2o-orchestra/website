import * as React from "react"
import {graphql, useStaticQuery} from "gatsby";

const now = new Date().toISOString();

export const NextConcert: () => JSX.Element = () => {
    const {allContentfulConcert} = useStaticQuery(graphql`
        {
        allContentfulConcert {
            edges {
                node {
                    title
                    date
                }
            }
        }
    }
      `);

    const nextConcert = allContentfulConcert.edges.filter(edge => Date.parse(edge.node.date) >= new Date()).shift();

    return (
        <div className="prose prose-invert">
            {nextConcert &&
                <>
                    <h1>{nextConcert.node.title}</h1>
                    <p>{nextConcert.node.date}</p>
                </>
            }

        </div>
    );

}
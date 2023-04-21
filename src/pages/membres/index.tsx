import * as React from "react";
import {Layout} from "../../components/Layout";
import {useAuth0, User} from "@auth0/auth0-react";
import {withAuthenticationRequired} from '@auth0/auth0-react';
import {graphql, useStaticQuery} from 'gatsby'


type MemberProps = {
    user: User
}

const instrumentMessage: Map<string, Array<string>> = new Map([
    ["trompette", ["Un trompettiste ! Trois piston et deux neurones :)",
        "Toux sèche, trompette de la mort."]],
]);

function getQuote(instrument: string): string {
    if (instrumentMessage.has(instrument)) {
        const items = instrumentMessage.get(instrument);
        return items[Math.floor(Math.random() * items.length)];
    } else {
        return "Pas d'instrument assigné ... pas de partitions !"
    }
}

type Nodes = {
    node: {
        instrument: string,
        lien: string
    }
}

function getDriveLink(links: Array<Nodes>, instrument: string): string {
    console.log(`Searching for ${instrument}`, links)
    return links.find(item => item.node.instrument === instrument)?.node.lien
}

const MemberPage: () => JSX.Element = () => {
    const {allContentfulDrive} = useStaticQuery(graphql`
  query {
  allContentfulDrive {
    edges {
      node {
        instrument
        lien
      }
    }
  }
}
`);
    const [quote, setQuote] = React.useState("");
    const [link, setLink] = React.useState("");
    const {user, getIdTokenClaims} = useAuth0();
    React.useEffect(() => {
        const fetchInstrument = async () => {
            const claim = await getIdTokenClaims();
            let resolvedInstrument = claim ? claim["https://orchestre-h2o.fr/instrument"] : "none";
            setQuote(getQuote(resolvedInstrument));
            setLink(getDriveLink(allContentfulDrive.edges, claim ? claim["https://orchestre-h2o.fr/instrument"] : "none"));
        }
        fetchInstrument();
    }, [])

    return (
        <Layout>
            <div className="prose prose-invert">
                <h1>Bienvenue {user?.name}</h1>
                <p>{quote}</p>
                <a href={link}>Partitions</a>
            </div>
        </Layout>
    )
}

export default withAuthenticationRequired(MemberPage);
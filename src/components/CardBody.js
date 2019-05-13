import React from 'react';
import styled from 'styled-components';
import Variables from '../variables';

const H1 = styled.h1`
    font-size: 2em;
    font-weight: 700;
`;
const IMG = styled.img`
    max-height: 150px;
    max-width: auto;
`;
const A = styled.a`
    color: ${Variables.darkGrey};
    &:hover {
        color: ${Variables.blue};
    }
`;

const CardBody = ({data}) => {
    return (
        <section>
            <H1>{data.name}</H1>
            <IMG src={data.avatar_url} alt="Avatar" />
            <h3>{data.login}</h3>
            <p>{data.bio}</p>
            <p>Followers: {data.followers} | Following: {data.following}</p>
            <p>Repos: {data.public_repos}</p>
            <p><A href={data.html_url} target="_blank">Github site</A></p>
        </section>
    );
};
export default CardBody;

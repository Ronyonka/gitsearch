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
            <p>{data.bio}</p>
            <p><strong>{data.login}</strong></p>
            <p><A href={data.blog}>Website</A></p>
            <p><A href={data.html_url}>Github site</A></p>
        </section>
    );
};
export default CardBody;

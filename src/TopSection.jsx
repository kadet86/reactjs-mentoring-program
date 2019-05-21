// @flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {
    children?: React.Node,
};

const Section = styled.section`
    position: relative;
    padding-top: 40px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-image: url('http://i.imgur.com/1lAdGBz.jpg');
    background-size: cover;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    background: black;
    opacity: 0.8;
`;

const InnerContainer = styled.div`
    width: 700px;
    color: white;
    z-index: 1;
`;

const TopSection = ({ children }: Props) => (
    <Section>
        <Overlay />
        <InnerContainer>{children}</InnerContainer>
    </Section>
);

export default TopSection;

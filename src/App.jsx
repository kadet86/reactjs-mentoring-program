// @flow
import * as React from 'react';
import styled from 'styled-components';
// import '../node_modules/primereact/resources/themes/nova-light/theme.css';
// import './main.css';

type Props = {
    children?: React.Node,
};

const MainSection = styled.main`
    display: flex;
    width: 900px;
`;

const App = ({ children }: Props) => {
    return <MainSection>{children}</MainSection>;
};

export default App;

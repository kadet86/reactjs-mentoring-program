// @flow
import * as React from 'react';

type Props = {
    children: React.Node,
};
type State = {
    error?: Error,
};

export default class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {};
    }

    static getDerivedStateFromError(error: Error) {
        return { error };
    }

    componentDidCatch(error: Error, info: any) {
        console.error(error, info);
    }

    render() {
        if (this.state.error) {
            return <h1>Something went wrong...</h1>;
        }

        return this.props.children;
    }
}

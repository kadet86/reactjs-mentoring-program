import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    static getDerivedStateFromError(error) {
        return {error};
    }

    componentDidCatch(error, info) {
        console.error(error, info);
    }

    render() {
        if (this.state.error) {
            return <h1>Something went wrong...</h1>;
        }

        return this.props.children;
    }
}

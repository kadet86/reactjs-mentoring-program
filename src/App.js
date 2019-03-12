import React, {Component, PureComponent} from 'react';

const noJsxElement = React.createElement('h3', {style: {color: "red"}}, 'Hello from no jsx element');

class HelloPure extends PureComponent {
    render() {
        return <h3 {...this.props}>Hello from pure component</h3>;
    }
}

function HelloFunc(props) {
    return <h3 {...props}>Hello from functional component</h3>;
}

export default class App extends Component {
    render() {
        return (
            <section>
                <h1>App Component header</h1>
                {noJsxElement}
                <HelloPure style={{color: "orange"}} />
                <HelloFunc style={{color: "green"}} />
            </section>
        );
    }
}

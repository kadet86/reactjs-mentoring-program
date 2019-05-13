import Router from 'next/router';
import React from 'react';

export default class extends React.Component {
    static async getInitialProps({ ctx }) {
        const { res } = ctx;
        if (res) {
            res.writeHead(302, {
                Location: '/search',
            });
            res.end();
        } else {
            Router.push('/search');
        }
        return {};
    }
}

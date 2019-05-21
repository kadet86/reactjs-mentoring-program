import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import TopSection from '../TopSection';
import SortBy from '../SortBy';

storiesOf('Welcome', module).add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
  .add('with text', () => (
        <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
        <Button onClick={action('clicked')}>
            <span role="img" aria-label="so cool">
                😀 😎 👍 💯
            </span>
        </Button>
  ));

storiesOf('TopSection', module)
  .add('with text', () => <TopSection>Some text in top section</TopSection>)
  .add('with child elements', () => (
        <TopSection>
            <h1>h1 top section</h1>
            <h2>h2 too</h2>
        </TopSection>
  ));

storiesOf('SortBy', module).add('with onSortByChange handler', () => (
    <SortBy sortBy="vote_average" onSortByChange={action('sortBy change')} />
));

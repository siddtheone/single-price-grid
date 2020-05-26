import React from 'react';
import * as St from './components/Styled';

function App() {
  const WHYUS = [
    'Tutorials by industry experts',
    'Peer & expert code review',
    'Coding exercises',
    'Access to our GitHub repos',
    'Community forum',
    'Flashcard decks',
    'New videos every week',
  ]
  return (
    <St.App>
      <St.GlobalStyle />
      <St.PaddedContainer>
        <St.Title>Join our community</St.Title>
        <St.SubTitle>30-day, hassle-free money back guarantee</St.SubTitle>
        <St.Desc>Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</St.Desc>
      </St.PaddedContainer>
      <St.Row>
        <St.Monthly>
          <St.SectionTitle>Monthly Subscription</St.SectionTitle>
          <St.FormattedP><strong>$29</strong>  per month</St.FormattedP>
          <p>Full access for less than $1</p>
          <St.SingUp>Sign Up</St.SingUp>
        </St.Monthly>
        <St.WhyUs>
          <St.SectionTitle>Why Us</St.SectionTitle>
          <St.List>
            {WHYUS.map((e, i) => <li key={i}>{e}</li>)}
          </St.List>
        </St.WhyUs>
      </St.Row>
    </St.App>
  );
}

export default App;

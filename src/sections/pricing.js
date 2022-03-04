/** @jsx jsx */
import { useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { jsx, Grid, Box, Container, Flex, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import PriceCard from 'components/cards/price-card';
import { rgba } from 'polished';
import { keyframes } from '@emotion/core';

import userIcon from 'assets/images/icons/two-users.png';
import userIcon2 from 'assets/images/icons/three-users.png';
import database from 'assets/images/icons/databases.png';
import server from 'assets/images/icons/server.png';
import frontend from 'assets/images/icons/frontend.png';
import frontendBlack from 'assets/images/icons/frontend-black.png';
import css from 'assets/images/icons/css.png';

const monthlyPricing = [
  {
    id: 1,
    icon: frontend,
    title: 'Starter Pack',
    amount: 49.99,
    isRecommended: false,
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Angular',
      },
      {
        id: 2,
        isAvailable: true,
        title: `Reactjs`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `React Native`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Graphql`,
      },
    ],
  },
  {
    id: 2,
    icon: frontendBlack,
    title: 'Family Pack',
    amount: 89.99,
    isRecommended: true,
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Ultimate access to all course, exercises and assessments',
      },
      {
        id: 2,
        isAvailable: true,
        title: `Free access for all kind of exercise corrections with downloads.`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Total assessment corrections with free download access system`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Unlimited download of courses on the mobile app contents`,
      },
    ],
  },
];

const annualPricing = [
  {
    id: 1,
    icon: server,
    title: 'Server',
    amount: 49.99 * 12 - 10,
    isRecommended: false,
    features: [
      {
        id: 2,
        isAvailable: true,
        title: `Node JS`,
      },
      {
        id: 1,
        isAvailable: true,
        title: 'Nest.js',
      },
      {
        id: 3,
        isAvailable: true,
        title: `Django`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `GoLang`,
      },
    ],
  },
  {
    id: 2,
    icon: database,
    title: 'Databases',
    amount: 89.99 * 12 - 10,
    isRecommended: true,
    features: [
      {
        id: 4,
        isAvailable: true,
        title: `MongoDB`,
      },
      {
        id: 2,
        isAvailable: true,
        title: `MySQL`,
      },
      {
        id: 1,
        isAvailable: true,
        title: 'FaunaDB',
      },
      {
        id: 3,
        isAvailable: true,
        title: `Firebase(Realtime Databases)`,
      },
    ],
  },
];

const Pricing = () => {
  const [plan, setPlan] = useState({
    active: 'monthly',
    data: monthlyPricing,
  });

  const handlePlan = (plan) => {
    if (plan === 'monthly') {
      setPlan({
        ...plan,
        active: 'monthly',
        data: monthlyPricing,
      });
    }
    if (plan === 'yearly') {
      setPlan({
        ...plan,
        active: 'yearly',
        data: annualPricing,
      });
    }
  };

  return (
    <Box id="skills" as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Tech Stack"
          title="Minha pilha de tecnologias"
        />
        <Flex sx={styles.priceSwitcher}>
          <Button
            variant="text"
            className={plan?.active === 'monthly' ? 'active' : ''}
            onClick={() => handlePlan('monthly')}
          >
            Front End
          </Button>
          <Button
            variant="text"
            className={plan?.active === 'yearly' ? 'active' : ''}
            onClick={() => handlePlan('yearly')}
          >
            Back End
          </Button>
        </Flex>
        <Grid sx={styles.grid}>
          {plan?.data?.map((price, index) => (
            <PriceCard price={price} key={`${plan.active}-${index}`} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const styles = {
  section: {
    backgroundColor: '#020718',
    pt: [60],
    pb: [100, 100, 100, 80],
  },
  heading: {
    color: '#fff',
    mb: 20,
    p: {
      color: '#fff',
    },
  },
  priceSwitcher: {
    borderRadius: '5px',
    border: `1px solid ${rgba('#FFFFFF', 0.2)}`,
    margin: ['0 auto 30px', '0 auto 30px', '0 auto 30px', '0 auto 60px'],
    maxWidth: [255, 255, 255, 300],
    p: 2,
    button: {
      minHeight: ['40px', '40px', '40px', '48px'],
      px: ['18px', '18px', '18px', '25px'],
      fontSize: [14, 14, 14, 16],
      fontWeight: 500,
      color: 'white',
      '&.active': {
        backgroundColor: '#fff',
        color: 'text',
      },
      ':focus': {
        outline: '0 none',
      },
    },
  },
  grid: {
    gap: ['60px 30px'],
    display: 'grid',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 340px)',
      'repeat(2, 430px)',
      'repeat(2, 440px)',
      'repeat(2, 480px)',
    ],
    justifyContent: 'center',
    '.priceCard': {
      '.priceHeader': {
        animation: `${fadeIn} 0.8s linear`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s linear`,
      },
      '.priceAmount': {
        animation: `${fadeIn} 0.9s linear`,
      },
      '.priceButton': {
        animation: `${fadeIn2} 0.7s linear`,
      },
    },
  },
};

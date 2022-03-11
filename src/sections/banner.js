/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Button, Input } from 'theme-ui';
import { useState, useEffect } from 'react';
import { rgba } from 'polished';

import Select from 'components/select';
import bannerBg from 'assets/images/banner-bg.jpg';
import mapMarker from 'assets/images/icons/map-marker.png';
import { getMyCV } from 'service/form.service';
import { toast } from 'react-toastify';

const options = [
  {
    id: 1,
    label: 'Brooklyn, New york',
    value: 'Brooklyn, New york',
  },
  {
    id: 2,
    label: 'Atlanta, Georgia',
    value: 'Atlanta, Georgia',
  },
  {
    id: 3,
    label: 'Minneapolis, Minnesota',
    value: 'Minneapolis, Minnesota',
  },
  {
    id: 4,
    label: 'Chicago, Illinois',
    value: 'Chicago, Illinois',
  },
];

export default function Banner() {
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e) => {
    setLoader(true)
    e.preventDefault();
    
   
   const email = e.target.email.value;
   const data = {
     email
   };
   await e.target.reset();

    

   try {
    const snap = await  getMyCV(data);
     
     

     if(snap.data.errors === 'email should be valid') {
      setLoader(false);

      return   toast.error('Your email should be valid')
     }
     if(snap.data.errors) {
      setLoader(false);
      
      return   toast.error('Sorry, sommething went wrong, please try again.')
     }

     else {
      setLoader(false);
      
     
      return toast.success(`Thanks. Please receive my cv in your email.
       `);
     }

   } catch (error) {
    setLoader(false);
    return   toast.error('Sorry, sommething went wrong, please try again.')
   }
  
  };

  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.bannerContent}>
            <Heading as="h1" sx={styles.heroTitle}>
            Hi, I'm Francisco Jaime Inoque.
            </Heading>
            <Text as="p" sx={styles.desc}>
            I'm Full Stack Developer, specialist in Back-End Development with Node.js. In Front-End I work with Angular, React.js and Next.js.
            <br/>

            <strong>Enter your email and get my CV.</strong>
            </Text>
            <Box as="form" onSubmit={handleSubmit}>
              <Input name="email" placeholder="Enter your email" style={{color: "#000", borderColor: "#000"}} />
              <Button type="submit" sx={styles.button} variant="primary">
                {loader? "Please Wait...": "Get My CV Now"}
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  section: {
    background: `url(${bannerBg}) no-repeat center top / cover`,
    backgroundSize: ['100%', null, null, null, 'cover'],
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    minHeight: [null, null, null, null, '50vh', '100vh'],
  },
  bannerContent: {
    backgroundColor: rgba('#fff', 0.93),
    boxShadow: [
      '0px 10px 16px rgba(52, 61, 72, 0.12)',
      null,
      null,
      null,
      'none',
    ],
    maxWidth: [null, null, null, 600, 500, null, 650],
    padding: [
      '20px',
      '30px',
      null,
      null,
      null,
      '30px 50px 60px',
      '50px 60px 90px',
    ],
    borderRadius: 5,
    m: ['110px 0 0', null, null, '110px auto 0', '60px 0 0', null, 0],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      maxWidth: 515,
      mt: 70,
      padding: '30px 50px 65px',
    },
  },
  heroTitle: {
    fontSize: [22, 28, 28, 40, , 5, 6],
    fontWeight: 700,
    letterSpacing: 'heading',
    lineHeight: [1.4, null, null, null, null, null, 1.57],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      fontSize: 40,
    },
  },
  desc: {
    fontSize: [15, 16, 15, 17],
    lineHeight: [1.53, 1.53, 1.53, 2, 2.4, 2, 2.48],
    maxWidth: 440,
    marginTop: [15, 15, 15, null, null, null, 30],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      mt: 15,
    },
  },
  select: {
    marginTop: 30,
    select: {
      minWidth: ['auto', 'auto', 'initial'],
    },
  },
  button: {
    fontSize: 20,
    fontWeight: 700,
    marginTop: 20,
    width: '100%',
    minHeight: [50, null, null, null, 60],
    fontSize: [16, 16, 16, 20],
    ':focus': {
      outline: '0 none',
    },
  },
};

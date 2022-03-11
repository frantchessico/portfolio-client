/** @jsx jsx */
import { jsx, Box, Flex, Container, Input, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import { rgba } from 'polished';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { newsletter } from 'service/form.service';

const Subscription = () => {
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
    const snap = await  newsletter(data);
     
     

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
      
     
      return toast.success(`Welcome to my newsletter. I hope you enjoy.`);
     }

   } catch (error) {
    setLoader(false);
    console.log(error)
    return   toast.error('Sorry, sommething went wrong, please try again.')
   }
  
  };
  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <Box sx={styles.content}>
          <SectionHeading
            sx={styles.heading}
            title="Get news about code."
            description="By subscribing with your mail, you will agree with terms"
          />
          <Flex as="form" sx={styles.form} onSubmit={handleSubmit}>
            <Box as="label" htmlFor="email" variant="styles.srOnly">
              Email
            </Box>
            <Input type="email" id="email" placeholder="Enter your email" />
            <Button variant="white">
            {loader? "Please Wait...": "Subscribe now"}
            </Button>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Subscription;

const styles = {
  section: {
    backgroundColor: '#020718',
    pt: '60px',
    pb: '70px',
  },
  heading: {
    color: '#fff',
    mb: [30, 30, 50],
    h2: {
      fontSize: [22, 28, '36px'],
      lineHeight: 1.4,
      letterSpacing: 'heading',
    },
    p: {
      lineHeight: [2, 3.12],
      mt: [20, 0],
      letterSpacing: 'heading',
      color: rgba('#fff', 0.6),
    },
  },
  content: {
    maxWidth: '555px',
    margin: '0 auto',
    textAlign: 'center',
  },
  form: {
    alignItems: 'center',
    display: ['block', 'flex'],
    input: {
      backgroundColor: rgba('#fff', 0.08),
      borderRadius: '5px',
      borderColor: 'transparent',
      color: rgba('#fff', 0.8),
      flexGrow: 1,
      fontFamily: 'body',
      height: 'auto',
      px: '30px',
      py: '0',
      minHeight: [50, 50, 60],
      width: ['100%', 'auto'],
      '::placeholder': {
        color: rgba('#fff', 0.8),
      },
    },
    button: {
      backgroundColor: '#fff',
      color: '#020718',
      minHeight: [50, 50, 60],
      fontSize: [14, 16],
      padding: '0 30px',
      whiteSpace: 'nowrap',
      width: ['100%', 'auto'],
      ml: [0, 3],
      mt: [4, 0],
      ':hover': {
        backgroundColor: '#fff',
        color: '#020718',
      },
    },
  },
};

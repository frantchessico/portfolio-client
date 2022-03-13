/** @jsx jsx */
import { jsx, Box, Container, Image, Button } from 'theme-ui';
import { RiArrowRightSLine } from 'react-icons/ri';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import GalleryCard from 'components/cards/gallery-card';

import gallery1 from 'assets/images/gallery/1.png';
import gallery2 from 'assets/images/gallery/2.png';
import gallery3 from 'assets/images/gallery/3.png';
import gallery4 from 'assets/images/gallery/4.png';
import gallery5 from 'assets/images/gallery/5.png';
import gallery6 from 'assets/images/gallery/6.png';

const data = [
  {
    id: 1,
    image: gallery1,
    title: 'Front working space',
    link: "https://savanapoint.org/"
  },
  {
    id: 2,
    image: gallery2,
    title: 'MasterWinner',
    link: "https://masterwinner.live/"
  },
  {
    id: 3,
    image: gallery3,
    title: 'Disnep Plus Clone',
    link: "https://franciscoinoque-disnep-clone.firebaseapp.com/"
  },
  
  {
    id: 4,
    image: gallery4,
    title: 'Pinterest Clone',
    link: "https://franciscoinoque-pin-clone.web.app/"
  },
  {
    id: 6,
    image: gallery6,
    title: 'SavanaPoint',
    link: "https://savanapoint.org/"
  },
  {
    id: 5,
    image: gallery5,
    title: 'Airbnb Clone',
    link: "https://franciscoinoque-airbnb-clone.firebaseapp.com/"
  },
];

const masonryOptions = {
  transitionDuration: 0,
};

const Gallery = () => {
  const lauchDemo = (link) => {
    console.log('LINK')
    // window.open(link, "_blank")
    // return null;
  }
  return (
    <Box id="projects" as="section" sx={styles.section}>
      <Container sx={styles.container}>
        <SectionHeading
          sx={styles.heading}
          slogan="Working space"
          title="My Most Popular Website Clones and Projects"
        />
        <Box as={Masonry} options={masonryOptions} sx={styles.galleryWrapper}>
          {data?.map((item) => (
            
              <GalleryCard  key={item.id} item={item} />
             

          ))}
        </Box>
        {/* <Button variant="muted" sx={styles.button}>
          Explore More <RiArrowRightSLine size="20px" />
        </Button> */}
      </Container>
    </Box>
  );
};

export default Gallery;

const styles = {
  section: {
    pt: [30, 30, 40, 50, 60],
    pb: [60, 60, 60, 90, 80, 120],
  },
  heading: {
    mb: [30, 30, 40, 60],
  },
  galleryWrapper: {
    mx: '-15px',
  },
  button: {
    minHeight: [50, 50, 50, 60],
    fontSize: [14, 14, 16],
    width: '100%',
    svg: {
      transition: 'margin-left 0.3s ease-in-out 0s',
    },
    ':hover': {
      svg: {
        ml: '5px',
      },
    },
  },
};

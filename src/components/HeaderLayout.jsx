import React from 'react';
import useWindowSize from '../useWindowSize';
import Mobile from './Mobile';
import Head from './Head';

const HeaderLayout = () => {

  const  widthres  = useWindowSize();
  console.log(widthres);

  return (
    <div style={{ ..._stylesLayout.head_container }}>

      {widthres.width < 400 ?<Mobile />:<Head/> }
      {/* <Head/> */}
      {/* <Mobile/> */}


    </div>
  );
};

const _stylesLayout = {
  head_container: {
    margin: 0,
    paddingTop: 0,
    width: '100%',
    height: '60px',
    backgroundColor: 'white',
    position: 'absolute',
    justifyContent: 'center',
  },
};

export default HeaderLayout;

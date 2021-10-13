import React from 'react';
import useWindowSize from '../useWindowSize';
import PinCard from './PinCard';
import MobileCard from './MobileCard';

const PinterestLayout = () => {

  const  widthres  = useWindowSize();
  console.log(widthres);

  return (
    <div
    style={widthres.width<400?{..._stylesLayout.pin_containerMobile}:{..._stylesLayout.pin_container}}
    >
        <PinCard size='small' image='https://picsum.photos//250/300' />
        <PinCard size='medium' image='https://picsum.photos//250/380' />
        <PinCard size='large' image='https://picsum.photos//250/500' />
        <PinCard size='small' image='https://picsum.photos//250/300' />
        <PinCard size='medium' image='https://picsum.photos//250/380' />
        <PinCard size='large' image='https://picsum.photos//250/500' />
        <PinCard size='small' image='https://picsum.photos//250/300' />
        <PinCard size='medium' image='https://picsum.photos//250/380' />
        <PinCard size='large' image='https://picsum.photos//250/500' />
        <PinCard size='small' image='https://picsum.photos//250/300' />
        <PinCard size='medium' image='https://picsum.photos//250/380' />
        <PinCard size='large' image='https://picsum.photos//250/500' />
        <PinCard size='small' image='https://picsum.photos//250/300' />
        <PinCard size='medium' image='https://picsum.photos//250/380' />
        <PinCard size='large' image='https://picsum.photos//250/500' />
        <PinCard size='small' image='https://picsum.photos//250/300' />
        <PinCard size='medium' image='https://picsum.photos//250/380' />
        <PinCard size='large' image='https://picsum.photos//250/500' />
    </div>
  );
};

const _stylesLayout = {
  pin_container: {
    marginTop: 60,
    padding: 0,
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 250px)',
    gridAutoRows: '10px',
    justifyContent: 'center',
  },
  pin_containerMobile: {
    marginTop: 60,
    padding: 0,
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 185px)',
    gridAutoRows: '10px',
    justifyContent: 'center',
  },

};

export default PinterestLayout;

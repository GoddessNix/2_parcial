import React from 'react';

const hover = (e) => {
  e.target.style.opacity = '100%';
  e.target.style.cursor = "zoom-in";
  e.target.style.backgroundColor='rgba(0, 0, 0, .4)';

  // e.target.style.visibility = "visible";
}
const noHover = (e) => {
  e.target.style.opacity = '0%';
  e.target.style.cursor = "default";
  e.target.style.backgroundColor='rgba(0, 0, 0, 0)';

  // e.target.style.visibility = "hidden";
}
// hover ButtonRed
const hoverButtonRed = (e) => {
  e.target.style.opacity = '100%';
  e.target.style.cursor = "pointer";
  e.target.style.backgroundColor= '#cc0000';
}
const noHoverButtonRed = (e) => {
  e.target.style.opacity = '100%';
  e.target.style.cursor = "default";
  e.target.style.backgroundColor= '#E60023';
}
// hover ButtonWhite
const hoverButtonWhite = (e) => {
  e.target.style.opacity = '100%';
  e.target.style.cursor = "pointer";
  e.target.style.backgroundColor= 'white';
}
const noHoverButtonWhite = (e) => {
  e.target.style.opacity = '80%';
  e.target.style.cursor = "default";
  e.target.style.backgroundColor= 'white';
}

const hoverClickProfile = (e) => {
  e.target.style.textDecoration = 'underline';
  e.target.style.cursor = "pointer";


  // e.target.style.visibility = "visible";
}
const noHoverClickProfile = (e) => {
  e.target.style.textDecoration = 'none';
  e.target.style.cursor = "default";


  // e.target.style.visibility = "hidden";
}

const PinCard = (props) => {
  return (
    
    <div // INICIO PIN CARD

      style={{ ..._stylesPinCard.pin_card, ..._stylesPinCard[props.size] }}
    >
      {/* INICIO CONTENEDOR */}
      <div
        style={{ ..._stylesPinCard.contenedor, ..._stylesPinCard[props.size] }}
        onMouseEnter={hover} onMouseLeave={noHover}
      >
        <button
          onMouseEnter={hoverButtonRed} onMouseLeave={noHoverButtonRed}
          style={{ ..._stylesPinCard.guardar }}
        >
          Guardar</button>
        <div
          style={{ ..._stylesPinCard.sharemore }}
        >
          <svg
            onMouseEnter={hoverButtonWhite} onMouseLeave={noHoverButtonWhite}
            style={{ ..._stylesPinCard.share }}
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" />
          </svg>
          <svg
            onMouseEnter={hoverButtonWhite} onMouseLeave={noHoverButtonWhite}
            style={{ ..._stylesPinCard.more }}
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z" />
          </svg>
        </div>

      </div>{/* FIN CONTENEDOR   */}

      <img
        src={props.image} alt="NO CARGAAAAAA" style={{ ..._stylesPinCard.image, ..._stylesPinCard[props.size] }} />

      {/* INICIO DESCRIPCION */}
      <div
        style={{ ..._stylesPinCard.description }}
      >
        <span
          style={{ ..._stylesPinCard.text }}
        > Lorem ipsum</span>
        <div
          style={{ ..._stylesPinCard.userProfile }}
          onMouseEnter={hoverClickProfile} onMouseLeave={noHoverClickProfile}
        >
          <img src="https://picsum.photos/200" alt="userimg" style={{ ..._stylesPinCard.user }} />
          <span
            style={{ ..._stylesPinCard.userName }}
          > User</span>
        </div>

      </div>  {/* FIN DESCRIPCION */}

    </div> /* FIN PINCARD */


  );
};





const _stylesPinCard = {
  pin_card: {
    margin: '15px 10px',
    padding: 0,
    borderRadius: '16px',
    backgroundColor: 'white',
    display:'grid',
    gridTemplateColumns:'1fr',
    alignItems:'center',
    justifyContent:'center',
    overflow:'hidden',
    // maxWidth:'50%',
  },
  small: {
    gridRowEnd: 'span 40',
  },
  medium: {
    gridRowEnd: 'span 48',
  },
  large: {
    gridRowEnd: 'span 60',
  },
  image: {
    width: '100%',
    height: 'auto',
    objectFit:'fill',
    borderRadius: '16px',
    position:'relative',
    zIndex: '1',
    gridColumn:'1',
    gridRow:'1',
    alignSelf:'stretch',

  },
  contenedor: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    // position: 'fixed',
    // borderRadius: '16px',
    // backgroundColor: 'green',
    // zIndex: '2',
    // //ARREGLAR ESTA MONDA DEL HEIGHT
    // height: '100%',
    // // gridRowEnd: 'span 26',

    // width: '100%',
    // display: 'flex',
    // gap: '2rem',
    width: '100%',
    height: '100%',
    borderRadius: '16px',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    display:'flex',
    zIndex: '3',
    gridColumn:'1',
    gridRow:'1',
    // opacity:'90%',
  },
  sharemore: {
    // position: 'relative',
    // bottom: '0px',
    // left: '0px',
    // marginLeft: '0px',
    display: 'flex',
    // alingItems: 'space-between',
    // backgroundColor: 'blue',
    zIndex: '2',
    alignSelf: 'flex-end',
    opacity: '80%',
    margin: '0px',

  },
  share: {
    width: '18px',
    height: '18px',
    margin: '5px',
    padding: '8px',
    backgroundColor: 'white',
    borderRadius: '50%',
    // opacity: '100%',

    // visibility: 'hidden',

  },
  more: {
    width: '18px',
    height: '18px',
    margin: '5px',
    padding: '8px',
    backgroundColor: 'white',
    borderRadius: '50%',
    // opacity: '100%',

    // visibility: 'hidden',

  },
  guardar: {
    // position: 'absolute',
    left: '0',
    bottom: '0',
    borderRadius: '40px',
    borderWidth: 0,
    height: '50px',
    width: '90px',
    fontSize: '17px',
    fontWeight: 550,
    color: 'white',
    backgroundColor: '#E60023',
    zIndex: '2',
    // opacity: '100%',
    // display: 'flex',
    alignSelf: 'flex-end',
    margin: '6px',


    // visibility: 'hidden',

  },

  description:{
    display:'flex',
    flexDirection:'column',
    // gridColumn:'1/2',
    // gridRow:'1/2',
    // alignSelf: 'flex-end',

    // alignItems:'center',
    // justifyContent:'flex-start'
  },
  userProfile:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'white',
    borderRadius:50,
    width:80,
  },
  user: {
    minWidth: '40px',
    minHeight: '40px',
    maxWidth: '40px',
    maxHeight: '40px',
    paddingLeft: '2px',
    borderRadius: '50%',
    justifyContent:'flex-start'
  },
  userName:{
    // position:'relative',
    paddingLeft:'5px',
    color:'black',
    // backgroundColor:'green',
    fontSize:'15px',
    height:'20px',
    width:'50px',
    fontWeight:'400',
  },
  text: {
    overflow:'hidden',
    textOverflow: 'ellipsis',
    display:'-webkit-box',
    WebkitLineClamp:1,
    WebkitBoxOrient:'vertical',
    margin:'4px',
    justifyContent:'flex-end',
    fontWeight:'600',


  },
};

export default PinCard;

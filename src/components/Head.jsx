import React from 'react';
import '../App.css'
// hover logo, hoy, bell,comment,user,arrow
const hover = (e) => {
  e.target.style.backgroundColor = '#EFEFEF';
  e.target.style.cursor = "pointer";
}
const noHover = (e) => {
  e.target.style.backgroundColor = 'white';
  e.target.style.cursor = "default";
}
// hover inicio
const hoverI = (e) => {
  e.target.style.cursor = "pointer";
}
const noHoverI = (e) => {
  e.target.style.cursor = "default";
}
// hover input
const hoverInput = (e) => {
  e.target.style.backgroundColor = '#DDDDDD';
}
const noHoverInput = (e) => {
  e.target.style.backgroundColor = '#EFEFEF';
}



const Head = (props) => {

  return (
    <div
      style={{ ..._stylesHead.s_head }}
    >
      {/* ESTO ES EL LOGO, BOTON DE INICIO Y BOTON DE HOY */}
      <div
        style={{ ..._stylesHead.s_inicioHead }}
      >
        <svg
          style={{ ..._stylesHead.s_logo }}
          onMouseEnter={hover} onMouseLeave={noHover}
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
          <path fill="#E60023" d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" />
        </svg>

        <button
          style={{ ..._stylesHead.s_inicio }}
          onMouseEnter={hoverI} onMouseLeave={noHoverI}
        >Inicio</button>
        <button
          style={{ ..._stylesHead.s_hoy }}
          onMouseEnter={hover} onMouseLeave={noHover}
        >Hoy</button>
      </div>

      {/* esto es el input con el svg */}
      <div
        style={{ ..._stylesHead.s_input_search }}
      >
        <svg
          style={{ ..._stylesHead.s_search }}
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#767676" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
        </svg>
        <input
          onMouseEnter={hoverInput} onMouseLeave={noHoverInput}
          type="text" placeholder="Buscar"
          style={{ ..._stylesHead.s_input }} />
      </div>

      {/* ESTO ES SVG NOTIFICACION, COMENTARIOS, USUARIO */}
      <div
        style={{ ..._stylesHead.s_finalHead }}
      >
        <svg
          style={{ ..._stylesHead.s_bell }}
          onMouseEnter={hover} onMouseLeave={noHover}
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#767676" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z" />
        </svg>
        <svg
          style={{ ..._stylesHead.s_comment }}
          onMouseEnter={hover} onMouseLeave={noHover}
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#767676" d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
        </svg>
        <svg
          style={{ ..._stylesHead.s_user }}
          onMouseEnter={hover} onMouseLeave={noHover}
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="#767676" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z" />
        </svg>
        <svg
          style={{ ..._stylesHead.s_arrow }}
          onMouseEnter={hover} onMouseLeave={noHover}
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#767676" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
        </svg>
      </div>


    </div>
  );


};


const _stylesHead = {
  s_head: {
    marginTop: '4px',
    marginLeft: '1vw',
    padding: 0,
    height: '56px',
    width: '97vw',
    // borderRadius: '16px',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  s_inicioHead: {
    display: 'flex',
    alignItems: 'center',
  },
  s_logo: {
    minWidth: '27px',
    minHeight: '27px',
    maxWidth: '27px',
    maxHeight: '27px',
    padding: '10px',
    backgroundColor: 'white',
    borderRadius: '50%'
  },
  s_inicio: {
    minWidth: '78px',
    maxWidth: '78px',
    height: '48px',
    borderRadius: '50px',
    borderWidth: 0,
    backgroundColor: '#111111',
    color: 'white',
    fontSize: '17px',
    fontWeight: '550',
  },
  s_hoy: {
    minWidth: '68px',
    maxWidth: '68px',
    height: '48px',
    borderRadius: '50px',
    borderWidth: 0,
    backgroundColor: 'white',
    color: '#111111',
    fontSize: '17px',
    fontWeight: '550',
  },
  s_input_search: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '10px',
    width: '100%',
  },
  s_search: {
    width: '16px',
    height: '16px',
    position: 'absolute',
    paddingLeft: '18px'
  },
  s_input: {
    display: 'flex',
    width: '100%',
    height: '45px',
    borderRadius: '23px',
    borderWidth: 0,
    backgroundColor: '#EFEFEF',
    fontSize: '16px',
    paddingLeft: '43px',
    color: '#555753',
  },
  s_finalHead: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '10px',
  },
  s_bell: {
    minWidth: '25px',
    minHeight: '25px',
    maxWidth: '25px',
    maxHeight: '25px',
    padding: '10px',
    backgroundColor: 'white',
    borderRadius: '50%'
  },
  s_comment: {
    minWidth: '25px',
    minHeight: '25px',
    maxWidth: '25px',
    maxHeight: '25px',
    padding: '10px',
    backgroundColor: 'white',
    borderRadius: '50%'
  },
  s_user: {
    minWidth: '25px',
    minHeight: '25px',
    maxWidth: '25px',
    maxHeight: '25px',
    padding: '10px',
    backgroundColor: 'white',
    borderRadius: '50%'
  },
  s_arrow: {
    minWidth: '15px',
    minHeight: '15px',
    maxWidth: '15px',
    maxHeight: '15px',
    padding: '5px',
    backgroundColor: 'white',
    borderRadius: '50%'
  }
};


export default Head;

import React from 'react';
import '../App.css'


const hover = (e) => {
    e.target.style.textDecoration = 'underline';
    e.target.style.backgroundColor = '#EFEFEF';
    e.target.style.cursor = "pointer";

}
const noHover = (e) => {
    e.target.style.textDecoration = 'none';
    e.target.style.backgroundColor = 'white';
    e.target.style.cursor = "default";

}




const Mobile = (props) => {


    return (
        <div

        >
            <div
                style={{ ..._stylesMobile.headContainer }}
            > {/* HEADER */}
                <button
                    onMouseEnter={hover} onMouseLeave={noHover}
                    style={{ ..._stylesMobile.botones }}
                >
                    Para ti
                </button>
                <button
                    onMouseEnter={hover} onMouseLeave={noHover}
                    style={{ ..._stylesMobile.botones }}
                >
                    Hoy
                </button>
                <button
                    onMouseEnter={hover} onMouseLeave={noHover}
                    style={{ ..._stylesMobile.botones }}
                >
                    Ilustración
                </button>
                <button
                    onMouseEnter={hover} onMouseLeave={noHover}
                    style={{ ..._stylesMobile.botones }}
                >
                    Recetas
                </button>

            </div> {/*FIN HEADER */}

            <div
                style={{ ..._stylesMobile.footContainer }}
            > {/* FOOTER */}

                <svg
                    style={{ ..._stylesMobile.home }}
                    onMouseEnter={hover} onMouseLeave={noHover}
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#767676" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" />
                </svg>


                <svg 
                style={{ ..._stylesMobile.search }}
                onMouseEnter={hover} onMouseLeave={noHover}
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#767676" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/>
                </svg>

                <svg
                    style={{ ..._stylesMobile.comment }}
                    onMouseEnter={hover} onMouseLeave={noHover}
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#767676" d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
                </svg>


                <svg
                    style={{ ..._stylesMobile.user }}
                    onMouseEnter={hover} onMouseLeave={noHover}
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#767676" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
                </svg>


            </div> {/* FIN FOOTER */}

        </div>
    );


};


const _stylesMobile = {
    headContainer: {
        position:'fixed',
        top:0,
        marginTop: '0px',
        marginLeft: '1.8vw',
        paddingTop:25,
        height: '40px',
        width: '96vw',
        // borderRadius: '16px',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: '5',

    },
    botones: {
        backgroundColor: 'white',
        color: 'black',
        borderWidth: 0,
        fontSize: '18px',
        fontWeight: '550',
        // margin:'10px',
        padding: '8px',
        height: '40px',
        borderRadius: '50px',
    },
    footContainer: {
        // marginTop: '18px',
        position:'fixed',
        bottom:25,
        marginLeft: '17%',
        padding: 10,
        // height: '50px',
        width: '60vw',
        borderRadius: '50px',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: '5',
    },
    home: {
        minWidth: '25px',
        minHeight: '25px',
        maxWidth: '25px',
        maxHeight: '25px',
        padding: '10px',
        backgroundColor: 'white',
        borderRadius: '50%'
    },
    search:{
        minWidth: '25px',
        minHeight: '25px',
        maxWidth: '25px',
        maxHeight: '25px',
        padding: '10px',
        backgroundColor: 'white',
        borderRadius: '50%'
    },
    comment: {
        minWidth: '25px',
        minHeight: '25px',
        maxWidth: '25px',
        maxHeight: '25px',
        padding: '10px',
        backgroundColor: 'white',
        borderRadius: '50%'
    },
    user: {
        minWidth: '25px',
        minHeight: '25px',
        maxWidth: '25px',
        maxHeight: '25px',
        padding: '10px',
        backgroundColor: 'white',
        borderRadius: '50%'
    },

};


export default Mobile;

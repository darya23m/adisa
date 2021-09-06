import React, { useRef, useImperativeHandle} from 'react';
import cx from 'classnames';

import Title from 'components/common/Title/Title';
import styles from './Pollution.module.scss';
import eco from './img/eco.jpg';
import parseStrWithBoldElems from 'utils/parseStrWithBoldElems';

const Pollution = React.forwardRef(({ data }, ref) => {
  const { title, ecoAlt, ecoDescription, chartNameAdisa, chartNameCommon } = data;
  const pollutionLeftChartRef = useRef(null);
  const pollutionRightChartRef = useRef(null);

  useImperativeHandle(ref, () => ({
    get pollutionLeftChart() {
      return pollutionLeftChartRef.current
    },
    get pollutionRightChart() {
      return pollutionRightChartRef.current
    }
  }));

  return (
    <div className={styles.container}>
      <Title title={title} number="5" />
      <div className={styles.content}>
        <div className={styles.eco}>
           <div className={styles.ecoImgWrap}>
             <img src={eco} alt={ecoAlt} className={styles.ecoImg} />
           </div>
           <div className={styles.ecoDescription}>{ parseStrWithBoldElems(ecoDescription) }</div>
        </div>
        <div className={styles.pollutionCharts}>
          <div className={styles.chartWrap} ref={pollutionLeftChartRef}>
            <svg viewBox="0 0 520 352" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.chart}>
              <g>
                <path id="lessPollutionPath" d="M520 351.528C494.48 351.528 350.121 351.724 337.034 350.55C323.947 349.375 314.786 341.939 302.354 334.306C293.057 328.598 282.723 324.326 275.525 322.955C268.327 321.585 260.475 321.781 254.586 322.956C248.697 324.13 238.227 327.261 225.794 334.306C211.452 342.433 201.012 347.224 191.113 349.376C181.215 351.528 144 352 144 352" stroke="url(#lessPolution1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M470 351.422C444.48 351.422 428.121 351.928 415.034 348.889C401.947 345.85 392.786 326.605 380.354 306.849C371.057 292.077 360.723 281.019 353.525 277.473C346.327 273.927 338.475 274.434 332.586 277.473C326.697 280.512 316.227 288.616 303.794 306.849C289.452 327.882 293.727 337.054 269.113 345.852C244.5 354.65 31 351.422 31 351.422" stroke="url(#lessPolution2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M337.68 258.602C336.424 258.602 335.432 259.021 334.703 259.859C333.979 260.693 333.617 261.836 333.617 263.289C333.617 264.784 333.966 265.94 334.664 266.758C335.367 267.57 336.367 267.977 337.664 267.977C338.461 267.977 339.37 267.833 340.391 267.547V268.711C339.599 269.008 338.622 269.156 337.461 269.156C335.779 269.156 334.479 268.646 333.562 267.625C332.651 266.604 332.195 265.154 332.195 263.273C332.195 262.096 332.414 261.065 332.852 260.18C333.294 259.294 333.93 258.612 334.758 258.133C335.591 257.654 336.57 257.414 337.695 257.414C338.893 257.414 339.94 257.633 340.836 258.07L340.273 259.211C339.409 258.805 338.544 258.602 337.68 258.602Z" fill="#0047B1"/>
                <path d="M352.797 263.273C352.797 265.102 352.333 266.539 351.406 267.586C350.484 268.633 349.201 269.156 347.555 269.156C345.872 269.156 344.573 268.643 343.656 267.617C342.745 266.586 342.289 265.133 342.289 263.258C342.289 261.398 342.747 259.958 343.664 258.938C344.581 257.911 345.883 257.398 347.57 257.398C349.211 257.398 350.492 257.919 351.414 258.961C352.336 260.003 352.797 261.44 352.797 263.273ZM343.695 263.273C343.695 264.82 344.023 265.995 344.68 266.797C345.341 267.594 346.299 267.992 347.555 267.992C348.82 267.992 349.776 267.594 350.422 266.797C351.068 266 351.391 264.826 351.391 263.273C351.391 261.737 351.068 260.573 350.422 259.781C349.781 258.984 348.831 258.586 347.57 258.586C346.305 258.586 345.341 258.987 344.68 259.789C344.023 260.586 343.695 261.747 343.695 263.273Z" fill="#0047B1"/>
                <g className={styles.trees}>
                  <line x1="90" y1="276" x2="90" y2="350" stroke="#313336" strokeWidth="2" strokeLinecap="round"/>
                  <g className={styles.green1}>
                    <path d="M91.0938 305.279C106.057 305.279 118.188 291.561 118.188 274.639C118.188 257.718 106.057 244 91.0938 244C76.1303 244 64 257.718 64 274.639C64 291.561 76.1303 305.279 91.0938 305.279Z" fill="#B3E59F"/>
                  </g>
                  <g className={styles.green2}>
                    <path d="M88.7626 249.019C88.7626 276.422 68.8897 298.637 44.3754 298.637C19.8611 298.637 -0.0117188 276.422 -0.0117188 249.019C-0.0117188 221.616 19.8611 149.988 44.3754 149.988C68.8897 149.988 88.7626 221.616 88.7626 249.019Z" fill="#95D6A4"/>
                  </g>
                  <g className={styles.tree}>
                    <line x1="45" y1="203" x2="45" y2="350" stroke="#313336" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="22.4142" y1="244" x2="44" y2="265.586" stroke="#313336" strokeWidth="2" strokeLinecap="round"/>
                  </g>
                </g>
                <path d="M257.531 315H256.016L249.773 305.414H249.711C249.794 306.539 249.836 307.57 249.836 308.508V315H248.609V303.578H250.109L256.336 313.125H256.398C256.388 312.984 256.365 312.534 256.328 311.773C256.292 311.008 256.279 310.461 256.289 310.133V303.578H257.531V315Z" fill="#0077E4"/>
                <path d="M270.586 309.273C270.586 311.102 270.122 312.539 269.195 313.586C268.273 314.633 266.99 315.156 265.344 315.156C263.661 315.156 262.362 314.643 261.445 313.617C260.534 312.586 260.078 311.133 260.078 309.258C260.078 307.398 260.536 305.958 261.453 304.938C262.37 303.911 263.672 303.398 265.359 303.398C267 303.398 268.281 303.919 269.203 304.961C270.125 306.003 270.586 307.44 270.586 309.273ZM261.484 309.273C261.484 310.82 261.812 311.995 262.469 312.797C263.13 313.594 264.089 313.992 265.344 313.992C266.609 313.992 267.565 313.594 268.211 312.797C268.857 312 269.18 310.826 269.18 309.273C269.18 307.737 268.857 306.573 268.211 305.781C267.57 304.984 266.62 304.586 265.359 304.586C264.094 304.586 263.13 304.987 262.469 305.789C261.812 306.586 261.484 307.747 261.484 309.273Z" fill="#0077E4"/>
                <path d="M275.008 310.617L272.031 306.438H273.508L275.766 309.719L278.016 306.438H279.477L276.5 310.617L279.633 315H278.164L275.766 311.531L273.344 315H271.875L275.008 310.617Z" fill="#0077E4"/>
              </g>
              <circle x="" y="" r="3" fill="#fff">
                <animateMotion dur="6s" repeatCount="indefinite">
                  <mpath xlinkHref="#lessPollutionPath" />
                </animateMotion>
              </circle>
              <circle x="" y="" r="3" fill="#fff">
                <animateMotion dur="9s" repeatCount="indefinite">
                  <mpath xlinkHref="#lessPollutionPath" />
                </animateMotion>
              </circle>
              <defs>
                <linearGradient id="lessPolution1" x1="298" y1="351.54" x2="298" y2="322" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#37E1C3" />
                  <stop offset="1" stopColor="#0047B1" />
                </linearGradient>
                <linearGradient id="lessPolution2" x1="295.676" y1="351.481" x2="295.676" y2="275" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#37E1C3" />
                  <stop offset="1" stopColor="#0047B1" />
                </linearGradient>
              </defs>
            </svg>
            <div className={cx(styles.chartName, styles.chartNameBlue)}>{ chartNameAdisa }</div>
          </div>
          <div className={styles.chartWrap} ref={pollutionRightChartRef}>
            <div className={styles.firstCircle} />
            <div className={styles.secondCircle} />
            <div className={styles.thirdCircle} />
            <svg viewBox="0 0 520 352" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.chart}>
              <g>
                <path d="M421 91H456L462 351H415L421 91Z" fill="#AA6478"/>
                <path d="M421.238 90.6528H456.285V96.9072H421.238V90.6528Z" fill="#A0556E"/>
                <path d="M419.047 92.7378H458.476C459.685 92.7378 460.666 91.8042 460.666 90.6529V82.3134C460.666 81.1621 459.685 80.2285 458.476 80.2285H419.047C417.837 80.2285 416.856 81.1621 416.856 82.3134V90.6529C416.856 91.8045 417.837 92.7378 419.047 92.7378Z" fill="#BE788C"/>
                <path d="M436.571 115.672V107.332H429.999C428.789 107.332 427.809 106.399 427.809 105.247C427.809 104.096 428.789 103.163 429.999 103.163H443.142V101.078C443.142 99.9262 444.122 98.9927 445.333 98.9927C446.543 98.9927 447.523 99.9262 447.523 101.078V103.163H456.285V107.332H440.952V115.672H456.285V119.842H434.38V121.927C434.38 123.078 433.401 124.012 432.19 124.012C430.979 124.012 429.999 123.078 429.999 121.927V119.842H421.237V115.672H436.571Z" fill="#A0556E"/>
                <path d="M438.761 86.4824C439.971 86.4824 440.952 87.4161 440.952 88.5675V92.7378H436.571V88.5675C436.571 87.4161 437.552 86.4824 438.761 86.4824Z" fill="#AA6478"/>
                <path d="M436.571 152.611V144.272H429.999C428.789 144.272 427.809 143.338 427.809 142.187C427.809 141.036 428.789 140.102 429.999 140.102H443.142V138.017C443.142 136.866 444.122 135.932 445.333 135.932C446.543 135.932 447.523 136.866 447.523 138.017V140.102H456.285V144.272H440.952V152.611H456.285V156.781H434.38V158.866C434.38 160.018 433.401 160.951 432.19 160.951C430.979 160.951 429.999 160.018 429.999 158.866V156.781H421.237V152.611H436.571Z" fill="#A0556E"/>
                <path d="M436.571 189.733V181.393H429.999C428.789 181.393 427.809 180.459 427.809 179.308C427.809 178.157 428.789 177.223 429.999 177.223H443.142V175.138C443.142 173.987 444.122 173.053 445.333 173.053C446.543 173.053 447.523 173.987 447.523 175.138V177.223H456.285V181.393H440.952V189.733H456.285V193.902H434.38V195.987C434.38 197.139 433.401 198.072 432.19 198.072C430.979 198.072 429.999 197.139 429.999 195.987V193.902H421.237V189.733H436.571Z" fill="#A0556E"/>
                <path d="M436.571 226.854V218.514H429.999C428.789 218.514 427.809 217.581 427.809 216.429C427.809 215.278 428.789 214.344 429.999 214.344H443.142V212.259C443.142 211.108 444.122 210.174 445.333 210.174C446.543 210.174 447.523 211.108 447.523 212.259V214.344H456.285V218.514H440.952V226.854H456.285V231.024H434.38V233.109C434.38 234.26 433.401 235.194 432.19 235.194C430.979 235.194 429.999 234.26 429.999 233.109V231.024H421.237V226.854H436.571Z" fill="#A0556E"/>
                <path d="M436.571 263.975V255.635H429.999C428.789 255.635 427.809 254.702 427.809 253.55C427.809 252.399 428.789 251.465 429.999 251.465H443.142V249.38C443.142 248.229 444.122 247.295 445.333 247.295C446.543 247.295 447.523 248.229 447.523 249.38V251.465H456.285V255.635H440.952V263.975H456.285V268.145H434.38V270.23C434.38 271.381 433.401 272.315 432.19 272.315C430.979 272.315 429.999 271.381 429.999 270.23V268.145H421.237V263.975H436.571Z" fill="#A0556E"/>
                <path d="M436.571 301.096V292.756H429.999C428.789 292.756 427.809 291.823 427.809 290.671C427.809 289.52 428.789 288.586 429.999 288.586H443.142V286.501C443.142 285.35 444.122 284.417 445.333 284.417C446.543 284.417 447.523 285.35 447.523 286.501V288.586H456.285V292.756H440.952V301.096H456.285V305.266H434.38V307.351C434.38 308.502 433.401 309.436 432.19 309.436C430.979 309.436 429.999 308.502 429.999 307.351V305.266H421.237V301.096H436.571Z" fill="#A0556E"/>
                <path d="M436.571 338.217V329.877H429.999C428.789 329.877 427.809 328.944 427.809 327.792C427.809 326.641 428.789 325.708 429.999 325.708H443.142V323.623C443.142 322.471 444.122 321.538 445.333 321.538C446.543 321.538 447.523 322.471 447.523 323.623V325.708H456.285V329.877H440.952V338.217H456.285V342.387H434.38V344.472C434.38 345.624 433.401 346.557 432.19 346.557C430.979 346.557 429.999 345.624 429.999 344.472V342.387H421.237V338.217H436.571Z" fill="#A0556E"/>
                <path d="M483 351C457.48 351 261.121 352.175 248.034 345.887C234.947 339.599 225.786 299.777 213.354 258.9C204.057 228.335 193.723 205.454 186.525 198.117C179.327 190.779 171.475 191.83 165.586 198.117C159.697 204.404 149.227 221.174 136.794 258.9C122.452 302.421 112.012 328.078 102.113 339.603C92.2152 351.127 68 351 68 351" stroke="url(#morePollution1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path id="morePollutionPath" d="M483 351.202C404 352 344 350.202 326.034 329.9C308.069 309.598 303.786 266.354 291.354 199.606C282.057 149.698 271.723 112.336 264.525 100.355C257.327 88.3737 249.475 90.0892 243.586 100.356C237.697 110.622 227.227 138.004 214.794 199.606C200.452 270.67 197.801 297.357 180.113 327.468C162.426 357.58 38 350.202 38 350.202" stroke="url(#morePollution2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M166.531 183H165.016L158.773 173.414H158.711C158.794 174.539 158.836 175.57 158.836 176.508V183H157.609V171.578H159.109L165.336 181.125H165.398C165.388 180.984 165.365 180.534 165.328 179.773C165.292 179.008 165.279 178.461 165.289 178.133V171.578H166.531V183Z" fill="#BF0000"/>
                <path d="M179.586 177.273C179.586 179.102 179.122 180.539 178.195 181.586C177.273 182.633 175.99 183.156 174.344 183.156C172.661 183.156 171.362 182.643 170.445 181.617C169.534 180.586 169.078 179.133 169.078 177.258C169.078 175.398 169.536 173.958 170.453 172.938C171.37 171.911 172.672 171.398 174.359 171.398C176 171.398 177.281 171.919 178.203 172.961C179.125 174.003 179.586 175.44 179.586 177.273ZM170.484 177.273C170.484 178.82 170.812 179.995 171.469 180.797C172.13 181.594 173.089 181.992 174.344 181.992C175.609 181.992 176.565 181.594 177.211 180.797C177.857 180 178.18 178.826 178.18 177.273C178.18 175.737 177.857 174.573 177.211 173.781C176.57 172.984 175.62 172.586 174.359 172.586C173.094 172.586 172.13 172.987 171.469 173.789C170.812 174.586 170.484 175.747 170.484 177.273Z" fill="#BF0000"/>
                <path d="M184.008 178.617L181.031 174.438H182.508L184.766 177.719L187.016 174.438H188.477L185.5 178.617L188.633 183H187.164L184.766 179.531L182.344 183H180.875L184.008 178.617Z" fill="#BF0000"/>
                <path d="M248.68 70.6016C247.424 70.6016 246.432 71.0208 245.703 71.8594C244.979 72.6927 244.617 73.8359 244.617 75.2891C244.617 76.7839 244.966 77.9401 245.664 78.7578C246.367 79.5703 247.367 79.9766 248.664 79.9766C249.461 79.9766 250.37 79.8333 251.391 79.5469V80.7109C250.599 81.0078 249.622 81.1562 248.461 81.1562C246.779 81.1562 245.479 80.6458 244.562 79.625C243.651 78.6042 243.195 77.1536 243.195 75.2734C243.195 74.0964 243.414 73.0651 243.852 72.1797C244.294 71.2943 244.93 70.612 245.758 70.1328C246.591 69.6536 247.57 69.4141 248.695 69.4141C249.893 69.4141 250.94 69.6328 251.836 70.0703L251.273 71.2109C250.409 70.8047 249.544 70.6016 248.68 70.6016Z" fill="#BF0000"/>
                <path d="M263.797 75.2734C263.797 77.1016 263.333 78.5391 262.406 79.5859C261.484 80.6328 260.201 81.1562 258.555 81.1562C256.872 81.1562 255.573 80.6432 254.656 79.6172C253.745 78.5859 253.289 77.1328 253.289 75.2578C253.289 73.3984 253.747 71.9583 254.664 70.9375C255.581 69.9115 256.883 69.3984 258.57 69.3984C260.211 69.3984 261.492 69.9193 262.414 70.9609C263.336 72.0026 263.797 73.4401 263.797 75.2734ZM254.695 75.2734C254.695 76.8203 255.023 77.9948 255.68 78.7969C256.341 79.5938 257.299 79.9922 258.555 79.9922C259.82 79.9922 260.776 79.5938 261.422 78.7969C262.068 78 262.391 76.8255 262.391 75.2734C262.391 73.737 262.068 72.5729 261.422 71.7812C260.781 70.9844 259.831 70.5859 258.57 70.5859C257.305 70.5859 256.341 70.987 255.68 71.7891C255.023 72.5859 254.695 73.7474 254.695 75.2734Z" fill="#BF0000"/>
              </g>
              <circle x="" y="" r="3" fill="#fff">
                <animateMotion dur="6s" repeatCount="indefinite">
                  <mpath xlinkHref="#morePollutionPath" />
                </animateMotion>
              </circle>
              <circle x="" y="" r="3" fill="#fff">
                <animateMotion dur="9s" repeatCount="indefinite">
                  <mpath xlinkHref="#morePollutionPath" />
                </animateMotion>
              </circle>
              <defs>
                <linearGradient id="morePollution1" x1="258.16" y1="351.193" x2="258.16" y2="197.794" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#37E1C3"/>
                  <stop offset="0.458333" stopColor="#0063BF"/>
                  <stop offset="0.708333" stopColor="#9900BF"/>
                  <stop offset="0.979167" stopColor="#BF0000"/>
                </linearGradient>
                <linearGradient id="morePollution2" x1="256.5" y1="350.402" x2="256.5" y2="99.8304" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#37E1C3"/>
                  <stop offset="0.458333" stopColor="#0063BF"/>
                  <stop offset="0.708333" stopColor="#9900BF"/>
                  <stop offset="0.979167" stopColor="#BF0000"/>
                </linearGradient>
              </defs>
            </svg>
            <div className={styles.chartName}>{ chartNameCommon }</div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Pollution;

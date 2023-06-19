import HeroImage from "../../assets/hero-image.png";

const Hero = () => {
  return (
    <header className=" flex justify-between">
      <div className=" w-1/2 py-32">
        <h2 className="text-secondary text-lg">
          - Learn graph algorithms with visualization -
        </h2>
        <h1 className="text-5xl font-bold capitalize">
          The best way to learn graph algorithms
        </h1>
        <p className="text-gray pt-5 max-w-lg">
          Learn graph algorithms through visual simulation and interactive play
          with GraphPlay. Gain a deep understanding of graph theory and master
          essential algorithms in no time. Try it now!
        </p>
        <div className="pt-8 flex gap-6">
          <button className="bg-primary rounded-lg py-2 px-4 text-white font-medium">
            Start the adventure
          </button>
          <button className="bg-gray rounded-lg py-2 px-4 text-white font-medium flex justify-between gap-2">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="22" height="22" fill="#757575" />
              <path
                d="M11 1.375C5.68477 1.375 1.375 5.79649 1.375 11.2449C1.375 15.6063 4.13359 19.3016 7.95781 20.6078C8.01145 20.6195 8.0662 20.6252 8.12109 20.625C8.47773 20.625 8.61523 20.3629 8.61523 20.1352C8.61523 19.8988 8.60664 19.2801 8.60234 18.4551C8.28396 18.5297 7.95825 18.5686 7.63125 18.5711C5.7793 18.5711 5.3582 17.1316 5.3582 17.1316C4.91992 15.993 4.28828 15.6879 4.28828 15.6879C3.45039 15.0992 4.28398 15.082 4.34844 15.082H4.35273C5.31953 15.168 5.82656 16.1047 5.82656 16.1047C6.30781 16.9469 6.95234 17.1832 7.52812 17.1832C7.90884 17.1756 8.28367 17.0877 8.62813 16.9254C8.71406 16.2895 8.96328 15.8555 9.23828 15.6063C7.10273 15.357 4.85547 14.5105 4.85547 10.7293C4.85547 9.65078 5.2293 8.76992 5.84375 8.08242C5.74492 7.8332 5.41406 6.82773 5.93828 5.46992C6.0086 5.4531 6.08087 5.44587 6.15312 5.44844C6.50117 5.44844 7.2875 5.58164 8.58516 6.48398C10.1619 6.04283 11.8295 6.04283 13.4062 6.48398C14.7039 5.58164 15.4902 5.44844 15.8383 5.44844C15.9105 5.44587 15.9828 5.4531 16.0531 5.46992C16.5773 6.82773 16.2465 7.8332 16.1477 8.08242C16.7621 8.77422 17.1359 9.65508 17.1359 10.7293C17.1359 14.5191 14.8844 15.3527 12.7402 15.5977C13.084 15.9027 13.3934 16.5043 13.3934 17.4238C13.3934 18.743 13.3805 19.8086 13.3805 20.1309C13.3805 20.3629 13.5137 20.625 13.8703 20.625C13.928 20.6253 13.9856 20.6195 14.0422 20.6078C17.8707 19.3016 20.625 15.602 20.625 11.2449C20.625 5.79649 16.3152 1.375 11 1.375Z"
                fill="white"
              />
            </svg>
            Contribute
          </button>
        </div>
      </div>
      <div className="py-8">
        <img src={HeroImage} alt="hero" />
      </div>
    </header>
  );
};

export default Hero;

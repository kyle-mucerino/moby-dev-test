import React from 'react';
import './Home.css';
import backgroundVideo from '../../assets/homepageHero.mp4';
import introHero from '../../assets/intro-section.png';
import prp from '../../assets/prp.png';
import grid1 from '../../assets/Vector.png';
import grid2 from '../../assets/Vector2.png';
import grid3 from '../../assets/GroupClock.png';
import grid4 from '../../assets/Vector4.png';
import grid5 from '../../assets/Vector5.png';
// import grid6 from '../../assets/Vector6.png';
// import grid7 from '../../assets/Vector7.png';
import sex1 from '../../assets/Group.png';
import expandingArrows from '../../assets/expanding-arrows.png';
import whale from '../../assets/whale.png';
import yinYang from '../../assets/yinYang.png';
import eggplant from '../../assets/eggplant.png';

function Home() {
  return (
    <>
      <div className="relative w-full homepage-hero overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={backgroundVideo}
          autoPlay
          loop
          muted
        />

        {/* Text Overlay */}
        <div className="relative flex flex-col items-center justify-end h-full pb-16 text-white">
          <h1 className="text-[200px] font-bold leading-none">Moby</h1>
          <h2 className="text-[72px] font-semibold">Medical Services</h2>
          <p className="text-[40px] font-light">
            Restore Confidence, Boost Performance, Increase Pleasure.
          </p>
        </div>
      </div>
      <div className="legal-disclaimer">
        <p className="text-center text-gray-700">
          Please Note: The Moby™ procedures are innovative and experimental
          medical services. They have NOT been approved by the FDA for the
          treatment of erectile dysfunction (ED).
        </p>
      </div>

      <div className="intro-section relative w-full overflow-hidden">
        {/* Background Image */}
        <img
          className="absolute top-0 left-0 w-full h-[788px] object-cover"
          src={introHero}
          alt="Intro Hero"
        />

        {/* Hero Text Overlay */}
        <div className="hero-text-overlay absolute flex flex-row items-start gap-[102px] text-black">
          <h1 className="text-[172px] font-bold leading-none uppercase">
            Moby&#8482;
          </h1>
          <p className="text-[36px] font-light">
            Non-surgical medical services for enhanced sexual health
          </p>
        </div>

        {/* Intro Paragraph Section Below Image */}
        <div className="intro-paragraph absolute">
          <p className="paragraph text-[40px] mb-8">
            Moby™ procedures are designed to work in synergy to restore sexual
            health and boost performance. Patients who undergo these procedures
            typically enjoy firmer erections and increased pleasure from sexual
            activities.
          </p>
          <p className="paragraph text-[40px] mb-12">
            Rediscover the thrill of intimacy without pills or surgical
            implants.
          </p>

          {/* Button */}
          <div className="button-container flex">
            <button className="cta-button w-full h-full bg-blue-500 text-white text-xl font-bold uppercase">
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Moby Shot Section */}
      <div className="moby-shot flex flex-col items-start gap-[116px] mx-[156.44px] my-[164px]">
        {/* Frame 114 Container */}
        <div className="frame-114 flex flex-col items-start gap-[50px]">
          {/* Header & Subheader */}
          <div className="header-group text-left">
            <h2 className="header-gradient font-bold">Moby Shot&#8482;</h2>
            <p className="subheader text-[32px] font-light">
              Revitalize your erections with Hyper PRP™ growth factors.
            </p>
          </div>

          {/* Image */}
          <div className="image-container w-full h-[965.07px] overflow-hidden">
            <img
              src={prp}
              alt="Prp Tube"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Rich Text */}
          <div className="rich-text leading-relaxed">
            <p>
              Hyper PRP™ is derived from your own blood and contains an
              abundance of growth factors.
            </p>
          </div>
        </div>
        <div className="benefits mx-auto w-[1115px]">
          {/* Benefits Subheader */}
          <h3 className="benefits-subheader text-left text-[48px] mb-[92px]">
            The growth factors in Hyper PRP™ <br></br> helps you:
          </h3>

          {/* Benefits Grid */}
          <div
            className="grid grid-cols-3 grid-rows-2 gap-8"
            style={{ height: "728.79px" }}
          >
            {/* Grid Item 1 */}
            <div className="grid-1 flex flex-col items-center justify-center bg-gray-200 rounded-lg p-8 shadow-md">
              <img src={grid1} alt="Benefit 1" className="mb-4" />
              <p className="text-center font-medium">
                Grow new <br></br> blood vessels
              </p>
            </div>

            {/* Grid Item 2 */}
            <div className="grid-2 flex flex-col items-center justify-center bg-gray-200 rounded-lg p-8 shadow-md">
              <img
                src={grid2}
                alt="Faucet with water flowing"
                className="mb-4"
              />
              <p className="text-center font-medium">Increase blood flow</p>
            </div>

            {/* Grid Item 3 */}
            <div className="grid-3 flex flex-col items-center justify-center bg-gray-200 rounded-lg p-8 shadow-md">
              <img src={grid3} alt="Clock" className="mb-4" />
              <p className="text-center font-medium">
                Heal and restore targeted tissue
              </p>
            </div>

            {/* Grid Item 4 */}
            <div className="grid-4 flex flex-col items-center justify-center bg-gray-200 rounded-lg p-8 shadow-md">
              <img src={grid5} alt="Benefit 4" className="mb-4" />
              <p className="text-center font-medium">Get harder erections</p>
            </div>

            {/* Grid Item 5 */}
            <div className="grid-5 relative flex items-center justify-center bg-gray-200 rounded-lg p-8 shadow-md">
              {/* Image */}
              <img src={expandingArrows} alt="Expanding arrows" className="" />

              {/* Overlay Text */}
              <p className="absolute text-center">
                Grow new nerves for heightened sensations
              </p>
            </div>

            {/* Grid Item 6 */}
            <div className="grid-6 flex flex-col items-center justify-center bg-gray-200 rounded-lg p-8 shadow-md">
              <img src={sex1} alt="Benefit 6" className="mb-4" />
              <p className="text-center font-medium">
                Experience more intense intimacy
              </p>
            </div>
          </div>
        </div>
        <div className="benefits-bottom-cta flex flex-col">
          <p className="benefits-bottom">
            Each Moby Shot™ procedure takes about 60 minutes to complete.
            Patients often report more noticeable results with two procedures.
          </p>
          <div className="benefits-cta flex flex-row">
            <button className="bg-blue-500 rounded-full text-white">
              Learn More
            </button>
            <button className="text-blue-500 border-2 border-blue-600 rounded-full ml-4 p-4">
              Book
            </button>
          </div>
        </div>
      </div>

      {/* Moby Whale */}
      <div className="moby-wave text-center justify-between">
        <div className="mt-[20px] mb-[46.09px] mr-[162px] ml-[178px]">
          <h1 className="mb-[391px]">Moby Wave™</h1>
          <p>Next Gen Shockwave Therapy for More Intense Intimacy.</p>
        </div>
      </div>
      <div className="wave-grid mx-[162.59px] mt-[116px] mb-[164px]">
        <h1 className="mb-[92px]">Moby Wave™ helps you:</h1>
        <div className="grid grid-cols-3 grid-rows-3 gap-8 mx-auto">
          {/* Grid Item 1 */}
          <div className="grid-1 flex flex-col items-center justify-center bg-gray-200 rounded-lg p-8 shadow-md">
            <img src={grid1} alt="Benefit 1" className="mb-4" />
            <p className="text-center font-medium">
              Grow new <br></br> blood vessels
            </p>
          </div>

          {/* Grid Item 2 */}
          <div className="grid-2 flex flex-col items-center justify-center bg-gray-200 rounded-lg p-8 shadow-md">
            <img src={grid2} alt="Faucet with water flowing" className="mb-4" />
            <p className="text-center font-medium">Increase blood flow</p>
          </div>

          {/* Grid Item 3 */}
          <div className="grid-3 flex flex-col items-center justify-center bg-gray-200 rounded-lg p-8 shadow-md">
            <img src={grid3} alt="Clock" className="mb-4" />
            <p className="text-center font-medium">
              Heal and restore targeted tissue
            </p>
          </div>

          {/* Grid Item 4 */}
          <div className="grid-4 flex flex-col items-center justify-center bg-gray-200 rounded-lg p-8 shadow-md">
            <img src={grid5} alt="Benefit 4" className="mb-4" />
            <p className="text-center font-medium">Get harder erections</p>
          </div>

          {/* Grid Item 5 */}
          <div className="grid-5 relative flex items-center justify-center bg-gray-200 rounded-lg p-8 shadow-md">
            {/* Image */}
            <img src={expandingArrows} alt="Expanding arrows" className="" />

            {/* Overlay Text */}
            <p className="absolute text-center">
              Grow new nerves for heightened sensations
            </p>
          </div>

          {/* Grid Item 6 */}
          <div className="grid-6 flex flex-col items-center justify-center bg-gray-200 rounded-lg p-8 shadow-md">
            <img src={sex1} alt="Benefit 6" className="mb-4" />
            <p className="text-center font-medium">
              Experience more intense intimacy
            </p>
          </div>

          {/* Grid Item 7 */}
          <div className="grid-6 flex flex-col items-center justify-center bg-gray-200 rounded-lg p-8 shadow-md">
            <img src={sex1} alt="Benefit 6" className="mb-4" />
            <p className="text-center font-medium">
              Experience more intense intimacy
            </p>
          </div>

          {/* Grid Item 8 */}
          <div className="grid-6 flex flex-col items-center justify-center bg-gray-200 rounded-lg p-8 shadow-md">
            <img src={sex1} alt="Benefit 6" className="mb-4" />
            <p className="text-center font-medium">
              Experience more intense intimacy
            </p>
          </div>

          {/* Grid Item 9 */}
          <div className="grid-6 flex flex-col items-center justify-center bg-gray-200 rounded-lg p-8 shadow-md">
            <img src={sex1} alt="Benefit 6" className="mb-4" />
            <p className="text-center font-medium">
              Experience more intense intimacy
            </p>
          </div>
        </div>
        <div className="wave-grid-bottom mt-[164px] mb-[92px]">
          Each Moby Wave™ procedure lasts about 10-20 minutes and at least six
          procedures are typically recommended.
        </div>
        <div className="benefits-cta flex flex-row">
          <button className="bg-blue-500 rounded-full text-white">
            Learn More
          </button>
          <button className="text-blue-500 border-2 border-blue-600 rounded-full ml-4 p-4">
            Book
          </button>
        </div>
      </div>

      {/* Moby Synergy */}
      <div className="synergy-container flex flex-col items-start w-[1115px] h-[2179px] mx-[162.5px] my-[164px]">
        {/* Inner Content Container */}
        <div className="synergy-content-container flex flex-col items-center gap-[50px] w-[1126px] h-[1989px]">
          {/* Header */}
          <h1 className="text-[164px] synergy-header text-left">
            Introducing Moby Synergy™
          </h1>

          {/* Subheader */}
          <p className="text-[64px] text-left synergy-subheader-1">
            Moby Shot™ plus Moby Wave™ equals More Moby™
          </p>

          {/* Image */}
          <img
            src={yinYang}
            alt="Whale Yin Yang"
            className="w-[799.7px] h-[905px]"
          />

          <p className="text-[48px] synergy-subheader-2 text-left">
            By combining the Moby Shot™ and the Moby Wave™ we offer patients the
            potential for more dramatic results.
          </p>
        </div>

        {/* CTA Buttons Container */}
        <div className="benefits-cta flex flex-row gap-[24px] w-[924px] h-[98px]">
          <button className="bg-blue-500 rounded-full text-white">
            Learn More
          </button>
          <button className="text-blue-500 border-2 border-blue-600 rounded-full ml-4 p-4">
            Book
          </button>
        </div>
      </div>

      {/* Moby Max */}
      <div className="moby-max h-[2251px] w-[1440px] flex flex-col justify-center items-center">
        <div className="poster h-[1301px]">
          <img
            src={eggplant}
            alt="Eggplant"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[1111px] h-[838px] text-[48px] mt-[112px]">
          <p>
            Experience the thrill of more girth and deliver more sexual
            satisfaction with Moby Max™. This procedure, performed by a
            specialist, involves the precise injection of a state-of-the-art
            filler into the erectile tissues. The enhancements from Moby Max™
            are long-lasting—however, a follow-up procedure will eventually be
            necessary to maintain your gains.
          </p>
          <div className="benefits-cta flex flex-row gap-[24px] w-[924px] h-[98px]">
            <button className="bg-blue-500 rounded-full text-white">
              Learn More
            </button>
            <button className="text-blue-500 border-2 border-blue-600 rounded-full ml-4 p-4">
              Book
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
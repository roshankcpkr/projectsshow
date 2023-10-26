import React from 'react'
// import a from 'next/link';

const HomePage = () => {
  return (
    <div className="dark:text-white">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://source.unsplash.com/random/1080×1920/?cryptocurrency")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold dark:text-white">
              CryptoInator
            </h1>
            <p className="mb-5 dark:text-white">
              The Ultimate Destination for your currency
            </p>
            <a href="/cryptoinator">
              <button className="btn bg-rose-800 hover:bg-red-900 dark:text-white">
                Get Started
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage
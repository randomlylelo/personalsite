import * as React from 'react';

const IndexPage = () => {
  return (
    <main>
      <div className="bg-customGray text-white">
        <div className="w-9/12 2xl:w-8/12 m-auto">
          {/* Navbar */}
          <div className="pt-8 hidden sm:flex">
            {/* Title */}
            <div className="uppercase text-xl">Leo Zhang.</div>
            <div className="flex-grow"></div>
            {/* Navbar items */}
            <div className="flex items-center">
              <div className="px-4">Portfilo</div>
              <div className="pl-4">Contact</div>
            </div>
          </div>
          {/* Hero */}
          <div className="sm:w-9/12 2xl:w-6/12 m-auto flex flex-col sm:py-32">
            <div className="sm:w-9/12">
              <p className="text-3xl sm:text-6xl whitespace-pre-line">
                Hello! I'm Leo, an aspiring {"\n"} Software Developer.
              </p>
            </div>
            <div className="sm:w-7/12 sm:self-end">
              <p className="sm:text-large sm:text-right whitespace-pre-line">
                Born in New York, raised in Miami.{"\n"} Currently a freshman at Caltech
                seeking a {"\n"}Computer Science degree.
              </p>
            </div>
          </div>
          {/* Featured Projects */}
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

import * as React from 'react';

const IndexPage = () => {
  return (
    <main>
      <div className="bg-customGray text-white">
        <div className="w-9/12 m-auto">
          {/* Navbar */}
          <div className="flex py-8">
            {/* Title */}
            <div className="uppercase text-xl">Leo Zhang.</div>
            <div className="flex-grow"></div>
            {/* Navbar items */}
            <div className="flex items-center">
              <div className="px-4">Portfilo</div>
              <div className="pl-4">Contact</div>
            </div>
          </div>
          {/* Space */}
          <div className=" pt-8"></div>
          {/* Hero */}
          <div className=" w-9/12 m-auto flex flex-col">
            <div className="w-9/12">
              <p className="text-6xl whitespace-pre-line">
                Hello! I'm Leo, an aspiring {"\n"} Software Developer.
              </p>
            </div>
            <div className=" w-7/12 self-end">
              <p className="text-large text-right whitespace-pre-line">
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

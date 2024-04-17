import React from "react";

const MapSection = () => {
  return (
    <div className="py-10 flex flex-col md:flex-row justify-between gap-10">
      <div className="flex flex-col flex-1 justify-center">
        <h2 className="text-2xl md:text-4xl font-semibold mb-10">Dove siamo</h2>
        <p className="text-lg md:text-2xl leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus assumenda in accusamus nesciunt provident esse iure unde sit magni, similique dignissimos
          perspiciatis, iste dolor maxime alias culpa. Inventore nulla quis expedita nobis, quidem porro veritatis, maxime rem ea in eos!
        </p>
      </div>
      <div className="flex-1 border border-slate-700">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.9927982070412!2d12.384010076852515!3d41.89301197124015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f5f76b4f009dd%3A0xe829599ac076cb74!2sVia.cornelia%20377!5e0!3m2!1sen!2sit!4v1713362150311!5m2!1sen!2sit"
          loading="lazy"
          className="h-full w-full"
        ></iframe>
      </div>
    </div>
  );
};

export default MapSection;

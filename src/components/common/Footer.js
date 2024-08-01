import React from "react";
import SocialLinks from "../../utils/SocialLinks";
import Subscribe from "./Subscribe";
import ThickBorder from "../../utils/ThickBorder";

const Footer = () => {
  return (
    <div className="px-6 lg:px-28 bg-gray-100 pt-12 mt-20 pb-56 sm:pb-20 flex flex-col xl:grid-cols-4 md:grid md:grid-cols-2 gap-14 text-[#212529] ">
      <section className="">
        <h1 className="uppercase font-[500] text-[12px] ">About me</h1>
        <ThickBorder aboutBorder/>
        <div className="text-[14px] pt-6 font-[400]">
          <p>
            Start writing, no matter what. The water does not flow until the
            faucet is turned on.
          </p>
          <h1 className="font-[700] pt-4">Address</h1>
          <p>123 Main Street New York, NY 100012</p>
          <div className="flex justify-start items-center gap-2 pt-4">
            <SocialLinks />
          </div>
        </div>
      </section>

      <section className="">
        <h1 className="uppercase font-[500] text-[12px] ">Quick Links</h1>
       <ThickBorder QuickLinkBorder/>
       <div className="flex flex-col text-[12px] font-[400] pt-8 ">
        <p>HomePage</p>
        <Hr/>
        <p>Contact</p>
        <Hr/>
        <p>Blog</p>
        <Hr/>
        <p>Travel</p>
        <Hr/>
        <p>Galleries</p>
        <Hr/>
       </div>
      </section>

      <section className="xl:relative xl:right-16">
        <h1 className="uppercase font-[500] text-[12px] ">tags</h1>
        <ThickBorder tagsBorder/>
        <div className="grid md:grid-cols-2 grid-cols-4 w-fit gap-2 pt-8 text-[13px] font-[400] ">
          <TagLabel text="General" />
          <TagLabel text="Design" />
          <TagLabel text="Fashion" />
          <TagLabel text="Branding" />
          <TagLabel text="Modern" />
        </div>
      </section>

      <section className="xl:relative xl:right-16 w-72">
        <h1 className="uppercase font-[500] text-[12px] ">newsletter</h1>
        <ThickBorder newsletterBorder/>
        <div className="text-[14px] pt-6 font-[400]">
          <p>
            Subscribe to our newsletter and get our newest updates right on your
            inbox.
          </p>
          <Subscribe
            inputWidth="14em"
            btnWidth="10em"
            topLeft="0%"
            bottomLeft="0%"
          />
        </div>
      </section>
    </div>
  );
};

export default Footer;


const TagLabel = ({ text }) => (
  <p className="px-3 py-2 bg-gray-200 cursor-pointer flex justify-center rounded-3xl hover:text-[#5869DA]">
    {text}
  </p>
);

const Hr = () => (
    <hr className="my-2 w-48"/>
)


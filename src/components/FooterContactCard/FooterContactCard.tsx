import React from 'react';
import Image from "next/image";
import Link from 'next/link';

const FooterContactCard = () => {
  // Dummy array for social icons
  const socialIcons = [
    { link: "#", name: "Discord", URL: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Discordicons-78FxSkUmhinzPZTllRUp1LJzFJ3C7f.svg" },
    { link: "#", name: "Facebook", URL: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/facebookicons-9z3TkQw33WsA3zdlC4Spb9Ef5ysWOf.svg" },
    { link: "#", name: "Twitter", URL: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/twitter%201icons-wizZXImC607LGWyfCr8xpG3P7puQUG.svg" },
    { link: "#", name: "Telegram", URL: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/telegramicons-j0W4B0nSj497SihxtgJENrSVGy3AXZ.svg" },
    { link: "#", name: "Reddit", URL: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/redditicons-VdNY3DMgWJARbPIy6uXvqdn8n62Hp4.svg" },
    { link: "#", name: "LinkDin", URL: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/linkedinicons-NgQqayJoNqJ87aEzH3eqtHMDRPGrhu.svg" },
    { link: "#", name: "Instagram", URL: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/instagramicons-biZfdT4lokh6lAxfMkypWpXNBd2De4.svg" },
    { link: "#", name: "Metaline", URL: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Group%2010718icons-0eLsc77r9odxjRNohFgeYkCtcEJ4Y8.svg" }
  ];


  return (
    <div className="flex flex-col flex-1 items-start gap-3 w-full">
      {/* First Row: EMAIL US */}
      <div className="text-pictonBlue text-xs font-medium" >
        EMAIL US
      </div>

      {/* Second Row: Email Address */}
      <div className="text-default text-base" >
        support@funblocks.com
      </div>

      {/* Third Row: Social Icons */}
      <div className="flex items-start gap-2">
        {socialIcons.map((icon, index) => (
          <div key={index} className="cursor-pointer hover:scale-105 transition-all" style={{}}>
            <Link href={icon.link}>
              <Image
                src={icon.URL}
                alt={`${icon.name}`}
                width={30.496}
                height={30.496}
                layout="fixed"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterContactCard;

import styles from "../style";
import { startwithus } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-10">
        <div className="flex-1 flex flex-col justify-center">
          <img
            src={startwithus}
            alt="Start With Us Logo"
            className="w-full md:w-auto h-auto object-contain mx-auto md:ml-16 md:mr-0"
            style={{ maxWidth: '266px', maxHeight: '72.14px' }}
          />
          <p className={`${styles.paragraph} font-sora text-center text-sm mt-2 mx-auto md:ml-12 md:max-w-[312px]`}>
            A new way to make payments easy, reliable, and secure.
          </p>
        </div>
        {footerLinks.map((footerlink, index) => (
          <div key={footerlink.title} className="flex flex-col ss:my-0 my-4 min-w-[150px] mx-auto">
            <h4 className="font-poppins text-lg text-[18px] leading-[27px] text-n-14 mt-4 text-center md:text-center">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-2 md:mt-4 text-center md:text-left">
              {/* Render tabs */}
              {footerlink.tabs && footerlink.tabs.map((tab) => (
                <li
                  key={tab.id}
                  className={`font-sora text-center text-sm text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}
                >
                  <a href={tab.url}>{tab.name}</a>
                </li>
              ))}
            </ul>
            <ul className="list-none mt-2 md:mt-4 text-center md:text-left">
              {/* Render services */}
              {footerlink.services && footerlink.services.map((service) => (
                <li
                  key={service.id}
                  className={`font-sora text-center text-sm text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}
                >
                  <a href={service.url}>{service.name}</a>
                </li>
              ))}
            </ul>
            {/* Conditionally render divider */}
            {index < footerLinks.length - 1 && (
              <div className="hidden lg:block w-full h-0.5 bg-gray-300 bg-opacity-25 my-4 mx-auto" />
            )}
          </div>
        ))}
      </div>
    </div>
    <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
      <p className="caption text-n-4 lg:block">
        © {new Date().getFullYear()}. All rights reserved.
      </p>

      <ul className="flex gap-5 flex-wrap">
        {/* Render social media links */}
        {socialMedia.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
          >
            <img src={item.icon} width={24} height={24} alt={item.title} />
          </a>
        ))}
      </ul>
    </div>
  </section>
);

export default Footer;

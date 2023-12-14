import { motion } from 'framer-motion'
const AboutpartT = () => {
    return (
        <div className="px-[70px] h-auto overflow-hidden  min-h-screen bg-[#000] min-[992px]:pt-[130px] max-[992px]:pt-[40px] max-[768px]:px-[20px] py-[30px] "


        >
            <motion.section className="text-white max-[768px]:text-center max-[768px]:text-[14px]"

            >
                <motion.h3 className="text-[#ee9703] text-[20px] font-semibold"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                > Objection to data collection</motion.h3>
                <motion.p className="mt-[15px]"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >You can prevent Google Analytics from collecting your data by clicking on the following link. An opt-out cookie will
                    be set to prevent your data from being collected on future visits to this website: Disable Google Analytics
                    Data protection declaration for the use of Facebook plugins (Like button)</motion.p>
                <motion.p className="mt-[40px]"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >Plugins from the social network Facebook, provider Facebook Inc., 1 Hacker Way, Menlo Park, California 94025
                    USA, are integrated on our website. You can recognize the Facebook plugins by the Facebook logo or the
                    Like button” (“I like”) on our site. You can find an overview of the Facebook plugins here:</motion.p>
                <motion.a href="http://developers.facebook.com/docs/plugins" className="mt-[10px] block"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                >http://developers.facebook.com/docs/plugins</motion.a>
                <motion.p className="mt-[15px]"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.3, duration: 0.5 }}
                >When you visit our pages, a direct connection is established between your browser and the Facebook server via the
                    plugin. Facebook receives the information that you have visited our site with your IP address. If you click the Facebook
                    Like" button while you are logged into your Facebook account, you can link the content of our pages to your Facebook"
                    profile. This allows Facebook to associate your visit to our site with your user account. We would like to point out that we
                    as the provider of the pages, have no knowledge of the content of the data transmitted or how it is used by Facebook ,
                    You can find more information on this in Facebook's privacy policy at <a href="http://de-de.facebook.com/policy.php.If " className="underline text-[#ee9703]"> http://de-de.facebook.com/policy.php.If</a> you do .
                    not want Facebook to be able to associate your visit to our site with your Facebook user account, please log out of your
                    Facebook user account. Data protection declaration for the use of Google+ Our pages use Google+ functions. The provider
                    is Google Inc., 1600 Amphitheater Parkway Mountain View, CA 94043, USA. Collection and disclosure of information
                    You can use the Google+ button to publish information worldwide. You and other users receive personalized content
                    from Google and our partners via the Google+ button. Google stores both the information that you +1'd content and
                    information about the page you were viewing when you clicked +1. Your +1 can be used as clues along with your profile
                    name and photo in Google services, such as in search results or in your Google profile, or in other places on websites
                    Google records information about your +1 activities in order to improve Google services for you and others. In order to .
                    be able to use the Google+ button, you need a globally visible, public Google profile that must contain at least the name
                    chosen for the profile. This name is used in all Google services and advertisements on the Internet. In some cases, this
                    name can also replace another name that you used when sharing content via your Google account. The identity of your
                    Google profile can be displayed to users who know your email address or have other identifying information about you
                    Use of Information Collected: In addition to the purposes explained above, the information you provide will be used in
                    accordance with the applicable Google data protection regulations. Google may publish aggregated statistics about
                    users'+1 activity or pass them on to users and partners, such as publishers, advertisers or affiliated websites. </motion.p>
            </motion.section>
        </div>
    )
}

export default AboutpartT

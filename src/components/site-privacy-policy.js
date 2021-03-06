/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';
import { SharedStyles } from './shared-styles.js';
import { PageViewElement } from './page-view-element.js';

class SitePrivacyPolicy extends PageViewElement {
  _render(props) {
    return html`
      ${SharedStyles}
      <style>
        section {

        }
      </style>
      <section>
        <a href="#information-collection">Information Collection</a>
        <a href="#information-usage">Information Usage</a>
        <a href="#information-protection">Information Protection</a>
        <a href="#cookie-usage">Cookie Usage</a>
        <a href="#third-party-disclosure">3rd Party Disclosure</a>
        <a href="#third-party-links">3rd Party Links</a>
      </section>

      <section>
        <h2>Information Collection</h2>
        <ul>
          <li>Google AdSense</li>
          <li>Fair Information Practices</li>
          <li>COPPA</li>
          <li>CalOPPA</li>
          <li>Our Contact Information</li>
        </ul>
        <p>This privacy policy has been compiled to better serve those who are concerned with how their "Personally Identifiable Information" (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.</p>

        <h3>What personal information do we collect from the people that visit our blog, website or app?</h3>
        <p>When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address, mailing address, phone number, credit card information or other details to help you with your experience.</p>
      </section>

      <section>
        <h2 id="information-usage">When do we collect information?</h2>
        <p>We collect information from you when you register on our site, place an order, subscribe to a newsletter, respond to a survey, fill out a form, Use Live Chat, Open a Support Ticket or enter information on our site.</p>
        <p>Provide us with feedback on our products or services</p>

        <h3>How do we use your information?</h3>
        <p>We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:</p>
        <ul>
          <li>To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.</li>
          <li>To improve our website in order to better serve you.</li>
          <li>To allow us to better service you in responding to your customer service requests.</li>
          <li>To administer a contest, promotion, survey or other site feature.</li>
          <li>To quickly process your transactions.</li>
          <li>To ask for ratings and reviews of services or products</li>
          <li>To follow up with them after correspondence (live chat, email or phone inquiries)</li>
        </ul>
      </section>

      <section>
        <h2 id="information-protection">How do we protect your information?</h2>
        <p>Our website is scanned on a regular basis for security holes and known vulnerabilities in order to make your visit to our site as safe as possible.</p>
        <p>We use regular Malware Scanning.</p>
        <p>Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.</p>
        <p>We implement a variety of security measures when a user places an order enters, submits, or accesses their information to maintain the safety of your personal information.</p>
        <p>All transactions are processed through a gateway provider and are not stored or processed on our servers.</p>
      </section>

      <section>
        <h2 id="cookie-usage">Do we use "cookies"?</h2>
        <p>Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information. For instance, we use cookies to help us remember and process the items in your shopping cart. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.</p>
        <p>We use cookies to:</p>
        <ul>
          <li>Help remember and process the items in the shopping cart.</li>
          <li>Understand and save user's preferences for future visits.</li>
          <li>Keep track of advertisements.</li>
          <li>Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future. We may also use trusted third-party services that track this information on our behalf.</li>
        </ul>
        <p>You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since browser is a little different, look at your browser's Help Menu to learn the correct way to modify your cookies.</p>
        <p>If users disable cookies in their browser:</p>
        <p>If you turn cookies off it will turn off some of the features of the site.</p>
      </section>

      <section>
        <h2 id="third-party-disclosure">Third-party disclosure</h2>
        <div>We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when it's release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.</div>
      </section>

      <section>
        <h2 id="third-party-links">Third-party links</h2>
        <p>Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.</p>

        <h3 id="gooAd">Google</h3>
        <p>Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place to provide a positive experience for users. https://support.google.com/adwordspolicy/answer/1316548?hl=en</p>
        <p>We use Google AdSense Advertising on our website.</p>
        <p>Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie enables it to serve ads to our users based on previous visits to our site and other sites on the Internet. Users may opt-out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy.</p>
        <p>We have implemented the following:</p>
        <ul>
          <li>Remarketing with Google AdSense</li>
          <li>Google Display Network Impression Reporting</li>
          <li>Demographics and Interests Reporting</li>
          <li>DoubleClick Platform Integrationli&gt;</li>
        </ul>
        <p>We, along with third-party vendors such as Google use first-party cookies (such as the Google Analytics cookies) and third-party cookies (such as the DoubleClick cookie) or other third-party identifiers together to compile data regarding user interactions with ad impressions and other ad service functions as they relate to our website.</p>
        <p>Opting out:</p>
        <p>Users can set preferences for how Google advertises to you using the Google Ad Settings page. Alternatively, you can opt out by visiting the Network Advertising Initiative Opt Out page or by using the Google Analytics Opt Out Browser add on.</p>

        <h3 id="calOppa">California Online Privacy Protection Act</h3>
        <p>CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law's reach stretches well beyond California to require any person or company in the United States (and conceivably the world) that operates websites collecting Personally Identifiable Information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals or companies with whom it is being shared. - See more at: <a href="http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf">http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf</a></p>
        <p>According to CalOPPA, we agree to the following:</p>
        <p>Users can visit our site anonymously.</p>
        <p>Once this privacy policy is created, we will add a link to it on our home page or as a minimum, on the first significant page after entering our website.</p>
        <p>Our Privacy Policy link includes the word "Privacy" and can easily be found on the page specified above.</p>
        <p>You will be notified of any Privacy Policy changes:</p>
        <ul>
          <li>On our Privacy Policy Page</li>
          <li>We will notify you via email within 7 business days</li>
        </ul>
        <p>You can change your personal information:</p>
        <ul>
          <li>By emailing us</li>
          <li>By calling us</li>
          <li>By logging in to your account</li>
          <li>By chatting with us or by sending us a support ticket</li>
        </ul>

        <h3>How does our site handle Do Not Track signals?</h3>
        <p>We honor Do Not Track signals and Do Not Track, plant cookies, or use advertising when a Do Not Track (DNT) browser mechanism is in place.</p>

        <h3>Does our site allow third-party behavioral tracking?</h3>
        <p>It's also important to note that we allow third-party behavioral tracking</p>

        <h3 id="coppAct">COPPA (Children Online Privacy Protection Act)</h3>
        <p>When it comes to the collection of personal information from children under the age of 13 years old, the Children's Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, United States' consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children's privacy and safety online.</p>
        <p>We do not specifically market to children under the age of 13 years old.</p>

        <h3 id="ftcFip">Fair Information Practices</h3>
        <p>The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information.</p>
        <p>In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur:</p>
        <ul>
          <li>We will notify you via email within 7 business days</li>
          <li>We will notify the users via in-site notification within 7 business days</li>
          <li>We also agree to the Individual Redress Principle which requires that individuals have the right to legally pursue enforceable rights against data collectors and processors who fail to adhere to the law. This principle requires not only that individuals have enforceable rights against data users, but also that individuals have recourse to courts or government agencies to investigate and/or prosecute non-compliance by data processors.</li>
        </ul>

        <h3 id="canSpam">CAN SPAM Act</h3>
        <p>The CAN-SPAM Act is a law that sets the rules for commercial email, establishes requirements for commercial messages, gives recipients the right to have emails stopped from being sent to them, and spells out tough penalties for violations.</p>
        <p>We collect your email address in order to:</p>
        <ul>
          <li>Send information, respond to inquiries, and/or other requests or questions</li>
          <li>Process orders and to send information and updates pertaining to orders.</li>
          <li>Send you additional information related to your product and/or service</li>
          <li>Market to our mailing list or continue to send emails to our clients after the original transaction has occurred.</li>
        </ul>
        <p>To be in accordance with CANSPAM, we agree to the following:</p>
        <ul>
          <li>Not use false or misleading subjects or email addresses.</li>
          <li>Identify the message as an advertisement in some reasonable way.</li>
          <li>Include the physical address of our business or site headquarters.</li>
          <li>Monitor third-party email marketing services for compliance, if one is used.</li>
          <li>Honor opt-out/unsubscribe requests quickly.</li>
          <li>Allow users to unsubscribe by using the link at the bottom of each email.</li>
        </ul>
        </section>

        <section>
        <h2>Unsubscribing</h2>
        <ul>
          <li>If at any time you would like to unsubscribe from receiving future emails, you can email us at <a href="mailto:unsubscribe@matrimony.place">unsubscribe@matrimony.place</a></li>
          <li>Follow the instructions at the bottom of each email and we will promptly remove you from <strong>ALL</strong> correspondence.</li>
        </ul>
      </section>
      <aside>spispopd</aside>
    `;
  }
}

window.customElements.define('site-privacy-policy', SitePrivacyPolicy);

import "../App.css";
import '../css/index.css'
import '../css/form.css'
import '../css/confo.css'
import '../js/index.js'
import './style.css'
import React, { useState, useEffect } from 'react'
import backbutton from '../image/backbutton.png'

const Privacy = () => {

    return (
        <>
            <div className="back-button">
                <a href="./Home"> <img src={backbutton} alt="" srcset="" /></a>
            </div>
            <div className="success-confram  faq-color-C3EEFE">
                <div className="privacy">
                    <h3>Privacy and Confidentiality Policy</h3><br />
                    <p>
                        LEAD Program is a property of Ed4All Private Limited, an Indian Company registered under the
                        Companies Act, 2013 having its registered office at 54/7, 3rd Street Voltas Colony, Chennai
                        600061, Tamil Nadu, India Telangana Academy for Skill and Knowledge (TASK), an initiative of
                        Department of IT E&amp;C, Govt. of Telangana, a not-for-profit organization created by Government
                        of Telangana, having its registered office at 1st Floor Ashoka Raghupathi Chambers Opp to
                        Shoppers Stop, SP Road, Secundrabad 500016.
                    </p><br />
                    <h5>General</h5>
                    <p>
                        1- www.ed4all.in (“our”, “us”, “we”, “Website”, “Ed4All”) is committed to the protection of
                        Information provided by the users (&quot;you&quot;, &quot;your&quot;, &quot;users&quot;) to us. You agree that your use of
                        Ed4All’s services or our interface implies your free, informed, and clear consent to the
                        collection, processing, and use of your Information in accordance with the terms of this
                        Privacy and Confidentiality Policy (&quot;Privacy Policy&quot;).
                        <br /> <br />
                        2- We take the privacy of our users seriously. We value your privacy and appreciate your trust
                        in us. We are committed to safeguarding the privacy of our users while providing a
                        personalized and valuable service. This Privacy Policy applies to current and former visitors
                        to our website and to our online customers. This Policy describes how we treat user
                        information we collect on http://lead.ed4all.in and other offline sources.
                        <br /><br />
                        3- Our privacy policy may change at any time without prior notification. To make sure that
                        you are aware of any changes, kindly review the policy periodically. This Privacy Policy shall
                        apply uniformly to Ed4All applications, desktop website &amp; mobile WAP site.
                        <br /><br />
                        4- We will not sell, share, or rent your personal information to any 3rd party or use your email
                        address/mobile number for unsolicited emails and/or SMS. Any emails and/or SMS sent by
                        Ed4All will only be in connection with the provision of agreed services &amp; products and this
                        Privacy Policy. Periodically, we may reveal general statistical information about Ed4All &amp; its
                        users, such as number of visitors, number and type of goods purchased and services
                        availed, etc.
                        <br /><br />
                        5- We reserve the right to communicate your personal information to any third party that
                        makes a legally compliant request for its disclosure.
                        <br /><br />
                        6- If you choose to visit the website, your visit and any dispute over privacy is subject to this
                        Policy and the website&#39;s terms of use. In addition to the foregoing, any disputes arising
                        under this Policy shall be governed by the laws of India.
                        <br /><br />
                        7- This Policy does not apply to any information other than information collected by Ed4All
                        through the Website including such information collected in accordance with the clause on
                        “Collection of Information” above. This Policy shall not apply to any unsolicited information
                        provided by the Users through this Website or through any other means. This includes, but
                        is not limited to, information posted to any public areas of the Website. All such unsolicited
                        information shall be deemed to be non-confidential and Ed4All shall be free to use, disclose
                        such unsolicited information without limitation.
                    </p>
                    <br />
                    <h5>Information we collect</h5><br />
                    <p><b>Personal information.   </b>We collect your name, email, mobile number, phone number, street,
                        city, state, pin code, country, and IP address etc.</p><br />
                    <p><b>Payment and billing information.   </b>We might collect your billing name, billing address and
                        payment method when you buy a subscription. We NEVER collect or capture your debit/credit
                        card number or debit/credit card expiry date or other details pertaining to your debit/credit
                        card on our website. Debit/Credit card information will be obtained and processed by our
                        online payment partner CC Avenue.</p><br />
                    <p><b>Information you post.   </b>We collect information you post in a public space on our website or on a
                        third-party social media site belonging to www.ed4all.in</p><br />
                    <p><b>Demographic information.   </b>We may collect demographic information about you, events you
                        like, events you intend to participate in, subscriptions you buy, or any other information
                        provided by your during the use of our website. We might collect this as a part of a survey also.</p><br />
                    <p><b>Information Collected Automatically.   </b>We collect log file information that is automatically
                        reported by your device each time you access our Services. For example, when you access the
                        Website, our servers automatically record certain information that your web browser sends
                        whenever you visit any website. These server logs may include information such as your web
                        request, browser type, referring/exit pages and URLs, number of clicks, domain names, landing
                        pages, pages viewed, and other similar information which constitutes personal information. We
                        may use mobile analytics software and various backend systems to analyze certain information
                        regarding your use of the Services such as page views, and transaction-related information that
                        may constitute personal information. In general, we will store this information in an
                        anonymous aggregated form; however, our third-party tracking partners may store certain
                        information, such as page views, in a manner that can be associated to specific users and may
                        constitute personal information. We use persistent and session cookies on our website. A
                        persistent cookie remains on your hard drive after you close your browser and may be used by
                        your browser on subsequent visits to the Website. Persistent cookies can be removed by
                        following your web browser’s directions. A session cookie is temporary and disappears after
                        you close your browser. You can reset your web browser to refuse all cookies or to indicate
                        when a cookie is being sent. However, you may experience some changes in your ability to use
                        the Website. We do not collect specific information about your location from your mobile
                        device, but we do log your IP address, which can be used to approximate location. We use IP
                        addresses only for activities necessary to maintain or analyze the Service; perform network
                        communications; authenticate users or personalize content; protect the security or integrity of
                        the user and the Service; ensure legal or regulatory compliance; or fulfill a request of a use.</p><br />
                    <p><b>Other information.   </b>If you use our website, we may collect information about your IP address
                        and the browser you&#39;re using. We might look at what site you came from, duration of time
                        spent on our website, pages accessed or what site you visit when you leave us. We might also
                        collect the type of mobile device you are using, or the version of the operating system your
                        computer or device is running.</p><br />
                    <h5>We collect information in different ways.</h5><br />
                    <p><b>We collect information directly from you.   </b>We collect information directly from you when you
                        register for a course or buy a subscription. We also collect information if you post a comment
                        on our websites or ask us a question through phone or email.</p><br />
                    <p><b>We collect information from you passively.   </b>We use tracking tools like Google Analytics, Google
                        Webmaster, browser cookies and web beacons for collecting information about your usage of
                        our website.</p><br />
                    <p><b>We get information about you from third parties.   </b>For example, if you use an integrated social
                        media feature on our websites. The third-party social media site will give us certain information
                        about you. This could include your name and email address.</p><br />
                    <h5>Use of your personal information</h5><br />
                    <p><b>We use information to contact you:   </b>We might use the information you provide to contact you
                        for confirmation of a purchase on our website or for other promotional purposes or other
                        related purposes.</p><br />
                    <p><b>We use information to respond to your requests or questions.   </b>We might use your information
                        to confirm your registration.</p><br />
                    <p><b>We use information to improve our products and services.   </b>We might use your information to
                        customize your experience with us. This could include displaying content based upon your
                        preferences.</p><br />
                    <p><b>We use information to look at site trends and customer interests.   </b>We may use your
                        information to make our website and products better. We may combine information we get
                        from you with information about you we get from third parties.</p><br />
                    <p><b>We use information for security purposes.   </b>We may use information to protect our company,
                        our customers, or our websites.</p><br />
                    <p><b>We use information for marketing purposes.   </b>We might send you information about special
                        promotions or offers. We might also tell you about new features or products. These might be
                        our own offers or products, or third-party offers or products we think you might find
                        interesting. Or, for example, if you subscribe to our platform, we&#39;ll enroll you in our newsletter.</p><br />
                    <p><b>We use information to send you transactional communications.   </b>We might send you emails or
                        SMS about your account or your subscription.</p><br />
                    <h5>General.</h5><br />
                    <ul style={{ listStyleType: 'disc' }}>
                        <li>To operate the Service, monitor the effectiveness of the Service, improve the content of
                            the Service, and improve layout and design.</li><br />
                        <li>To help provide you with a smooth, efficient user experience.</li><br />
                        <li>To monitor, analyze, and describe usage patterns and performance of the Service, including
                            aggregate metrics such as total number of visitors, traffic, and demographic patterns.</li><br />
                        <li>To conduct system administration and system troubleshooting and to diagnose or fix
                            technology problems.</li><br />
                        <li>To comply with legal requirements and processes (for example, in response to subpoenas,
                            court orders, and law enforcement or governmental requests or investigations), and to
                            protect our legal rights or the rights of others (for example, by working to reduce the risk of
                            fraud or misuse of the Service).</li><br />
                        <li>To enforce our Terms of Use or other policies or agreements.</li><br />
                        <li>With respect to information collected through the Website described in the Information
                            Collected Automatically section above, to assist in marketing efforts, including, for
                            example, by tailoring and serving advertisements, and by tracking the effectiveness of
                            marketing efforts.</li><br />
                        <li>In connection with a business transaction, such as the bankruptcy or liquidation of, sale of,
                            purchase of, or merger with our business or another business.</li><br />
                    </ul>
                    <p>We use information as otherwise permitted by law.</p><br />
                    <h5>Sharing of information with third parties</h5><br />
                    <p><b>We shall share information with third parties who perform services on our behalf.   </b>We share
                        information with vendors who help us manage our online registration process or payment
                        processors or transactional message processors. Some vendors may be located outside of India.</p><br />
                    <p><b>We shall share information with the event organizers.   </b>We share your information with event
                        organizers and other parties responsible for fulfilling the purchase obligation. The event
                        organizers and other parties may use the information we give them as described in their privacy
                        policies.</p><br />
                    <p><b>We shall share information with our business partners.   </b>This includes a third party who provide
                        or sponsor an event, or who operates a venue where we hold events. Our partners use the
                        information we give them as described in their privacy policies.</p><br />
                    <p><b>We may share information if we think we have to in order to comply with the law or to
                        protect ourselves.   </b>We will share information to respond to a court order or subpoena. We shall
                        also share it if a government agency or investigatory body requests. Or we might also share
                        information when we are investigating potential fraud.Ed4All will disclose your personal
                        information where required to do so by law or subpoena or if we reasonably believe that such
                        action is necessary to (a) comply with the law and the reasonable requests of law enforcement;
                        (b) to enforce our Terms of Use or to protect the security or integrity of our Service; and/or (c)
                        to exercise or protect the rights, property, or personal safety of Ed4All, our users or others. It is
                        our policy to provide notice to our users before producing their personal information in
                        response to law enforcement requests unless (i) we are prohibited by law or court order from
                        doing so, (ii) we have reason to believe the user’s account has been compromised such that the
                        notice would go to the wrong person, or notice would otherwise be counterproductive or
                        would create a risk to safety, or (iii) it is an emergency request and prior notice would be
                        impractical (in which case we may provide notice after the fact).</p><br />
                    <p><b>We shall share information with any successor to all or part of our business.   </b>We may buy or
                        sell/divest/transfer the company (including any shares in the company), or any combination of
                        our products, services, assets and/or businesses. Your personal information, such as email
                        addresses, and other user information related to the Service, may be among the items sold or
                        otherwise transferred in these types of transactions. We may also sell, assign or otherwise
                        transfer such personal information in the course of corporate divestitures, mergers,
                        acquisitions, bankruptcies, dissolutions, reorganizations, liquidations, similar transactions or
                        proceedings involving all or a portion of the company. For example, if part of our business is
                        sold, we shall give our customer list as part of that transaction.</p><br />
                    <p><b>We may share your information for reasons not described in this policy.   </b>We may tell you
                        before we do this.</p><br />
                    <h5>Data Retention</h5><br />
                    <p>We will retain your information for as long as is reasonably necessary in relation to the
                        purposes for which this data was collected. In many instances, we will retain your data while it
                        is necessary for your use of the Service, which may include maintaining this information beyond
                        when you cease using the Service.</p><br />
                    <p>For instance, Ed4All may retain users’ data for the following purposes:</p><br />
                    <ul style={{ listStyleType: 'disc' }}>
                        <li>To develop new features and improve the Service.</li><br />
                        <li>To support subsequent customer service inquiries.</li><br />
                        <li>To improve the safety and security of the Service; or</li><br />
                        <li>Comply with our legal obligations.</li>
                    </ul><br /><br />
                    <h5>Email Opt-Out</h5><br />
                    <p><b>You can opt out of receiving our marketing emails.   </b>To stop receiving our promotional emails,
                        please email happytohelp@ed4all.in. It may take about ten days to process your request. Even
                        if you opt out of getting marketing messages, we will still be sending you transactional
                        messages through email and SMS about your purchases.</p><br />
                    <h5>Cookies</h5><br />
                    <p>A &quot;cookie&quot; is a small piece of information stored by a web server on a web browser so it can be
                        later read back from that browser. Ed4All uses cookie and tracking technology depending on
                        the features offered. No personal information will be collected via cookies and other tracking
                        technology; however, if you previously provided personally identifiable information, cookies
                        may be tied to such information. Aggregate cookie and tracking information may be shared
                        with third parties.</p><br />
                    <h5>Third party sites</h5><br />
                    <p>If you click on one of the links to third party websites, you may be taken to websites we do not
                        control. This policy does not apply to the privacy practices of those websites. Read the privacy
                        policy of other websites carefully. We are not responsible for these third-party sites. Our site
                        links to other websites that may collect personally identifiable information about you. Ed4All is
                        not responsible for the privacy practices or the content of those linked websites.</p><br />
                    <h5>Restriction of Liability</h5><br />
                    <p>We make no claims, promises, or guarantees about the accuracy, completeness, or adequacy of
                        the contents of this Website and expressly disclaim liability for errors and omissions in the
                        contents of this Website.</p><br />
                    <p>No warranty of any kind, implied, expressed or statutory, including but not limited to the
                        warranties of non-infringement of third-party rights, title, merchantability, fitness for a
                        particular purpose and freedom from computer virus, is given with respect to the contents of
                        the Website or its hyperlinks to other internet resources.</p><br />
                    <p>Reference in this Website to any specific commercial products, processes, or services, or the
                        use of any trade, firm or corporation name is for the information and convenience of the public,
                        and does not constitute endorsement, recommendation, or favoring by us</p><br />
                    <p>The contents of this website are under copyright and/or trademark of their original author(s)
                        unless otherwise noted on the page itself.</p><br />
                    <h5>Governing Law or Dispute Resolution</h5><br />
                    <p>This Policy shall be governed by and construed in accordance with the laws of the Republic of
                        India and subject to the provisions of arbitration set out herein, the courts at New Delhi shall
                        have exclusive jurisdiction in relation to any disputes arising out of or in connection with this
                        Policy.</p><br />
                    <p>If any dispute arises between Ed4All and the User in connection with or arising out of the
                        validity, interpretation, implementation, or alleged breach of any provision of the Policy, such
                        dispute shall be referred to and finally resolved by arbitration in accordance with the Indian
                        Arbitration and Conciliation Act, 1996 for the time being in force, which rules are deemed to be
                        incorporated by reference in this clause.</p><br />
                    <p>There shall be one (1) arbitrator and the seat of the arbitration shall be New Delhi India.</p><br />
                    <p>The language of the arbitration proceedings and of all written decisions and correspondence
                        relating to the arbitration shall be English.</p><br />
                    <h5>Foreign Jurisdiction</h5><br />
                    <p>Ed4All makes no representation that the content contained on the Website is appropriate or to
                        be used or accessed outside of the Republic of India. If the Users use or access the Website
                        from outside the Republic of India, they do so at their own risk and are responsible for
                        compliance with the laws of such jurisdiction.</p><br />
                    <h5>Grievance Officer</h5><br />
                    <p>In accordance with Information Technology Act 2000 and rules made there under, the contact
                        details of the Grievance Department are provided below:</p><br />
                    <p>Mr. Jay Cheema</p><br />
                    <p>If you have any questions about this Policy or other privacy concerns, you can also email us at
                        happytohelp@ed4all.in.</p><br />
                </div>
            </div>
        </>
    );
};

export default Privacy;

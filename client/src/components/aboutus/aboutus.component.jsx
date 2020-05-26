import React from "react";
import "./aboutus.styles.scss";
import FooterPage from "../footer/footer.component";

const Aboutus = ({}) => (
    <div>
    <div class="about-section">
  <h1>THE SOCIAL STORE</h1>
  <p>Looking to increase social attention? Want a gaming account ?</p>
  <p>You have come to the right place 😎😎</p>
</div>
<h2>Why Choose Us?</h2>
<p>The website is built so that you can shop every social platform services and gaming services just at a single place without looking around the web from untrusted sources.</p>
<h2>How This Works?</h2>
<p> First you have to  add items to the Cart that you want to buy and after doing that just head on to the checkout page to Pay. There are two methods of paying either you can pay at that very moment to avoid delay and then you will get the desired account or service in less than 15 minutes or if you want to Pay Later and talk to us before paying to know more details you can just select the pay later option and fill in test card details so we will be notified and get in touch with you ASAP. Make sure to enter the correct details i.e email id as we will contact you from their only.You can also contact us from the given social media links below. </p>
<h2>About Me</h2>
<div class="row">
  <div class="column">
    <div class="card">
      <img src="https://i.ibb.co/xfCMXyK/mypic.jpg" alt="Bishtji" />
      <div class="container">
        <h2>Shubham Bisht</h2>
        <p class="title">Founder & Designer</p>
        <p>Just an IT engineering trying to learn how to make websites using React.Also a Trusted seller from last three years.</p>
        <br/>
        <p className="title">Mobile Number - +91 8130370386</p>
        <p><button class="button"><a className="contactme" href="mailto:bishtjisop@gmail.com">Contact</a></button></p>
      </div>
    </div>
  </div>

</div>
<FooterPage/>
</div>
)

export default Aboutus;
import React from 'react';
import { Accordion } from 'react-bootstrap';
import './FAQ.css';

const FAQ = () => {
  return (
    <div className="container mt-5">
      <h2 style={{fontSize:"2rem", color:" #333", fontFamily:"centaur"}} className="mb-4 text-center">Frequently Asked Questions</h2>
      <Accordion  defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>How many days does it take to ship a product?</Accordion.Header>
          <Accordion.Body>
          We are 'Made To Order', and hence time to dispatch may vary from product to product. Normally, we would require 10-12 Days. You may reach us through email at support@baisega.com or WhatsApp us at +919352767013, so that we can assist you with the appropriate details for the product.
          <br/>
          <br/>
          Please Note:- Post Shipment, the courier takes somewhere around 3 to 5 working days to deliver the item.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Do you ship items globally?</Accordion.Header>
          <Accordion.Body>
           Yes, we ship worldwide
          </Accordion.Body>
        </Accordion.Item>
       
        <Accordion.Item eventKey="2">
          <Accordion.Header>What are the Shipping Charges?</Accordion.Header>
          <Accordion.Body>
          For Delivery in India we charge ₹200.
          <br/>
          We do not accept COD for orders above ₹40,000
          <br/>
          Free Shipping within India for prepaid orders.
          <br/>
          International Shipping Charges $ 10.00 on orders below $ 300.00..
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Do I have to pay the Custom Duty Charges?</Accordion.Header>
          <Accordion.Body>
          Yes Custom Duty Charges are to be borne by you since, 'Every time when an item crosses an international border from one country to another, it is subject to these charges by the importing country's rules and regulations'.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Can I order for COD (Cash On Delivery)?</Accordion.Header>
          <Accordion.Body>
          Yes, We accept COD within India.
          </Accordion.Body>
        </Accordion.Item> 
        <Accordion.Item eventKey="5">
          <Accordion.Header>Is COD available for International Order?</Accordion.Header>
          <Accordion.Body>
          We really apologize at the moment we do not have COD Option for International Customers. If you need any assistance, you may reach us at WhatsApp number, 9352767013.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>Is there an Express Delivery (Shipping Within 24-48 hrs)?</Accordion.Header>
          <Accordion.Body>
          Yes, we do have Express Delivery. Although, it is applicable only on available products and prepaid orders. Kindly reach out to us at 9352767013, to check for the product availability. Please note express shipping is chargeable, our team will contact you for shipping charges.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>Do you offer Customization?</Accordion.Header>
          <Accordion.Body>
          we charge 800/- rupees for basic customisation, final amount will vary case to case.
          <br/>
          Yes, customization is possible in terms of neck depth, size and length. Note that all customizations are chargeable.
          <br/>
          After placing the custom order, no changes can be made after 24 hours.
          <br/>
          We accept Prepaid Custom Order Only. 
          <br/>
          No Custom Order is Returnable / Exchangable.
          <br/>
          For additional details, you can contact us at 9352767013 or email at support@baisegaba.com.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>How do I get my outfit altered?</Accordion.Header>
          <Accordion.Body>
          We generally keep enough margin in all our custom made outfits to be taken 1 size up. Usually, the measurements are accurate and the alteration is quite minimal. However if anything comes up we would be happy to assist you.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>Is there a Return/Exchange or Refund for a Product?</Accordion.Header>
          <Accordion.Body>
          Refer to our return and exchange policy.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="10">
          <Accordion.Header>Will my first purchase discount applicable on returns and exchanges?</Accordion.Header>
          <Accordion.Body>
          No, once you get 10% discount on your first purchase you can not have discount on exchange and return items.
          <br/>
          This coupon is not applicable to sale products.
          <br/>
          Only one coupon will be applicable at a time.
          </Accordion.Body>
        </Accordion.Item>

  

      </Accordion>
    </div>
  );
};

export default FAQ;

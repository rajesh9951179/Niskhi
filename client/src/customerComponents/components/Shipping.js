import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Shipping = () => {
  const boldTextStyle = {
    fontFamily: 'centaur',
    fontSize: '1.25rem',
    fontWeight: 'bold'
  };

  const textStyle = {
    fontFamily: 'centaur',
    fontSize: '1.25rem'
  };

  return (
    <Container className="mt-5 mb-5">
      <Row className="mb-4">
        <Col>
          <h1 style={boldTextStyle}>Shipping and Returns Policy</h1>
          <h2 style={boldTextStyle}>1. Shipping Time:</h2>
          <ul style={textStyle}>
            <li>National orders are generally dispatched within 7-10 days.</li>
            <li>Products from our RTS section will be dispatched within 72 hours.</li>
            <li>
              Delivery time depends on courier partners and delivery location. In some locations, delivery may take longer depending on accessibility. In such cases, we will proactively reach out to you. Please check your emails and SMS for regular updates.
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 style={boldTextStyle}>2. Shipping Fees:</h2>
          <ul style={textStyle}>
          <li style={textStyle}> National Shipping</li>
            <li>We offer free shipping for all prepaid national orders.</li>
            <li>A shipping fee of ₹200.00 is applicable for COD (Cash on Delivery) orders.</li>
            <li>COD orders are accepted within India, with a 30% advance payment for order confirmation.</li>
          </ul>
          <h3 style={boldTextStyle}>3. International Shipping:</h3>
          <ul style={textStyle}>
            <li>Orders below $300 incur a shipping fee of $10.</li>
            <li>Orders above $300 enjoy free shipping.</li>
          </ul>
          <h3 style={boldTextStyle}>4. Returns/Exchanges:</h3>
          <ul style={textStyle}>
            <li>Our exchange policy allows for a one-time exchange or return.</li>
            <li>Refunds for returned products will be issued in the form of store credit only.</li>
            <li>Returns and exchanges are accepted within 7 days of delivery, and only one exchange or return is permitted per order.</li>
            <li>If we facilitate pickup, the customer will be responsible for a return shipping fee of Rs. 350.</li>
            <li>If the customer sends the product to us then the re-dispatch shipping cost of Rs. 200 will be borne by them.</li>
            <li>Sale items, discounted items, custom items, lehengas, and accessories are not eligible for returns or exchanges.</li>
            <li>By utilizing our exchange policy, customers acknowledge that they have read, understood, and agreed to our terms, conditions, and policies.</li>
          </ul>
          <h3 style={boldTextStyle}>5. Payment Methods:</h3>
          <ul style={textStyle}>
            <li>We accept the following online payment gateways: </li>
            <li>Credit/Debit Cards</li>
            <li>Net Banking</li>
            <li>UPI (Unified Payments Interface)</li>
            <li>PayPal</li>

          </ul>
          <h3 style={boldTextStyle}>6. Customer Support:</h3>
          <ul style={textStyle}>
            <li> For assistance, you can reach our customer support team through email at support@baisegaba.com or via WhatsApp at +917878756159.</li>

          </ul>
          <h3 style={boldTextStyle}>7. Discounts Policy:</h3>
          <ul style={textStyle}>
            <li>We offer a 10% discount on all first orders. You can use the code BG10 at checkout to activate the discount on cart value.</li>
            <li>No discounts are applicable on customised products.</li>
            <li>Please note 2 promotional offers cannot be clubbed together for the same order.</li>
          </ul>
          <h3 style={boldTextStyle}>What items are returnable?</h3>
          <ul style={textStyle}>
            <li>The products must be in original condition with all tags attached</li>
            <li>Returns and exchange will be available within 7 days of delivery.</li>
            <li>No exchange and return on customised or international orders.</li>
            <li>The products must be unwashed and unworn with the original packaging</li>
          </ul>

          <h3 style={boldTextStyle}>PLEASE NOTE </h3>
          <ul style={textStyle}>
            <li>Free gifts and Sale items are not returnable.</li>
            <li>Custom made products are not returnable</li>
          </ul>

          <h3 style={boldTextStyle}>How do I return?</h3>
          <ul style={textStyle}>
            <li> Enter your order number and email address in the fields mentioned in the Cancel/Return section and click Start</li>
            <li> Follow the instructions and select the items you want to return</li>
            <li> You will get a confirmation email with the shipping guidelines once the return request is approved.</li>
          </ul>

          <h3 style={boldTextStyle}>Are there any charges for return?</h3>
          <ul style={textStyle}>
            <li>Original shipping charges are non-refundable</li>
            <li> You are responsible for the charges of the return shipping.</li>
          </ul>

          <h3 style={boldTextStyle}>How soon will I get my refund?</h3>
          <ul style={textStyle}>
            <li>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.</li>
            <li>If you are approved, then your refund will be processed, and you will get your credit in your Baise Gaba account. This Credit will be valid for 6 months and it will be applicable on your next purchase.</li>
          </ul>










        </Col>
      </Row>
    </Container>
  );
}

export default Shipping;

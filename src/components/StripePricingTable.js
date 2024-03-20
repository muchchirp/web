import React, { useEffect } from 'react';
import { Container, Section } from "./ui";


const PricingTable = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/pricing-table.js';
    script.async = true;

    // Append the script to the body
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Container>
      <Section style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
        {/* This section now has padding applied to it */}
        <stripe-pricing-table
          pricing-table-id="prctbl_1OwJs8GUjDHrefXGT4ttuAcR"
          publishable-key="pk_live_51NAZ7SGUjDHrefXG5nHfp0EVIH1dB97WWDcpV91pulpqHNDApXhuetGWN30K1GKpDtKUHnBV64qziv1RZOuoFweU00VqnUVTei"
        ></stripe-pricing-table>
      </Section>
    </Container>
  );
};

export default PricingTable;

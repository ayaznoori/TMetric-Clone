import {
  Box,
  Flex,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Switch,
} from "@chakra-ui/react";
import {TiTick} from "react-icons/ti"
import React from "react";
import styles from "./pricing.module.css";

const PricingComponent = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (value) => setValue(value);
  const benefits = [
    "Time Tracking",
    "Unlimited projects and clients",
    "Reporting",
    "Timer button in 50+ web apps",
    "Calendar integrations: Google, Outlook",
    "Billable rates and money tracking",
    "Budgeting for projects",
    "Invoicing",
    "Task management",
    "Activity levels for employees",
    "Apps and sites usage reports",
    "Screenshots capturing",
    "Client logins for access to reports",
    "Paid time off tracking",
    "Payroll for employees",
    "Time tracking permissions",
    "Time-sync with Jira and QuickBooks",
    "Time-sync with GitLab and Redmine",
    "Time Off Calendar",
    "Work Schedule",
    "Team Dashboard",
  ];
  return (
    <div>
      <div className={styles.header_pricing_container}>
        <div>
          <h1 className={styles.pricing_text_div}>Pricing</h1>
        </div>
        <div className={styles.pricing_sub_text_div}>
          <p>All plans include free 30-day trial. No credit card required!</p>
        </div>
      </div>
      <div className={styles.billing_buttons_container}>
        <div className={styles.billing_switch_container}>
          <h4>Monthly</h4>
          <Switch colorScheme="whatsapp" size="lg" />
          <h4>Annually</h4>
        </div>
        <div className={styles.billing_team_members_container}>
          <h4>Team Size</h4>
          <div style={{ width: "70%" }}>
            <Flex>
              <NumberInput
                maxW="100px"
                mr="2rem"
                value={value}
                onChange={handleChange}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Slider
                flex="1"
                focusThumbOnChange={false}
                value={value}
                onChange={handleChange}
                maxW="60%"
                marginLeft="25px"
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb fontSize="md" boxSize="38px" children={value} />
              </Slider>
            </Flex>
          </div>
        </div>
      </div>
      <div className={styles.price_card_container}>
        <div className={styles.price_card_business}>
          <h1>Business</h1>
          <div>
            <p>
              $<b>21</b>/month
            </p>
          </div>
          <div>
            {benefits.map((benefit) => (
              <div className={styles.business_card_benefit}>
                <TiTick />
                {benefit}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.price_card_professional}></div>
        <div className={styles.price_card_free}></div>
      </div>
    </div>
  );
};

export default PricingComponent;

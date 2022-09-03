import {
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
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import React, { useEffect, useState } from "react";
import styles from "./pricing.module.css";
import db from "../../db"
const PricingComponent = () => {
  const [value, setValue] = React.useState(1);
  const [data, setData] = useState([]);
  const [isMonthly, setIsMonthly] = useState(true);
 
  const handleChange = (value) => setValue(value);
  const handleSwitchChange = () => {
    if(isMonthly == true){
      setIsMonthly(false)
    }
    else{
      setIsMonthly(true)
    }
  };
   
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
  useEffect(() => {
     setData(db().pricing)
 
  }, []);
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
          <Switch onChange={handleSwitchChange} colorScheme="whatsapp" size="lg" />
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
                defaultValue={value}
                min={1}
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
                defaultValue={value}
                min={1}
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
          <h1 className={styles.set_categories_heading}>Business</h1>
          <div className={styles.set_categories_price}>
            {data.map((e, index) => {
              if (value == data[index].team && isMonthly) {
                return (
                  <p>
                    ${" "}
                    <b
                      style={{
                        fontSize: "40px",
                        color: "black",
                        fontWeight: "700",
                      }}
                    >
                      {data[index].business.monthly}
                    </b>{" "}
                    /month
                  </p>
                )
              } else if(value==data[index].team && !isMonthly) {
                return (
                  <p>
                    ${" "}
                    <b
                      style={{
                        fontSize: "40px",
                        color: "black",
                        fontWeight: "700",
                      }}
                    >
                      {data[index].business.annually}
                    </b>{" "}
                    /year
                  </p>
                );
              }
            })}
          </div>
          <div>
            {benefits.map((benefit) => (
              <div className={styles.business_card_benefit}>
                <TiTick color="green" />
                {benefit}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.price_card_professional}>
          <h1 className={styles.set_categories_heading}>Professional</h1>
          <div className={styles.set_categories_price}>
            {data.map((e, index) => {
              if (value == data[index].team && isMonthly) {
                return (
                  <p>
                    ${" "}
                    <b
                      style={{
                        fontSize: "40px",
                        color: "black",
                        fontWeight: "700",
                      }}
                    >
                      {data[index].professional.monthly}
                    </b>{" "}
                    /month
                  </p>
                );
              } else if(value==data[index].team && !isMonthly) {
                return (
                  <p>
                    ${" "}
                    <b
                      style={{
                        fontSize: "40px",
                        color: "black",
                        fontWeight: "700",
                      }}
                    >
                      {data[index].professional.annually}
                    </b>{" "}
                    /year
                  </p>
                );
              }
            })}
          </div>
          <div>
            {benefits.map((benefit, index) => {
              if (index < 10) {
                return (
                  <div className={styles.professional_card_benefit}>
                    <TiTick color="green" />
                    {benefit}
                  </div>
                );
              } else {
                return (
                  <div
                    className={styles.professional_card_benefit}
                    style={{ color: "grey" }}
                  >
                    <ImCross
                      color="grey"
                      size="13px"
                      style={{ marginTop: "8px" }}
                    />
                    {benefit}
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className={styles.price_card_free}>
          <h1 className={styles.set_categories_heading}>Free</h1>
          <div className={styles.set_categories_price}>
            <p>
              ${" "}
              <b
                style={{ fontSize: "40px", color: "black", fontWeight: "700" }}
              >
                0
              </b>{" "}
              /month
            </p>
          </div>
          <div>
            {benefits.map((benefit, index) => {
              if (index < 4) {
                return (
                  <div className={styles.professional_card_benefit}>
                    <TiTick color="green" />
                    {benefit}
                  </div>
                );
              } else {
                return (
                  <div
                    className={styles.professional_card_benefit}
                    style={{ color: "grey" }}
                  >
                    <ImCross
                      color="grey"
                      size="13px"
                      style={{ marginTop: "8px" }}
                    />
                    {benefit}
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;

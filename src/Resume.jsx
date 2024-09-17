import {
  Box,
  Card,
  Divider,
  Icon,
  InlineStack,
  List,
  Page,
  Text,
} from "@shopify/polaris";
import { EmailIcon, PhoneIcon } from "@shopify/polaris-icons";
import React from "react";

const Resume = () => {
  return (
    <Page>
      <Card>
        <Box padding={400}>
          <Text alignment="center" as="h3" variant="heading2xl">
            DISHANT PATEL
          </Text>
          <Text alignment="center" variant="headingLg" as="h4">
            React Js developer
          </Text>
        </Box>
        <Divider></Divider>
        <Box padding={400}>
          <InlineStack align="space-between" as="div">
            <div>
              <Text variant="bodyLg" as="p" alignment="start">
                <i className="fa fa-phone"></i> : 7600022951
              </Text>
              <Text variant="bodyLg" as="p">
                <i className="fa fa-envelope"></i> :
                dishant.sureshbhai@gmail.com
              </Text>
            </div>
            <div>
              <Text variant=" bodyLg" as="p" breakWord>
                <i className="fa fa-home"></i>: D503 Nilkanth Sky near dd sports
                circle variyav surat
              </Text>
            </div>
          </InlineStack>
        </Box>
        <Divider></Divider>
        <Box paddingBlock={200}>
          <Text alignment="start" variant="headingXl" as="h4">
            <i className="fa fa-briefcase"></i> Work Experince
          </Text>
          <Box paddingBlock={200}>
            <Text variant="headingMd" as="h6" alignment="start">
              AD Digitech (Jan 2024 - tilldate)
              <br></br>
              React Js Developer
            </Text>
          </Box>
          <Text variant=" bodyLg" as="p" fontWeight="bold" alignment="start">
            Weblly ‑ Landing Page Builder
          </Text>
          <Text variant=" bodyLg" as="p" alignment="start">
            <List type="bullet">
              <List.Item>
                Effortlessly create beautiful, responsive landing pages with our
                drag-and-drop builder.{" "}
              </List.Item>
              <List.Item>
                {" "}
                No coding skills are required—design pixel-perfect pages for
                both mobile and desktop.
              </List.Item>
              <List.Item>
                Weblly is compatible with all Shopify themes,Effective elements
                included to enhance your sales
              </List.Item>
            </List>
          </Text>
          <Text variant=" bodyLg" as="p" fontWeight="bold" alignment="start">
            Navigo | Mobile Menu Bar
          </Text>
          <Text variant=" bodyLg" as="p" alignment="start">
            <List type="bullet">
              <List.Item>
                Mobile Bottom Menu navigation bars can give direct access to
                many important pages
              </List.Item>
              <List.Item>
                Intuitive to add menu bar - Fully customisable design - Preview
                option Mega menu, Mobile menu, Dropdown, Icons, Bottom bar
              </List.Item>
              <List.Item>
                Add eye-catching labels, badges, 1000+icons ,Add Products,
                Collections, Image With Text ,Navigation and Megamenu
              </List.Item>
              <List.Item>
                Drag-and-drop editor, Color and font, Animations, Badges and
                labels, Custom icons, CSS,JavaScript, Mobile responsive,
                Analyticts
              </List.Item>
            </List>
          </Text>
          <Box paddingBlock={200}>
            <Text variant="headingMd" as="h6" alignment="start">
              Identixweb Pvt Ltd (Oct 2022 - Aug 2023)
              <br></br>
              React Js Developer
            </Text>
          </Box>
          <Text variant=" bodyLg" as="p" fontWeight="bold" alignment="start">
            Rates by Zipcode iWeb
          </Text>
          <Text variant=" bodyLg" as="p" alignment="start">
            <List type="bullet">
              <List.Item>
                Set shipping rates for different zones based on zip codes or
                postal codes
              </List.Item>
              <List.Item>
                Set shipping charge based on multiple shipping rate rules
              </List.Item>
              <List.Item>
                Set shipping rates for specific shipping zone based on cart
                total price With multicurrency support,
              </List.Item>
              <List.Item>
                Add unlimited shipping zones and zipcodes for adding shipping
                charges add and edit price and weight based a rates and view a
                full analyticts of most reciving order zone
              </List.Item>
            </List>
          </Text>
          <Box paddingBlock={200}>
            <Text variant="headingMd" as="h6" alignment="start">
              Infinity Softech (Mar 2022 - Sep 2022)
            </Text>
            <Text variant="bodyLg" as="p" alignment="start">
              <List type="bullet">
                <List.Item>
                  Create a some figma ,illuster, photoshop to html css and js
                  websites and crete a ecommerce websites with js applay a
                  bundle discount percentage wise discount and checkout and,
                  crete a google task like task save and edit our task set high
                  and low prority filter wise
                </List.Item>
              </List>
            </Text>
          </Box>
        </Box>
        <Divider></Divider>
        <Box paddingBlock={200}>
          <Text variant="headingMd" as="h6" alignment="start">
            Skills
          </Text>
          <Text variant="bodyLg" as="p" alignment="start">
            Reactjs,Html,Css,Java Script,Next Js,Shopify
            Polaris,Bootstrep,Mui,Typescript,Tailwind Css
          </Text>
        </Box>
        <Box paddingBlock={200}>
          <Text variant="headingMd" as="h6" alignment="start">
            Education
          </Text>
          <Text variant="bodyLg" as="p" alignment="start">
            Bachelor Of Science
          </Text>
          <Text variant="bodyLg" as="p" alignment="start">
            P L Chachun Science Colleage (Mar 2019 - Mar 2022)
          </Text>
        </Box>
      </Card>
    </Page>
  );
};

export default Resume;

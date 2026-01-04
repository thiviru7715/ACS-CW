import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";  // Import default styles for tabs

const PropertyTabs = ({ property }) => {
    return (
        <Tabs>
            {/* The clickable tab headers */}
            <TabList>
                <Tab>Description</Tab>
                <Tab>Floor Plan</Tab>
                <Tab>Map</Tab>
            </TabList>

            {/* Content for the 'Description' tab */}
            <TabPanel>
                <p>{property.description}</p>
            </TabPanel>

            {/* Content for the 'Floor Plan' tab */}
            <TabPanel>
                <img
                    src={property.floorPlan}
                    alt="Floor Plan"
                    className="floor-plan"
                />
            </TabPanel>
            <TabPanel>
                {/* Embed Google Maps using the property's latitude and longitude */}
                <iframe
                    title="map"
                    width="100%"
                    height="300"
                    loading="lazy"
                    allowFullScreen
                    src={`https://www.google.com/maps?q=${property.lat},${property.lng}&output=embed`}
                ></iframe>
            </TabPanel>
        </Tabs>
    );
};
export default PropertyTabs;
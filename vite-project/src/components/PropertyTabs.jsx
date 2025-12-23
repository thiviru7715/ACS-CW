import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const PropertyTabs = ({ property }) => {
    return (
        <Tabs>
            <TabList>
                <Tab>Description</Tab>
                <Tab>Floor Plan</Tab>
                <Tab>Map</Tab>
            </TabList>

            <TabPanel>
                <p>{property.description}</p>
            </TabPanel>

            <TabPanel>
                <img
                    src={property.floorPlan}
                    alt="Floor Plan"
                    className="floor-plan"
                />
            </TabPanel>
            <TabPanel>
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
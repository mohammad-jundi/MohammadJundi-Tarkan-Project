import React from "react";

//import CreateDiet from "../../components/CreateDiet";
import EditDiet from "../../components/EditDiet";
import DietDetails from "../../components/DietDetails";
import ManageDiet from "../../components/ManageDiet";
import DietPageBackground from "../../images/mediterranean.jpg";
import { Row } from "antd";
import Chart from "../../components/Chart";

const editPageStyle = {
    backgroundImage: `linear-gradient(0deg, rgba(2,0,36,0.3) 0%, rgba(9,9,121,0.3) 0%, rgba(240,241,239,0.3) 0%),url(${DietPageBackground})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
    margin: "0",
};
const DietPage = () => {
    return (
        <div style={editPageStyle}>
            <Row >
                <ManageDiet />
                <EditDiet />
                <Chart />
            </Row>
        </div>
    );
};

export default DietPage;

// test

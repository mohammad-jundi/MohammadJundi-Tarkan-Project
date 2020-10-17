import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { connect } from "react-redux";
import { Card, Col, Divider } from "antd";
import BarChart from "./BarChart";

const Chart = selectedMeal => {
    //console.log(selectedMeal);
    const [chartData, setChartData] = useState();
    const [selectedMealArr, setSelectedMealArr] = useState([]);
    const [calories, setCalories] = useState([]);
    const [mealNames, setMealNames] = useState([]);

    useEffect(() => {
        if (selectedMeal.mealsChartContent) {
            setSelectedMealArr(
                Object.values(selectedMeal.mealsChartContent).flat()
            );
            console.log(
                "selected meal arr",
                Object.values(selectedMeal.mealsChartContent).flat()
            );
        }
    }, [selectedMeal.mealsChartContent]);

    useEffect(() => {
        setCalories(
            selectedMealArr.map(el =>
                el ? Math.round(el.nutrientsConsumed.calories) : ""
            )
        );
        //console.log(
        //    "set calories",
        //    selectedMealArr.map(el => el.nutrientsConsumed.calories)
        //);

        setMealNames(selectedMealArr.map(el => (el ? el.food_name : "")));
        // console.log(
        //     "selected meal arr",
        //     selectedMealArr.map(el => el.food_name)
        // );
    }, [selectedMealArr]);

    useEffect(() => {
        setChartData({
            labels: mealNames,
            datasets: [
                {
                    hoverBackgroundColor: [
                        "#FCF4DE",
                        "#E3B698",
                        "#FAB5B6",
                        "#D29AE3",
                        "#B8B8FF",
                    ],
                    label: "fat",
                    data: calories,
                    backgroundColor: [
                        "#FAEBA0",
                        "#E3A15F",
                        "#FA7B75",
                        "#C862E3",
                        "#787FFF",
                    ],
                },
            ],
        });
    }, [mealNames]);
    if (selectedMeal.mealsChartContent)
        return (
            <Col xs={24} sm={24} md={6} lg={8} xl={8} xxl={8}>
                <div style={{ width: "100%", marginTop: "3.3vh" }}>
                    <Card
                        title={
                            <Pie
                                hover={true}
                                data={chartData}
                                options={{
                                    maintainAspectRatio: false,
                                    cutoutPercentage: 70,
                                    tooltips: {
                                        enabled: true,
                                    },
                                    responsive: true,
                                    title: {
                                        display: true,
                                        text: "Diet Details ",
                                    },
                                    legend: {
                                        display: true,
                                        position: "bottom",
                                    },
                                }}
                            />
                        }
                        bordered={false}
                        style={{ width: "100%" }}
                    >
                        <h2 style={{ textAlign: "center" }}>
                            Calories:{" "}
                            {calories.length > 0
                                ? calories.reduce((acc, curr) => acc + curr)
                                : ""}
                        </h2>
                        <Divider />
                        <BarChart chartData={chartData} />
                    </Card>
                </div>
            </Col>
        );
    else {
        return <div></div>;
    }
};

const mapStateToProps = state => {
    return {
        uid: state.firebase.auth.uid,
        selectedMeal: state.DietReducer.activeMeal,
        mealsChartContent: state.DietReducer.activeMeal,
        mealsSet: state.DietReducer,
    };
};
export default connect(mapStateToProps)(Chart);

import React from "react";
import { Row, Col, Image, Divider, Space, Typography, Carousel } from "antd";

import restaurant from "../images/food.jpg";
import left1 from "../images/left1.png";
import mid1 from "../images/mid1.png";
import mid2 from "../images/mid2.png";
import never from "../images/never gunna.png";

const Home = () => {
    const { Title } = Typography;
    return (
        <>
            <Row
                align="middle"
                style={{
                    backgroundImage: ` linear-gradient(0deg, rgba(2,0,36,0.3) 0%, rgba(240,241,239,0.3) 0%, rgba(0,0,0,0.3) 0%), url(${restaurant})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100vw",
                    height: "80vh",
                    color: "white",
                }}
            >
                <Col span={12} offset={6}>
                    <Title
                        level={1}
                        style={{
                            color: "white",
                            fontSize: "6rem",
                            textAlign: "center",
                            fontFamily: "Arial, Helvetica",
                        }}
                    >
                        FOODCHECK
                    </Title>
                    <Title
                        level={1}
                        style={{
                            color: "white",

                            textAlign: "center",
                            fontFamily: "Arial, Helvetica",
                        }}
                    >
                        What is it?
                    </Title>
                    <p style={{ textAlign: "center", fontSize: "1.3rem" }}>
                        FOODCHECK is a diet tracking app! It allows users to
                        create a meal plan and track nutrient consumed per day
                        ,per meal and per food. Also, FOODCHECK displays all the
                        data with graphs and lists. Also, FOODCHECK is
                        completely FREE!
                    </p>
                </Col>
            </Row>
            <Row style={{ marginTop: "5vh", marginBottom: "5vh" }}>
                <Col span={24} offset={0}></Col>
                <Col span={20} offset={2}>
                    <Space direction="vertical" align="center">
                        <Row
                            align="middle"
                            style={{ marginTop: "5vh", marginBottom: "5vh" }}
                        >
                            <Col
                                xxl={12}
                                lg={12}
                                xl={12}
                                md={24}
                                sm={24}
                                xs={24}
                                style={{
                                    marginTop: "5vh",
                                    marginBottom: "5vh",
                                }}
                            >
                                <Image src={mid2} width="90%" />
                            </Col>
                            <Col
                                xxl={12}
                                lg={12}
                                xl={12}
                                md={24}
                                sm={24}
                                xs={24}
                                style={{
                                    marginTop: "5vh",
                                    marginBottom: "5vh",
                                }}
                            >
                                <Title
                                    level={1}
                                    style={{ textAlign: "center" }}
                                >
                                    KNOW WHAT YOU ARE EATING!
                                </Title>
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book. It has
                                    survived not only five centuries, but also
                                    the leap into electronic typesetting,
                                    remaining essentially unchanged. It was
                                    popularised in the 1960s with the release of
                                    Letraset sheets containing Lorem Ipsum
                                    passages, and more recently with desktop
                                    publishing software like Aldus PageMaker
                                    including versions of Lorem Ipsum.
                                </p>
                            </Col>
                        </Row>
                        <Divider />

                        <Row
                            align="middle"
                            style={{ marginTop: "5vh", marginBottom: "5vh" }}
                        >
                            <Col
                                xxl={12}
                                lg={12}
                                xl={12}
                                md={24}
                                sm={24}
                                xs={24}
                                style={{
                                    marginTop: "5vh",
                                    marginBottom: "5vh",
                                }}
                            >
                                <Title
                                    level={1}
                                    style={{ textAlign: "center" }}
                                >
                                    COMPARE FOOD!
                                </Title>
                                <p style={{ paddingRight: "4vw" }}>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book. It has
                                    survived not only five centuries, but also
                                    the leap into electronic typesetting,
                                    remaining essentially unchanged. It was
                                    popularised in the 1960s with the release of
                                    Letraset sheets containing Lorem Ipsum
                                    passages, and more recently with desktop
                                    publishing software like Aldus PageMaker
                                    including versions of Lorem Ipsum.
                                </p>
                            </Col>
                            <Col
                                xxl={12}
                                lg={12}
                                xl={12}
                                md={24}
                                sm={24}
                                xs={24}
                                style={{
                                    marginTop: "5vh",
                                    marginBottom: "5vh",
                                }}
                            >
                                <Image src={mid1} width="90%" />
                            </Col>
                        </Row>
                        <Divider />

                        <Row
                            align="middle"
                            style={{ marginTop: "5vh", marginBottom: "5vh" }}
                        >
                            <Col
                                xxl={8}
                                lg={8}
                                xl={8}
                                md={8}
                                sm={24}
                                xs={24}
                                style={{
                                    marginTop: "5vh",
                                    marginBottom: "5vh",
                                }}
                            >
                                <Image src={left1} width="90%" />
                            </Col>
                            <Col
                                xxl={16}
                                lg={16}
                                xl={16}
                                md={16}
                                sm={24}
                                xs={24}
                                style={{
                                    marginTop: "5vh",
                                    marginBottom: "5vh",
                                }}
                            >
                                <Title
                                    level={1}
                                    style={{ textAlign: "center" }}
                                >
                                    KEEP TRACK OF YOUR DIET!
                                </Title>
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book. It has
                                    survived not only five centuries, but also
                                    the leap into electronic typesetting,
                                    remaining essentially unchanged. It was
                                    popularised in the 1960s with the release of
                                    Letraset sheets containing Lorem Ipsum
                                    passages, and more recently with desktop
                                    publishing software like Aldus PageMaker
                                    including versions of Lorem Ipsum.
                                </p>
                            </Col>
                        </Row>
                        <Divider />

                        <Row
                            align="middle"
                            style={{ marginTop: "5vh", marginBottom: "5vh" }}
                        >
                            {" "}
                            <Col
                                xxl={12}
                                lg={12}
                                xl={12}
                                md={24}
                                sm={24}
                                xs={24}
                                style={{
                                    marginTop: "5vh",
                                    marginBottom: "5vh",
                                }}
                            >
                                <Title
                                    level={1}
                                    style={{ textAlign: "center" }}
                                >
                                    WE GOT ALL THE TOOLS YOU NEED!
                                </Title>
                                <p style={{ paddingRight: "4vw" }}>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book. It has
                                    survived not only five centuries, but also
                                    the leap into electronic typesetting,
                                    remaining essentially unchanged. It was
                                    popularised in the 1960s with the release of
                                    Letraset sheets containing Lorem Ipsum
                                    passages, and more recently with desktop
                                    publishing software like Aldus PageMaker
                                    including versions of Lorem Ipsum.
                                </p>
                            </Col>
                            <Col
                                xxl={12}
                                lg={12}
                                xl={12}
                                md={24}
                                sm={24}
                                xs={24}
                                style={{
                                    marginTop: "5vh",
                                    marginBottom: "5vh",
                                }}
                            >
                                <Image src={never} width="90%" />
                            </Col>
                        </Row>
                    </Space>
                </Col>
            </Row>
        </>
    );
};
export default Home;

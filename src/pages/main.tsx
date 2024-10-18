import { Col, Container, Row } from "react-bootstrap";
import { IoMdPeople } from "react-icons/io";
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";

export function MainPage() {
    return (
        <Container
            fluid
            style={{
                width: "100%",
                height: "100%",
            }}
        >
            <Row
                style={{
                    height: "100%",
                }}
            >
                <Col xs={6}>
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <FaChevronCircleUp size={256} className="ev-button" />
                        <div
                            style={{
                                height: 64,
                            }}
                        ></div>
                        <FaChevronCircleDown size={256} className="ev-button" />
                    </div>
                </Col>
                <Col xs={6}>
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            alignItems: "center",
                            color: "red",
                            backgroundColor: "#222",
                        }}
                    >
                        <div
                            style={{
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                justifyContent: "center",
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: 256,
                                }}
                            >
                                8F
                            </span>
                        </div>
                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                flexDirection: "row",
                                alignItems: "center",
                                color: "white",
                            }}
                        >
                            <IoMdPeople size={196} />
                            <div className="mx-4">
                                <span style={{ fontSize: 128 }}>4</span>
                                <span style={{ fontSize: 92 }}> / 20</span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

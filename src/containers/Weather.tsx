import styled from "styled-components";
import LocationFilter from "../componenets/LocationFilter";
import LocationList from "../componenets/LocationContainer";
import WeatherDetail from "../componenets/WeatherDetail";
import { Col, Row } from "antd";

const BgContainer = styled.div`
	height: 100vh;
	background-color: white;
`

const Weather = () => {
	return (
		<Row justify="center">
			<Col xs={24} md={22}>
				<BgContainer>
					<LocationFilter />
					<LocationList />
					<WeatherDetail />
				</BgContainer>
			</Col>
		</Row>
	);
};

export default Weather;

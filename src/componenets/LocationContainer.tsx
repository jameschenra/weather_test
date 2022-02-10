import { Card, Col, Row } from "antd";
import styled from "styled-components";
import { selectLocationError, selectLocationLoading } from "../reducers/location";
import { useAppSelector } from "../store/configureStore";
import LoadingSlider from "./shared/LoadingSlider";
import LocationList from "./LocationList";
import { useEffect } from "react";

const ContentContainer = styled.div`
	background-color: white;
	height: auto;
	padding: 50px 0;
`

const LocationWrapper = styled(Card)`
	min-height: 400px;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const LocationContainer = () => {
	const isLoading: boolean = useAppSelector(selectLocationLoading)
	const locationError: string = useAppSelector(selectLocationError);

	useEffect(() => {
		if (locationError !== '') {
			alert(locationError)
		}
	}, [locationError])

  	return(
	<ContentContainer>
		<Row justify="center">
			<Col xs={22} md={12}>
				<LocationWrapper>
					{isLoading ? <LoadingSlider /> : <LocationList />}
				</LocationWrapper>
			</Col>
		</Row>
	</ContentContainer>)
}

export default LocationContainer

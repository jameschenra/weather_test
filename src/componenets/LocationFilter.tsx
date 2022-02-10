import { Button, Col, Input, Row } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loadLocations } from "../reducers/location";

const FilterContainer = styled.div`
	height: auto;
	background-color: #F7CA59;
	text-align: center;
	padding: 50px 0;
`

const LeadText = styled.h1`
	padding-top: 20px;
	color: white;
`

const shadow = 'box-shadow: 0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017;'
const FilterInput = styled(Input)`
	font-size: 18px;
	font-weight: 500;
	height: 50px;
	border: none;
	border-radius: 5px 0 0 5px;
	${shadow}
`
const FilterButton = styled(Button)`
	height: 50px;
	font-weight: 500;
	border: none;
	border-radius: 0 5px 5px 0;
	background-color: #525252;
	color: white;
	${shadow}
`

export const LocationFilter = () => {
	const dispatch = useDispatch()
	const [filterLocation, setFilterLocation] = useState<string>('')

	const onSearchLocation = () => {
		dispatch(loadLocations(filterLocation))
	}

	return (
	<FilterContainer>
		<LeadText>How is the weather?</LeadText>
		<Row justify="center">
			<Col xs={20} md={6} style={{ display: 'flex' }}>
				<FilterInput placeholder="Search by city name" onChange={(e) => setFilterLocation(e.target.value)} />
				<FilterButton onClick={onSearchLocation}>GO</FilterButton>
			</Col>
		</Row>
	</FilterContainer>);
};

export default LocationFilter;

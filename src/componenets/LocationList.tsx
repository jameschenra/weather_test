import styled from "styled-components";
import { selectLocations } from "../reducers/location";
import { useAppSelector } from "../store/configureStore";
import { LocationInfo } from "../types/LocationInfo";
import LocationItem from "./LocationItem";

const NoResultContainer = styled.div`
	text-align: center;
	position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
	font-size: 18px;
	font-weight: 700;
	color: #B1B1B1;
`

const LocationList = () => {
  	const locations: LocationInfo[] = useAppSelector(selectLocations);

	const locationList = locations.map(location =>
		<LocationItem key={location.woeid} location={location} />
	)

	const noResult = (
	<NoResultContainer>
		No results yet!<br />
		Please use the search box above
	</NoResultContainer>)

  	return <>{locations.length > 0 ? locationList : noResult}</>
};

export default LocationList;

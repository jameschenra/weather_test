import { useDispatch } from "react-redux"
import styled from "styled-components"
import { setOpenDetail } from "../reducers/weather"
import { LocationInfo } from "../types/LocationInfo"

type Props = {
    location: LocationInfo
}

const ItemContainer = styled.div`
    padding: 20px;
    border-bottom: 1px solid #E8E8E8;
    display: flex;
    justify-content: space-between;
`

const LocationTitle = styled.span`
    font-size: 20px;
    font-weight: 600;
    font-color: #4C4C4C;
`

const DetailLink = styled.a`
    font-size: 16px;
    font-weight: 600;
`

const LocationItem: React.FC<Props> = ({location}) => {
	const dispatch = useDispatch()

    const onOpenDetail = () => {
		dispatch(setOpenDetail({open_status: true, selected_location: location}))
    }

	return (
		<ItemContainer>
			<LocationTitle>{location.title}</LocationTitle>
			<DetailLink
				onClick={onOpenDetail}>
					See Details...
			</DetailLink>
		</ItemContainer>
	)
}

export default LocationItem
import React from "react";
import { View } from "react-native";
import Request from "../../../models/request/Request";
import RequestCard from "./RequestCard";
import {LESS_THAN_ZERO, MORE_THAN_ZERO, ZERO} from "../../constants/GeneralConstants";


interface RequestCardListProps {
    request: Request[],
    ascending?: boolean,
    isPast?: boolean
}

const RequestCardList = (props:RequestCardListProps) => {
    const request: Request[] = props.request;
    const isPast: boolean = props.isPast ?? false;
    
    return (
        <View>
            {request.map((item) => (
                <View key={item?.id}>
                    <RequestCard request={item} displayFee={true} isPast={isPast}/>
                </View>
            ))}
        </View>
    );
};

export default RequestCardList;

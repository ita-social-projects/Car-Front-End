import React from "react";
import TouchableCard from "../src/activity/journey/journey-activity/segment-control-activities/TouchableCard";
import renderer from 'react-test-renderer';

test('TouchableCards render correctly', () => {
    const tree = renderer.create(<TouchableCard
        cardName="Work"
        iconName="briefcase-outline"
        angle="0"
        address="SoftServe, Bld. 'Bulgaria' 49"
        addressFontColor="#909095" />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});


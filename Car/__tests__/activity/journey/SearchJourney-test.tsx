import React from "react";
import { shallow } from "enzyme";

import SearchJourney from "../../../src/activity/journey/journey-activity/search-journey/SearchJourney";
import SearchJourneyProps from "../../../src/activity/journey/journey-activity/search-journey/SearchJourneyProps";
import WayPoint from "../../../src/types/WayPoint";
import toJSON from "enzyme-to-json";

const props: SearchJourneyProps = {
    route: {
        params: {
            isRequest: true,
            isPreviousFilter: true,
            wayPoint: {} as WayPoint,
            wayPointId: "",
        },
    },
};

describe("JourneySearch Test", () => {
    let wrapper = shallow(<SearchJourney {...props} />);

    it("should match inline snapshot", async () => {
        const date = new Date(0);

        wrapper.find("TouchableDateTimePicker").prop("setDate")(date);
        expect(toJSON(wrapper)).toMatchInlineSnapshot(`
      <Fragment>
        <View
          style={
            Array [
              Object {
                "height": "100%",
                "width": "100%",
              },
              Object {
                "backgroundColor": "white",
              },
            ]
          }
        >
          <View
            style={
              Object {
                "marginHorizontal": 20,
                "marginTop": 30,
              }
            }
          >
            <AddressInputButton
              directionType="From"
              iconName="location"
              marginBottom={15}
              onPress={[Function]}
              text=""
            />
            <AddressInputButton
              directionType="To"
              iconName="location"
              marginBottom={15}
              onPress={[Function]}
              text=""
            />
          </View>
          <TouchableDateTimePicker
            date={1970-01-01T00:00:00.000Z}
            isConfirmed={true}
            setDate={[Function]}
          />
          <View>
            <ScrollView>
              <JourneyCreationDropDownPicker
                isVisible={false}
                items={
                  Array [
                    Object {
                      "label": "1",
                      "value": 1,
                    },
                    Object {
                      "label": "2",
                      "value": 2,
                    },
                    Object {
                      "label": "3",
                      "value": 3,
                    },
                    Object {
                      "label": "4",
                      "value": 4,
                    },
                  ]
                }
                onChangeItem={[Function]}
                onOpen={[Function]}
                paddingLeft={100}
                placeholder="Passengers:"
                searchable={true}
                valueId={1}
              />
            </ScrollView>
          </View>
          <View
            style={
              Object {
                "alignItems": "flex-end",
                "flex": 1,
                "flexDirection": "row-reverse",
              }
            }
          >
            <ForwardRef
              disabled={true}
              onPress={[Function]}
              style={
                Array [
                  Object {
                    "borderWidth": 2,
                    "flexDirection": "row",
                    "marginBottom": 20,
                    "marginRight": 20,
                    "paddingHorizontal": 16,
                    "paddingVertical": 12,
                  },
                  Object {
                    "backgroundColor": "gray",
                    "borderWidth": 0,
                  },
                ]
              }
            >
              <Text
                style={
                  Array [
                    Object {
                      "fontSize": 14,
                      "fontWeight": "bold",
                      "lineHeight": 20,
                      "paddingHorizontal": 6,
                      "textTransform": "uppercase",
                    },
                    Object {
                      "color": "white",
                    },
                  ]
                }
              >
                Search
              </Text>
            </ForwardRef>
          </View>
        </View>
      </Fragment>
    `);
    });
});

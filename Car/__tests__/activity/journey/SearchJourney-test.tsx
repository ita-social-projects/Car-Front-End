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
        <ScrollView
          style={
            Array [
              Object {
                "height": "100%",
                "paddingVertical": 20,
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
                "paddingHorizontal": 16,
                "paddingVertical": 10,
              }
            }
          >
            <AddressInputButton
              directionType="From"
              iconName="location"
              onPress={[Function]}
              text=""
            />
          </View>
          <View
            style={
              Object {
                "paddingHorizontal": 16,
                "paddingVertical": 10,
              }
            }
          >
            <AddressInputButton
              directionType="To"
              iconName="location"
              onPress={[Function]}
              text=""
            />
          </View>
          <View
            style={
              Object {
                "paddingHorizontal": 16,
                "paddingVertical": 10,
              }
            }
          >
            <TouchableDateTimePicker
              date={1970-01-01T00:00:00.000Z}
              isConfirmed={true}
              onlyTime={false}
              setDate={[Function]}
            />
          </View>
          <View
            style={
              Array [
                Object {
                  "zIndex": 1,
                },
                Array [
                  Object {
                    "paddingHorizontal": 16,
                    "paddingVertical": 10,
                  },
                ],
              ]
            }
          >
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
              searchable={false}
              valueId={1}
              zIndex={2}
            />
          </View>
          <View
            style={
              Object {
                "alignItems": "center",
                "flexDirection": "row",
                "fontSize": 13,
                "lineHeight": 16,
                "marginLeft": 21,
                "marginRight": 0,
                "marginTop": 24,
              }
            }
          >
            <Text
              style={
                Array [
                  Object {
                    "flex": 1,
                    "fontWeight": "bold",
                  },
                  Object {
                    "color": "black",
                  },
                ]
              }
            >
              Fee
            </Text>
            <View
              style={
                Object {
                  "flexDirection": "row",
                }
              }
            >
              <ForwardRef
                onPress={[Function]}
                style={
                  Array [
                    Object {
                      "backgroundColor": "#000000",
                      "borderWidth": 2,
                      "flexDirection": "row",
                      "justifyContent": "flex-end",
                      "paddingHorizontal": 16,
                      "paddingVertical": 6,
                    },
                    Object {},
                  ]
                }
              >
                <Text
                  style={
                    Array [
                      Object {
                        "fontSize": 16,
                        "fontWeight": "bold",
                        "lineHeight": 18,
                        "textTransform": "uppercase",
                      },
                      Object {},
                    ]
                  }
                >
                  All
                </Text>
              </ForwardRef>
              <ForwardRef
                onPress={[Function]}
                style={
                  Array [
                    Object {
                      "backgroundColor": "#000000",
                      "borderWidth": 2,
                      "flexDirection": "row",
                      "justifyContent": "flex-end",
                      "paddingHorizontal": 16,
                      "paddingVertical": 6,
                    },
                    Object {},
                  ]
                }
              >
                <Text
                  style={
                    Array [
                      Object {
                        "fontSize": 16,
                        "fontWeight": "bold",
                        "lineHeight": 18,
                        "textTransform": "uppercase",
                      },
                      Object {},
                    ]
                  }
                >
                  Free
                </Text>
              </ForwardRef>
              <ForwardRef
                onPress={[Function]}
                style={
                  Array [
                    Object {
                      "alignItems": "center",
                      "backgroundColor": "white",
                      "borderWidth": 2,
                      "flexDirection": "row",
                      "justifyContent": "flex-end",
                      "marginRight": 20,
                      "paddingHorizontal": 16,
                      "paddingVertical": 4,
                    },
                    Object {},
                  ]
                }
              >
                <Text
                  style={
                    Array [
                      Object {
                        "fontSize": 16,
                        "fontWeight": "bold",
                        "lineHeight": 18,
                        "textTransform": "uppercase",
                      },
                      Object {},
                    ]
                  }
                >
                  Paid
                </Text>
              </ForwardRef>
            </View>
          </View>
          <View
            style={
              Array [
                Object {
                  "alignItems": "flex-end",
                  "flex": 1,
                  "flexDirection": "row",
                  "height": "100%",
                  "justifyContent": "flex-end",
                  "marginVertical": 24,
                },
              ]
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
        </ScrollView>
      </Fragment>
    `);
    });
});

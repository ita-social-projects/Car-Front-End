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
                "backgroundColor": "#FFFFFF",
              },
            ]
          }
        >
          <View
            style={
              Object {
                "paddingLeft": 16,
                "paddingRight": 15,
                "paddingTop": 16,
              }
            }
          >
            <AddressInputButton
              directionType="From"
              disabled={false}
              iconName="location"
              onPress={[Function]}
              text=""
            />
          </View>
          <View
            style={
              Object {
                "paddingLeft": 16,
                "paddingRight": 15,
                "paddingTop": 16,
              }
            }
          >
            <AddressInputButton
              directionType="To"
              disabled={false}
              iconName="location"
              onPress={[Function]}
              text=""
            />
          </View>
          <View
            style={
              Object {
                "paddingLeft": 16,
                "paddingRight": 15,
                "paddingTop": 16,
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
                    "paddingLeft": 16,
                    "paddingRight": 15,
                    "paddingTop": 16,
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
                "marginLeft": 16,
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
                    "color": "#0B171B",
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
                      "borderWidth": 1,
                      "flexDirection": "row",
                      "justifyContent": "flex-end",
                      "paddingHorizontal": 16,
                      "paddingVertical": 6,
                    },
                    Object {
                      "backgroundColor": "#414045",
                      "borderColor": "#414045",
                      "color": "#FFFFFF",
                    },
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
                      Object {
                        "backgroundColor": "#414045",
                        "borderColor": "#414045",
                        "color": "#FFFFFF",
                      },
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
                      "borderWidth": 1,
                      "flexDirection": "row",
                      "justifyContent": "flex-end",
                      "paddingHorizontal": 16,
                      "paddingVertical": 6,
                    },
                    Object {
                      "backgroundColor": "#FFFFFF",
                      "borderColor": "#0B171B",
                      "color": "#0B171B",
                    },
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
                      Object {
                        "backgroundColor": "#FFFFFF",
                        "borderColor": "#0B171B",
                        "color": "#0B171B",
                      },
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
                      "borderWidth": 1,
                      "flexDirection": "row",
                      "justifyContent": "flex-end",
                      "marginRight": 15,
                      "paddingHorizontal": 16,
                      "paddingVertical": 6,
                    },
                    Object {
                      "backgroundColor": "#FFFFFF",
                      "borderColor": "#0B171B",
                      "color": "#0B171B",
                    },
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
                      Object {
                        "backgroundColor": "#FFFFFF",
                        "borderColor": "#0B171B",
                        "color": "#0B171B",
                      },
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
                    "backgroundColor": "#909095",
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
                      "color": "#FFFFFF",
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

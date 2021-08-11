import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import JourneyStartPage from "../../../src/activity/journey/JourneyStartPage";

const renderer = shallowRenderer.createRenderer();

const navigation = {
    // eslint-disable-next-line unused-imports/no-unused-vars
    addListener: (event: string, callback: () => void) => () => void {},
};

test("renders correctly", async () =>
    expect(renderer.render(<JourneyStartPage navigation={navigation} />))
        .toMatchInlineSnapshot(`
    <ScrollView
      refreshControl={
        <RefreshControlMock
          onRefresh={[Function]}
          refreshing={false}
        />
      }
      style={
        Array [
          Object {
            "paddingHorizontal": 14,
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
            "paddingTop": 16,
          }
        }
      >
        <TouchableNavigationBlock
          blockImage={
            Object {
              "testUri": "../../../assets/images/journey/bermuda-searching.png",
            }
          }
          blockName="Search for a Ride"
          from="#A5C500"
          height={140}
          navigation={
            Object {
              "addListener": [Function],
            }
          }
          navigationName="Search Journey"
          reverse={false}
          to="#00A977"
          width={150}
        />
        <TouchableNavigationBlock
          blockImage={
            Object {
              "testUri": "../../../assets/images/journey/bermuda-delivery-car-service.png",
            }
          }
          blockName="Add a ride"
          from="#00A3CF"
          height={140}
          navigation={
            Object {
              "addListener": [Function],
            }
          }
          navigationName="Create Journey"
          reverse={true}
          to="#5552A0"
          width={210}
        />
      </View>
      <View
        style={
          Object {
            "paddingTop": 40,
          }
        }
      >
        <Text
          style={
            Array [
              Object {
                "fontFamily": "Proxima Nova",
                "fontSize": 20,
                "fontWeight": "700",
                "textTransform": "uppercase",
              },
              Object {
                "color": "black",
              },
            ]
          }
        >
          MANAGE RIDES
        </Text>
      </View>
      <View
        style={
          Object {
            "flexDirection": "row",
            "height": 56,
            "paddingTop": 24,
          }
        }
      >
        <ForwardRef
          activeOpacity={1}
          onPress={[Function]}
          style={
            Array [
              Object {
                "alignItems": "center",
                "borderWidth": 2,
                "justifyContent": "center",
                "width": "25%",
              },
              Object {
                "backgroundColor": "#000000",
                "color": "#FFFFFF",
              },
              Object {
                "borderColor": "black",
              },
            ]
          }
        >
          <Text
            style={
              Array [
                Object {
                  "fontFamily": "Proxima Nova",
                  "fontWeight": "700",
                  "textTransform": "uppercase",
                },
                Object {
                  "backgroundColor": "#000000",
                  "color": "#FFFFFF",
                },
              ]
            }
          >
            All
          </Text>
        </ForwardRef>
        <ForwardRef
          activeOpacity={1}
          onPress={[Function]}
          style={
            Array [
              Object {
                "alignItems": "center",
                "borderWidth": 2,
                "justifyContent": "center",
                "width": "25%",
              },
              Object {
                "backgroundColor": "#FFFFFF",
                "color": "#000000",
              },
              Object {
                "borderColor": "black",
              },
            ]
          }
        >
          <Text
            style={
              Array [
                Object {
                  "fontFamily": "Proxima Nova",
                  "fontWeight": "700",
                  "textTransform": "uppercase",
                },
                Object {
                  "backgroundColor": "#FFFFFF",
                  "color": "#000000",
                },
              ]
            }
          >
            Past
          </Text>
        </ForwardRef>
        <ForwardRef
          activeOpacity={1}
          onPress={[Function]}
          style={
            Array [
              Object {
                "alignItems": "center",
                "borderWidth": 2,
                "justifyContent": "center",
                "width": "25%",
              },
              Object {
                "backgroundColor": "#FFFFFF",
                "color": "#000000",
              },
              Object {
                "borderColor": "black",
              },
            ]
          }
        >
          <Text
            style={
              Array [
                Object {
                  "fontFamily": "Proxima Nova",
                  "fontWeight": "700",
                  "textTransform": "uppercase",
                },
                Object {
                  "backgroundColor": "#FFFFFF",
                  "color": "#000000",
                },
              ]
            }
          >
            Upcoming
          </Text>
        </ForwardRef>
        <ForwardRef
          activeOpacity={1}
          onPress={[Function]}
          style={
            Array [
              Object {
                "alignItems": "center",
                "borderWidth": 2,
                "justifyContent": "center",
                "width": "25%",
              },
              Object {
                "backgroundColor": "#FFFFFF",
                "color": "#000000",
              },
              Object {
                "borderColor": "black",
              },
            ]
          }
        >
          <Text
            style={
              Array [
                Object {
                  "fontFamily": "Proxima Nova",
                  "fontWeight": "700",
                  "textTransform": "uppercase",
                },
                Object {
                  "backgroundColor": "#FFFFFF",
                  "color": "#000000",
                },
              ]
            }
          >
            Regular
          </Text>
        </ForwardRef>
      </View>
      <View
        style={
          Object {
            "paddingTop": 24,
          }
        }
      >
        <JourneyCardList
          journey={Array []}
        />
        <JourneyCardList
          journey={Array []}
        />
        <JourneyCardList
          journey={Array []}
        />
      </View>
    </ScrollView>
  `));

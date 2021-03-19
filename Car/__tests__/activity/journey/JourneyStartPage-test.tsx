import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import JourneyStartPage from "../../../src/activity/journey/JourneyStartPage";

const renderer = shallowRenderer.createRenderer();

test("renders correctly", () =>
  expect(renderer.render(<JourneyStartPage />)).toMatchInlineSnapshot(`
    <ScrollView
      refreshControl={
        <RefreshControlMock
          onRefresh={[Function]}
          refreshing={false}
        />
      }
      style={
        Object {
          "backgroundColor": "white",
          "paddingHorizontal": 15,
        }
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
          blockName="Search for a Journey"
          from="#A5C500"
          height={140}
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
          blockName="Create a Journey"
          from="#00A3CF"
          height={140}
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
            Object {
              "fontFamily": "Proxima Nova",
              "fontSize": 20,
              "fontWeight": "700",
              "textTransform": "uppercase",
            }
          }
        >
          Manage journeys
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
                "borderColor": "black",
                "borderWidth": 2,
                "justifyContent": "center",
                "width": 54,
              },
              Object {
                "backgroundColor": "#000000",
                "color": "#FFFFFF",
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
                "borderColor": "black",
                "borderWidth": 2,
                "justifyContent": "center",
                "width": 62,
              },
              Object {
                "backgroundColor": "#FFFFFF",
                "color": "#000000",
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
                "borderColor": "black",
                "borderWidth": 2,
                "justifyContent": "center",
                "width": 98,
              },
              Object {
                "backgroundColor": "#FFFFFF",
                "color": "#000000",
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
                "borderColor": "black",
                "borderWidth": 2,
                "justifyContent": "center",
                "width": 103,
              },
              Object {
                "backgroundColor": "#FFFFFF",
                "color": "#000000",
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
            Scheduled
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

import React from "react";
import shallowRender from "react-test-renderer/shallow";
import SearchJourney from "../../../src/activity/journey/journey-activity/search-journey/SearchJourney";

const renderer = shallowRender.createRenderer();

test("renders correctly", () =>
    expect(renderer.render(<SearchJourney />)).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "height": "100%",
          "width": "100%",
        }
      }
    >
      <View
        style={
          Array [
            Object {
              "height": "100%",
              "position": "absolute",
              "width": "100%",
            },
            Object {
              "zIndex": 100,
            },
          ]
        }
      >
        <SearchJourneyMap
          latitude={49.843844}
          longitude={24.025581}
        />
        <ForwardRef
          style={
            Object {
              "alignItems": "center",
              "backgroundColor": "#000000",
              "flexDirection": "row",
              "justifyContent": "space-around",
              "left": 629,
              "paddingHorizontal": 16,
              "paddingVertical": 14,
              "position": "absolute",
              "top": 1098,
            }
          }
        >
          <Text
            style={
              Object {
                "color": "white",
                "fontSize": 16,
                "fontWeight": "bold",
                "lineHeight": 20,
                "textTransform": "uppercase",
              }
            }
          >
            Confirm
          </Text>
        </ForwardRef>
      </View>
      <View
        style={
          Object {
            "backgroundColor": "#FAFAFA",
            "borderBottomColor": "#C1C1C5",
            "borderBottomWidth": 1,
            "zIndex": 2000,
          }
        }
      >
        <TouchableMapBar
          defaultInputValue="Your location"
          directionType="From"
          flex="6"
          iconName="location"
          marginBottom="15"
          marginTop="30"
        />
        <React.Fragment />
      </View>
      <ScrollView
        style={
          Array [
            Object {
              "backgroundColor": "#FAFAFA",
              "zIndex": 150,
            },
          ]
        }
      >
        <View
          style={
            Object {
              "zIndex": 150,
            }
          }
        >
          <React.Fragment />
          <View
            style={
              Object {
                "flex": 1,
              }
            }
          >
            <Indicator
              color="#414045"
              size="large"
              text="Loading information..."
            />
          </View>
          <React.Fragment />
        </View>
        <View
          style={
            Object {
              "flexDirection": "row",
              "justifyContent": "space-around",
            }
          }
        >
          <View
            style={
              Object {
                "width": 150,
              }
            }
          >
            <Button
              color="#000000"
              disabled={true}
              onPress={[Function]}
              title="OK"
            />
          </View>
          <View
            style={
              Object {
                "width": 150,
              }
            }
          >
            <Button
              color="#000000"
              onPress={[Function]}
              title="BAD"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  `));

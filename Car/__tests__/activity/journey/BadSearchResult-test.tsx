import React from "react";
import renderer from "react-test-renderer";
import BadSearchResult from "../../../src/activity/journey/journey-activity/search-journey/search-results/bad-search-result/BadSearchResult";

test("renders correctly", () =>
    expect(renderer.create(<BadSearchResult />).toJSON()).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "backgroundColor": "#FFFFFF",
          "flex": 1,
        }
      }
    >
      <View
        style={
          Object {
            "alignItems": "center",
            "justifyContent": "center",
            "paddingTop": 43,
          }
        }
      >
        <Text
          style={
            Object {
              "color": "#000000",
              "fontFamily": undefined,
              "fontSize": 16,
              "fontWeight": "700",
              "textAlign": "center",
              "textTransform": "uppercase",
            }
          }
        >
          Couldn't find results from your search criteria
        </Text>
      </View>
      <View
        style={
          Object {
            "alignItems": "center",
            "flex": 1,
            "paddingTop": 42,
          }
        }
      >
        <Image
          source={
            Object {
              "testUri": "../../../assets/images/journey/bad-seacrh-result.png",
            }
          }
          style={
            Object {
              "height": 200,
              "width": 300,
            }
          }
        />
      </View>
      <View
        style={
          Object {
            "alignItems": "flex-end",
            "justifyContent": "center",
            "paddingBottom": 28,
            "paddingRight": 24,
          }
        }
      >
        <View
          accessible={true}
          focusable={true}
          onClick={[Function]}
          onResponderGrant={[Function]}
          onResponderMove={[Function]}
          onResponderRelease={[Function]}
          onResponderTerminate={[Function]}
          onResponderTerminationRequest={[Function]}
          onStartShouldSetResponder={[Function]}
          style={
            Object {
              "alignItems": "center",
              "backgroundColor": "#000000",
              "height": 48,
              "justifyContent": "center",
              "opacity": 1,
              "width": 248,
            }
          }
        >
          <Text
            style={
              Object {
                "color": "#FFFFFF",
                "fontFamily": undefined,
                "fontSize": 16,
                "fontWeight": "700",
                "textTransform": "uppercase",
              }
            }
          >
            Create Journey Request
          </Text>
        </View>
      </View>
    </View>
  `));

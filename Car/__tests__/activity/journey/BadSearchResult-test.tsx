import React from "react";
import renderer from "react-test-renderer";
import BadSearchResult from "../../../src/activity/journey/journey-activity/search-journey/search-results/bad-search-result/BadSearchResult";

test("renders correctly", async () =>
    expect(renderer.create(<BadSearchResult />).toJSON()).toMatchInlineSnapshot(`
    <View
      style={
        Array [
          Object {
            "flex": 1,
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
            "alignItems": "center",
            "justifyContent": "center",
            "paddingTop": 43,
          }
        }
      >
        <Text
          style={
            Array [
              Object {
                "fontFamily": undefined,
                "fontSize": 16,
                "fontWeight": "700",
                "textAlign": "center",
                "textTransform": "uppercase",
              },
              Object {
                "color": "#0B171B",
              },
            ]
          }
        >
          NO RESULTS MATCHING YOUR 
          

           SEARCH FILTERS
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
              "backgroundColor": "#0B171B",
              "height": 48,
              "justifyContent": "center",
              "opacity": 1,
              "width": 248,
            }
          }
        >
          <Text
            style={
              Array [
                Object {
                  "fontFamily": undefined,
                  "fontSize": 16,
                  "fontWeight": "700",
                  "textTransform": "uppercase",
                },
                Object {
                  "color": "#FFFFFF",
                },
              ]
            }
          >
            CREATE RIDE REQUEST
          </Text>
        </View>
      </View>
    </View>
  `));

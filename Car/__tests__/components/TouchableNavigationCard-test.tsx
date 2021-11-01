import React from "react";
import { Text } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import renderer from "react-test-renderer";
import TouchableNavigationCard from "../../src/components/touchable-navigation-card/TouchableNavigationCard";

test("renders correctly", async () =>
    expect(
        renderer.create(<TouchableNavigationCard navigationName={""} />).toJSON()
    ).toMatchInlineSnapshot(`
    <View>
      <View
        accessible={true}
        collapsable={false}
        focusable={true}
        nativeID="animatedComponent"
        onClick={[Function]}
        onResponderGrant={[Function]}
        onResponderMove={[Function]}
        onResponderRelease={[Function]}
        onResponderTerminate={[Function]}
        onResponderTerminationRequest={[Function]}
        onStartShouldSetResponder={[Function]}
        style={
          Object {
            "borderBottomColor": "#AAA9AE",
            "opacity": 1,
          }
        }
      >
        <View>
          <View
            style={
              Object {
                "flexDirection": "row",
              }
            }
          >
            <View />
            <View />
          </View>
        </View>
        <View>
          <Text
            allowFontScaling={false}
            style={
              Array [
                Object {
                  "color": "#414045",
                  "fontSize": 20,
                },
                undefined,
                Object {
                  "fontFamily": "Ionicons",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                },
                Object {},
              ]
            }
          >
            
          </Text>
        </View>
      </View>
    </View>
  `));

test("renders correctly", async () =>
    expect(
        renderer
            .create(
                <TouchableNavigationCard
                    navigationName="AddCars"
                    cardName="Add a car"
                    picture={
                        <Ionicons name={"add-circle-outline"} size={20} color={"#414045"} />
                    }
                    angle="0"
                >
                    <Text style={{ fontWeight: "bold", color: "#02A2CF" }}>
            Add a car
                    </Text>
                </TouchableNavigationCard>
            )
            .toJSON()
    ).toMatchInlineSnapshot(`
    <View>
      <View
        accessible={true}
        collapsable={false}
        focusable={true}
        nativeID="animatedComponent"
        onClick={[Function]}
        onResponderGrant={[Function]}
        onResponderMove={[Function]}
        onResponderRelease={[Function]}
        onResponderTerminate={[Function]}
        onResponderTerminationRequest={[Function]}
        onStartShouldSetResponder={[Function]}
        style={
          Object {
            "borderBottomColor": "#AAA9AE",
            "opacity": 1,
          }
        }
      >
        <View>
          <View
            style={
              Object {
                "flexDirection": "row",
              }
            }
          >
            <View>
              <Text
                allowFontScaling={false}
                style={
                  Array [
                    Object {
                      "color": "#414045",
                      "fontSize": 20,
                    },
                    undefined,
                    Object {
                      "fontFamily": "Ionicons",
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                    },
                    Object {},
                  ]
                }
              >
                
              </Text>
            </View>
            <View>
              <Text
                style={
                  Object {
                    "color": "#02A2CF",
                    "fontWeight": "bold",
                  }
                }
              >
                Add a car
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text
            allowFontScaling={false}
            style={
              Array [
                Object {
                  "color": "#414045",
                  "fontSize": 20,
                },
                undefined,
                Object {
                  "fontFamily": "Ionicons",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                },
                Object {},
              ]
            }
          >
            
          </Text>
        </View>
      </View>
    </View>
  `));

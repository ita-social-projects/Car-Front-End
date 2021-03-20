import React from "react";
import shallowRender from "react-test-renderer/shallow";
import AddCars from "../../../src/activity/my-profile/my-profile-activity/cars/car-activity/add-cars/AddCars";

const renderer = shallowRender.createRenderer();

jest.mock("react-native-gesture-handler", () => require("react-native"));

test("renders correctly", () =>
    expect(renderer.render(<AddCars />)).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "backgroundColor": "white",
          "flex": 1,
        }
      }
    >
      <View
        style={
          Object {
            "alignItems": "flex-end",
            "backgroundColor": "#C4C4C4",
            "height": "40%",
            "justifyContent": "flex-end",
          }
        }
      >
        <Image
          source={
            Object {
              "uri": undefined,
            }
          }
          style={
            Object {
              "borderWidth": 2,
              "bottom": 0,
              "left": 0,
              "position": "absolute",
              "right": 0,
              "top": 0,
            }
          }
        />
        <ForwardRef
          onPress={[Function]}
          style={
            Object {
              "alignItems": "center",
              "backgroundColor": "#FFFFFF",
              "borderColor": "#000000",
              "borderWidth": 2,
              "marginBottom": 19,
              "marginRight": 24,
              "paddingHorizontal": 16,
              "paddingVertical": 14,
            }
          }
        >
          <Text
            style={
              Object {
                "fontSize": 16,
                "fontWeight": "bold",
                "lineHeight": 20,
                "textTransform": "uppercase",
              }
            }
          >
            Upload photo
          </Text>
        </ForwardRef>
      </View>
      <ScrollView
        style={
          Object {
            "height": "600%",
          }
        }
      >
        <View
          style={
            Object {
              "marginLeft": 24,
              "marginRight": 24,
              "marginVertical": 24,
            }
          }
        >
          <CarDropDownPicker
            controller={[Function]}
            items={null}
            onOpen={[Function]}
            placeHolder="Brand"
            required={true}
            selectHandle={[Function]}
            style={
              Object {
                "marginBottom": 16,
              }
            }
            zIndex={3000}
          />
          <CarDropDownPicker
            controller={[Function]}
            defaultValue={null}
            disabled={true}
            items={null}
            onOpen={[Function]}
            placeHolder="Model"
            required={true}
            selectHandle={[Function]}
            style={
              Object {
                "marginBottom": 16,
              }
            }
            zIndex={2000}
          />
          <CarDropDownPicker
            controller={[Function]}
            items={
              Array [
                Object {
                  "label": "White",
                  "value": "0",
                },
                Object {
                  "label": "Black",
                  "value": "1",
                },
                Object {
                  "label": "Grey",
                  "value": "2",
                },
                Object {
                  "label": "Blue",
                  "value": "3",
                },
                Object {
                  "label": "Red",
                  "value": "4",
                },
                Object {
                  "label": "Yellow",
                  "value": "5",
                },
                Object {
                  "label": "Green",
                  "value": "6",
                },
                Object {
                  "label": "Brown",
                  "value": "7",
                },
                Object {
                  "label": "Beige",
                  "value": "8",
                },
                Object {
                  "label": "Violet",
                  "value": "9",
                },
                Object {
                  "label": "Orange",
                  "value": "10",
                },
              ]
            }
            onOpen={[Function]}
            placeHolder="Color"
            required={true}
            selectHandle={[Function]}
            style={
              Object {
                "marginBottom": 16,
              }
            }
            zIndex={1000}
          />
          <CarTextInput
            onChangeText={[Function]}
            placeHolder="Plate number"
          />
        </View>
        <View
          style={
            Object {
              "flexDirection": "row",
              "justifyContent": "space-between",
              "marginBottom": 15,
              "marginLeft": 24,
              "marginRight": 24,
              "zIndex": 0,
            }
          }
        >
          <Text
            style={
              Object {
                "color": "red",
              }
            }
          >
            *
            <Text
              style={
                Object {
                  "color": "#414045",
                }
              }
            >
               
              - mandatory information
            </Text>
          </Text>
          <ForwardRef
            onPress={[Function]}
            style={
              Object {
                "alignItems": "center",
                "backgroundColor": "#000000",
                "flexDirection": "row",
                "justifyContent": "space-around",
                "paddingHorizontal": 16,
                "paddingVertical": 14,
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
              Save
            </Text>
            <React.Fragment />
          </ForwardRef>
        </View>
      </ScrollView>
    </View>
  `));

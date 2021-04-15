import React from "react";
import shallowRender from "react-test-renderer/shallow";
import EditCars from "../../../src/activity/my-profile/my-profile-activity/cars/car-activity/edit-cars/EditCars";

const renderer = shallowRender.createRenderer();

jest.mock("react-native-gesture-handler", () => require("react-native"));

test("renders correctly", async () =>
    expect(renderer.render(<EditCars route={{ params: { carId: 1 } }} />))
        .toMatchInlineSnapshot(`
    <View
      style={
        Array [
          Object {
            "flex": 1,
          },
          Object {
            "backgroundColor": "white",
          },
        ]
      }
    >
      <View
        style={
          Array [
            Object {
              "alignItems": "flex-end",
              "height": "40%",
              "justifyContent": "flex-end",
            },
            Object {
              "backgroundColor": "#C4C4C4",
            },
          ]
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
            Array [
              Object {
                "alignItems": "center",
                "borderWidth": 2,
                "marginBottom": 19,
                "marginRight": 24,
                "paddingHorizontal": 16,
                "paddingVertical": 14,
              },
              Object {
                "backgroundColor": "#FFFFFF",
                "borderColor": "#000000",
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
                  "lineHeight": 20,
                  "textTransform": "uppercase",
                },
                Object {
                  "color": "black",
                },
              ]
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
            "marginLeft": 24,
            "marginRight": 24,
          }
        }
      >
        <View
          style={
            Object {
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
               
              - required field
            </Text>
          </Text>
          <ForwardRef
            onPress={[Function]}
            style={
              Array [
                Object {
                  "alignItems": "center",
                  "flexDirection": "row",
                  "justifyContent": "space-around",
                  "paddingHorizontal": 16,
                  "paddingVertical": 14,
                },
                Object {
                  "backgroundColor": "#000000",
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
                    "lineHeight": 20,
                    "textTransform": "uppercase",
                  },
                  Object {
                    "color": "white",
                  },
                ]
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

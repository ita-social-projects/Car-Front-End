import React from "react";
import shallowRender from "react-test-renderer/shallow";
import EditCars from "../../../src/activity/my-profile/my-profile-activity/cars/car-activity/edit-cars/EditCars";

const renderer = shallowRender.createRenderer();

jest.mock("react-native-gesture-handler", () => require("react-native"));

test("renders correctly", () =>
    expect(renderer.render(<EditCars route={{ params: { carId: 1 } }} />))
        .toMatchInlineSnapshot(`
    <KeyboardAwareScrollView
      enableAutomaticScroll={true}
      enableOnAndroid={false}
      enableResetScrollToCoords={true}
      extraHeight={75}
      extraScrollHeight={0}
      keyboardOpeningTime={250}
      style={
        Object {
          "backgroundColor": "white",
          "flex": 1,
        }
      }
      viewIsInsideTabBar={false}
    >
      <View
        style={
          Object {
            "alignItems": "flex-end",
            "backgroundColor": "#C4C4C4",
            "height": 200,
            "justifyContent": "flex-end",
          }
        }
      >
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
                "color": "black",
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
      <View
        style={
          Object {
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
            items={null}
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
            disabled={true}
            items={null}
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
            rules={
              Object {
                "maxLength": Object {
                  "message": "Max length is 10",
                  "value": 10,
                },
                "minLength": Object {
                  "message": "Min length is 4",
                  "value": 4,
                },
                "pattern": Object {
                  "message": "This field must contain 4-10 characters, including numbers, letters, hyphens",
                  "value": /\\^\\[A-Za-z0-9-\\]\\+\\$/,
                },
                "required": Object {
                  "message": "Plate number is required",
                  "value": true,
                },
              }
            }
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
          </ForwardRef>
        </View>
      </View>
    </KeyboardAwareScrollView>
  `));

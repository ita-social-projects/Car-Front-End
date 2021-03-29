import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import CreateJourney from "../../../src/activity/journey/journey-activity/create-journey/CreateJourney";

const renderer = shallowRenderer.createRenderer();

test("renders correctly", async () =>
    expect(renderer.render(<CreateJourney />)).toMatchInlineSnapshot(`
    <ScrollView
      style={
        Object {
          "backgroundColor": "#F2F2F2",
        }
      }
    >
      <TouchableDateTimePicker
        iconName="time"
      />
      <JourneyCreationDropDownPicker
        isVisible={false}
        items={
          Array [
            Object {
              "label": "Own Car",
              "value": "own car",
            },
            Object {
              "label": "Taxi",
              "value": "taxi",
            },
          ]
        }
        onChangeItem={[Function]}
        onOpen={[Function]}
        paddingLeft={100}
        placeholder="Journey type:"
      />
      <JourneyCreationDropDownPicker
        isVisible={false}
        items={
          Array [
            Object {
              "label": "Volkswagen Jetta",
              "value": "volkswagen jetta",
            },
            Object {
              "label": "Ford Fiesta",
              "value": "ford fiesta",
            },
            Object {
              "label": "Toyota Camry",
              "value": "toyota camry",
            },
          ]
        }
        onChangeItem={[Function]}
        onOpen={[Function]}
        paddingLeft={105}
        placeholder="Choose a Car:"
        searchable={true}
      />
      <SeatsInputSpinner />
      <View
        style={
          Object {
            "flexDirection": "row",
            "fontSize": 13,
            "lineHeight": 16,
            "marginBottom": 20,
            "marginLeft": 21,
            "marginRight": 0,
            "marginTop": 16,
          }
        }
      >
        <Text
          style={
            Object {
              "flex": 1,
              "fontWeight": "bold",
            }
          }
        >
          Fee
        </Text>
        <ForwardRef
          onPress={[Function]}
          style={
            Array [
              Object {
                "backgroundColor": "#000000",
                "borderRightWidth": 0,
                "borderWidth": 2,
                "flexDirection": "row",
                "justifyContent": "flex-end",
                "paddingHorizontal": 16,
                "paddingVertical": 6,
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
                  "fontSize": 16,
                  "fontWeight": "bold",
                  "lineHeight": 18,
                  "textTransform": "uppercase",
                },
                Object {
                  "backgroundColor": "#000000",
                  "color": "#FFFFFF",
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
                "borderWidth": 2,
                "flexDirection": "row",
                "justifyContent": "flex-end",
                "marginRight": 20,
                "paddingHorizontal": 16,
                "paddingVertical": 4,
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
                  "fontSize": 16,
                  "fontWeight": "bold",
                  "lineHeight": 18,
                  "textTransform": "uppercase",
                },
                Object {
                  "backgroundColor": "#FFFFFF",
                  "color": "#000000",
                },
              ]
            }
          >
            Paid
          </Text>
        </ForwardRef>
      </View>
      <View
        style={
          Object {
            "marginLeft": 20,
            "marginRight": 20,
            "marginTop": 0,
          }
        }
      >
        <Text
          style={
            Object {
              "fontSize": 17,
              "fontWeight": "bold",
            }
          }
        >
          Comments
        </Text>
        <Component
          allowFontScaling={true}
          maxLength={100}
          multiline={true}
          numberOfLines={10}
          rejectResponderTermination={true}
          style={
            Object {
              "borderColor": "black",
              "borderWidth": 2,
              "fontSize": 15,
              "height": 100,
              "paddingLeft": 10,
              "textAlignVertical": "top",
            }
          }
          underlineColorAndroid="transparent"
        />
        <Text>
          Up to 100 symbols
        </Text>
      </View>
      <ForwardRef
        style={
          Array [
            Object {
              "backgroundColor": "#000000",
              "flexDirection": "row",
              "marginBottom": 20,
              "marginLeft": 260,
              "marginRight": 20,
              "marginTop": 20,
              "paddingHorizontal": 16,
              "paddingVertical": 12,
            },
          ]
        }
      >
        <Text
          style={
            Object {
              "color": "white",
              "fontSize": 16,
              "fontWeight": "bold",
              "lineHeight": 20,
              "paddingHorizontal": 6,
              "textTransform": "uppercase",
            }
          }
        >
          Publish
        </Text>
      </ForwardRef>
    </ScrollView>
  `));

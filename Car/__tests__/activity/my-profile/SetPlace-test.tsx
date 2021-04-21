import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import SetPlace from "../../../src/activity/my-profile/my-profile-activity/address-book/address-book-activity/add-locations/SetPlace";

const renderer = shallowRenderer.createRenderer();

test("renders correctly", async () =>
    expect(renderer.render(<SetPlace />))
        .toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "flex": 1,
        }
      }
    >
      <View
        style={
          Object {
            "left": 10,
            "position": "absolute",
            "right": 10,
            "top": 10,
            "zIndex": 1,
          }
        }
      >
        <AddressInput
          address=""
          onChangeText={[Function]}
          onPress={[Function]}
          paddingLeft={150}
          placeholder="Address:"
          savedLocations={Array []}
        />
      </View>
      <MapView
        customMapStyle={
          Array [
            Object {
              "featureType": "poi.business",
              "stylers": Array [
                Object {
                  "visibility": "off",
                },
              ],
            },
            Object {
              "elementType": "labels.text",
              "featureType": "poi.park",
              "stylers": Array [
                Object {
                  "visibility": "off",
                },
              ],
            },
          ]
        }
        initialCamera={
          Object {
            "altitude": 200,
            "center": Object {
              "latitude": 49.843844,
              "longitude": 24.025581,
            },
            "heading": 20,
            "pitch": 2,
            "zoom": 16,
          }
        }
        provider="google"
        showsUserLocation={true}
        style={
          Object {
            "height": "100%",
          }
        }
      />
      <ForwardRef
        disabled={true}
        style={
          Array [
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
            },
            Object {
              "backgroundColor": "darkgrey",
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
      </ForwardRef>
    </View>
  `));

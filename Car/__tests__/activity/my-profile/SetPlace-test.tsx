import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import SetPlace from "../../../src/activity/my-profile/my-profile-activity/address-book/address-book-activity/add-locations/SetPlace";

const renderer = shallowRenderer.createRenderer();

test("renders correctly", async () =>
    expect(renderer.render(<SetPlace />)).toMatchInlineSnapshot(`
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
            "top": 25,
            "zIndex": 1,
          }
        }
      >
        <AddressInput
          address=""
          onChangeText={[Function]}
          onClearIconPress={[Function]}
          onPress={[Function]}
          paddingLeft={90}
          placeholder="Address"
          recentAddresses={Array []}
          savedLocations={Array []}
          userLocation={
            Object {
              "latitude": 49.843844,
              "longitude": 24.025581,
            }
          }
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
        onLongPress={[Function]}
        provider="google"
        showsUserLocation={true}
        style={
          Object {
            "height": "100%",
          }
        }
      >
        <MapMarker
          coordinate={
            Object {
              "latitude": 49.843844,
              "longitude": 24.025581,
            }
          }
          draggable={true}
          image={
            Object {
              "testUri": "../../../assets/images/maps-markers/with_shade.png",
            }
          }
          onDragEnd={[Function]}
          stopPropagation={false}
          style={
            Object {
              "position": "absolute",
              "zIndex": 1,
            }
          }
          title="Address"
        />
      </MapView>
      <ForwardRef
        disabled={true}
        style={
          Array [
            Object {
              "alignItems": "center",
              "backgroundColor": "#000000",
              "flexDirection": "row",
              "justifyContent": "space-around",
              "left": 660,
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

import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import CreateJourney from "../../../src/activity/journey/journey-activity/create-journey/CreateJourney";

const renderer = shallowRenderer.createRenderer();

test("renders correctly", async () =>
    expect(renderer.render(<CreateJourney />)).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "flex": 1,
        }
      }
    >
      <FlatList
        data={
          Array [
            Object {
              "coordinates": Object {
                "latitude": 0,
                "longitude": 0,
              },
              "isConfirmed": false,
              "text": "",
            },
            Object {
              "coordinates": Object {
                "latitude": 0,
                "longitude": 0,
              },
              "isConfirmed": false,
              "text": "",
            },
          ]
        }
        disableVirtualization={false}
        horizontal={false}
        initialNumToRender={10}
        keyExtractor={[Function]}
        maxToRenderPerBatch={10}
        numColumns={1}
        onEndReachedThreshold={2}
        removeClippedSubviews={false}
        renderItem={[Function]}
        scrollEventThrottle={50}
        style={
          Object {
            "flex": 1,
            "marginTop": 15,
            "paddingHorizontal": 10,
            "width": "100%",
          }
        }
        updateCellsBatchingPeriod={50}
        windowSize={21}
      />
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
            "flex": 3,
          }
        }
      >
        <React.Fragment>
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
                "testUri": "../../../assets/images/small-custom-marker.png",
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
          />
        </React.Fragment>
      </MapView>
      <ForwardRef
        disabled={false}
        onPress={[Function]}
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
          Add stop
        </Text>
      </ForwardRef>
    </View>
  `));

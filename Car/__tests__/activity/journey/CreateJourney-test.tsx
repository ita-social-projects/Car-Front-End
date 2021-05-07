import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import CreateJourney from "../../../src/activity/journey/journey-activity/create-journey/CreateJourney";

const renderer = shallowRenderer.createRenderer();

test("renders correctly", async () =>
    expect(renderer.render(<CreateJourney props={undefined as any} />))
        .toMatchInlineSnapshot(`
    <React.Fragment>
      <View
        style={
          Object {
            "height": "85%",
          }
        }
      >
        <Indicator
          color="#414045"
          size="large"
          text="Loading information..."
        />
      </View>
      <View
        style={
          Object {
            "display": "none",
            "flex": 0,
            "height": 0,
          }
        }
      >
        <ScrollView
          onContentSizeChange={[Function]}
          style={
            Object {
              "height": 240,
              "marginTop": 25,
              "paddingHorizontal": 10,
              "position": "absolute",
              "width": "100%",
              "zIndex": 1,
            }
          }
        >
          <AddressInputButton
            directionType="From"
            iconName="location"
            marginBottom={15}
            onPress={[Function]}
            text=""
          />
          <AddressInputButton
            directionType="To"
            iconName="location"
            marginBottom={15}
            onPress={[Function]}
            text=""
          />
        </ScrollView>
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
          provider="google"
          showsCompass={false}
          showsMyLocationButton={false}
          showsUserLocation={true}
          style={
            Object {
              "flex": 1,
            }
          }
        />
        <ForwardRef
          disabled={true}
          onPress={[Function]}
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
                "backgroundColor": "#afafaf",
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
            Confirm
          </Text>
        </ForwardRef>
      </View>
    </React.Fragment>
  `));

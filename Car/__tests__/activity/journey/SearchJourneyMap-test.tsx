import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import SearchJourneyMap from "../../../src/activity/journey/journey-activity/map-address/SearchJourneyMap";

const renderer = shallowRenderer.createRenderer();

test("renders correctly", async () =>
    expect(renderer.render(<SearchJourneyMap latitude={0} longitude={0} />))
        .toMatchInlineSnapshot(`
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
      region={
        Object {
          "latitude": 49.843844,
          "latitudeDelta": 0.01,
          "longitude": 24.025581,
          "longitudeDelta": 0.01,
        }
      }
      style={
        Object {
          "flex": 1,
        }
      }
    >
      <MapMarker
        coordinate={
          Object {
            "latitude": 0,
            "longitude": 0,
          }
        }
        image={
          Object {
            "testUri": "../../../assets/images/custom-marker.png",
          }
        }
        stopPropagation={false}
      />
    </MapView>
  `));

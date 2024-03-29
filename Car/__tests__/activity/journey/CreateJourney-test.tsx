import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import CreateJourney from "../../../src/activity/journey/journey-activity/create-journey/CreateJourney";

const renderer = shallowRenderer.createRenderer();

test("renders correctly", async () =>
    expect(renderer.render(<CreateJourney props={undefined as any} />))
        .toMatchInlineSnapshot(`
    <View>
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
      <View>
        <ScrollView
          onContentSizeChange={[Function]}
          style={
            Object {
              "height": 265,
              "marginTop": 0,
              "paddingHorizontal": 10,
              "position": "absolute",
              "top": 25,
              "width": "100%",
              "zIndex": 1,
            }
          }
        >
          <AddressInputButton
            directionType="From"
            iconColor="#414045"
            iconName="location"
            marginBottom={15}
            marginTop={7}
            onPress={[Function]}
            text=""
          />
          <AddressInputButton
            directionType="To"
            iconColor="#414045"
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
              "height": "100%",
              "zIndex": -2,
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
                "bottom": 24,
                "flexDirection": "row",
                "justifyContent": "space-around",
                "paddingHorizontal": 16,
                "paddingVertical": 14,
                "position": "absolute",
                "right": 15,
              },
              Object {
                "backgroundColor": "#909095",
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
                  "color": "#FFFFFF",
                },
              ]
            }
          >
            Confirm
          </Text>
        </ForwardRef>
      </View>
      <ConfirmModal
        cancelText="No, keep it"
        confirmText="Yes, delete it"
        disableModal={[Function]}
        onConfirm={[Function]}
        subtitle="Are you sure you want to delete the stop?"
        title="Stop deleting"
        visible={false}
      />
      <ConfirmModal
        confirmText="OK"
        disableModal={[Function]}
        hideCancelButton={true}
        onConfirm={[Function]}
        subtitle="Cant build route. Please chose another way points"
        title="Error"
        visible={false}
      />
      <ConfirmModal
        confirmText="OK"
        disableModal={[Function]}
        hideCancelButton={true}
        onConfirm={[Function]}
        subtitle="Your ride route is updated"
        title="Success"
        visible={false}
      />
      <ConfirmModal
        cancelText="Cancel"
        confirmColor="black"
        confirmText="Apply"
        disableModal={[Function]}
        onConfirm={[Function]}
        subtitle="After the changes is applied, all passengers will get notified. Some of them might withdraw from the ride if change doesn't suit them"
        title="CHANGES"
        visible={false}
      />
    </View>
  `));

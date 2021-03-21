import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import SetPlace from "../../../src/activity/my-profile/my-profile-activity/address-book/address-book-activity/add-locations/SetPlace";

const renderer = shallowRenderer.createRenderer();

test("renders correctly", async () =>
    expect(renderer.render(<SetPlace />)).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "height": "100%",
          "width": "100%",
        }
      }
    >
      <View
        style={
          Object {
            "height": "100%",
            "position": "absolute",
            "width": "100%",
            "zIndex": 100,
          }
        }
      >
        <TouchableMapBar
          defaultInputValue=""
          directionType="Address"
          flex="6"
          iconName="location"
          marginBottom="15"
          marginTop="30"
        />
        <React.Fragment>
          <View
            style={
              Array [
                Object {
                  "borderWidth": 2.3,
                  "flexDirection": "row",
                  "fontFamily": "Open Sans",
                  "marginLeft": 20,
                  "marginRight": 100,
                  "paddingLeft": 100,
                  "zIndex": 200,
                },
                Object {
                  "backgroundColor": "white",
                  "borderColor": "black",
                },
              ]
            }
          >
            <Component
              allowFontScaling={true}
              rejectResponderTermination={true}
              underlineColorAndroid="transparent"
            />
            <Text
              style={
                Array [
                  Object {
                    "fontFamily": "Open Sans",
                    "fontSize": 17,
                    "marginLeft": 5,
                  },
                  Object {
                    "color": "#909095",
                  },
                ]
              }
            />
            <DropDownPicker
              activeItemStyle={Object {}}
              activeLabelStyle={Object {}}
              arrowColor="black"
              arrowSize={15}
              arrowStyle={Object {}}
              autoScrollToDefaultValue={false}
              containerProps={Object {}}
              containerStyle={Object {}}
              controller={[Function]}
              customArrowDown={[Function]}
              customArrowUp={[Function]}
              customTickIcon={[Function]}
              defaultValue=""
              disabled={false}
              dropDownMaxHeight={150}
              dropDownStyle={Object {}}
              isVisible={false}
              itemStyle={Object {}}
              items={Array []}
              labelLength={1000}
              labelStyle={Object {}}
              max={10000000}
              min={0}
              multiple={false}
              multipleText="%d items have been selected"
              onChangeItem={[Function]}
              onChangeList={[Function]}
              onClose={[Function]}
              onOpen={[Function]}
              placeholder="Select an item"
              placeholderStyle={Object {}}
              scrollViewProps={Object {}}
              searchTextInputProps={Object {}}
              searchable={true}
              searchableError={[Function]}
              searchablePlaceholder="Manual input"
              searchablePlaceholderTextColor="gray"
              searchableStyle={Object {}}
              selectedLabelLength={1000}
              selectedLabelStyle={Object {}}
              showArrow={true}
              style={Object {}}
              zIndex={5000}
            />
          </View>
        </React.Fragment>
        <MapView
          initialRegion={
            Object {
              "latitude": 49.843844,
              "latitudeDelta": 0.01,
              "longitude": 24.025581,
              "longitudeDelta": 0.01,
            }
          }
          provider="google"
          style={
            Object {
              "flex": 1,
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
                "testUri": "../../../assets/images/custom-marker.png",
              }
            }
            onDragEnd={[Function]}
            pinColor="#000080"
            stopPropagation={false}
          />
        </MapView>
      </View>
    </View>
  `));

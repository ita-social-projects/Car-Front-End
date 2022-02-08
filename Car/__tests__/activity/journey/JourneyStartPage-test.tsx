import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import JourneyStartPage from "../../../src/activity/journey/JourneyStartPage";

const renderer = shallowRenderer.createRenderer();

const navigation = {
    //eslint-disable-next-line @typescript-eslint/no-unused-vars
    addListener: (event: string, callback: () => void) => () => void {},
};

test("renders correctly", async () =>
    expect(renderer.render(<JourneyStartPage navigation={navigation} />))
        .toMatchInlineSnapshot(`
    <ScrollView
      refreshControl={
        <RefreshControlMock
          onRefresh={[Function]}
          refreshing={false}
        />
      }
      style={
        Array [
          Object {
            "backgroundColor": "white",
            "paddingHorizontal": 7,
          },
          Object {
            "backgroundColor": "#FFFFFF",
          },
        ]
      }
    >
      <View
        style={
          Object {
            "paddingTop": 16,
          }
        }
      >
        <TouchableNavigationBlock
          blockImage={
            Object {
              "testUri": "../../../assets/images/journey/bermuda-searching.png",
            }
          }
          blockName="Find a Ride"
          from="#A5C500"
          height={140}
          navigation={
            Object {
              "addListener": [Function],
            }
          }
          navigationName="Search Journey"
          reverse={false}
          to="#00A997"
          width={150}
        />
        <TouchableNavigationBlock
          blockImage={
            Object {
              "testUri": "../../../assets/images/journey/bermuda-delivery-car-service.png",
            }
          }
          blockName="Add a ride"
          from="#00A3CF"
          height={140}
          navigation={
            Object {
              "addListener": [Function],
            }
          }
          navigationName="Create Journey"
          reverse={true}
          to="#5552A0"
          width={200}
        />
      </View>
      <View
        style={
          Object {
            "paddingHorizontal": 7,
          }
        }
      >
        <View
          style={
            Object {
              "paddingTop": 40,
            }
          }
        >
          <Text
            style={
              Array [
                Object {
                  "fontFamily": "Proxima Nova Black",
                  "fontSize": 25,
                  "fontWeight": "700",
                  "textTransform": "uppercase",
                },
                Object {
                  "color": "#0B171B",
                },
              ]
            }
          >
            MANAGE RIDES
          </Text>
        </View>
        <View
          style={
            Object {
              "flexDirection": "row",
              "height": 56,
              "paddingTop": 24,
              "width": "100%",
            }
          }
        >
          <FlatList
            data={
              Array [
                Object {
                  "name": "All",
                  "textStyles": Array [
                    Object {
                      "backgroundColor": "#FFFFFF",
                      "color": "#0B171B",
                      "marginHorizontal": 8,
                      "marginVertical": 8,
                    },
                  ],
                  "touchableStyles": Array [
                    Object {
                      "backgroundColor": "#FFFFFF",
                      "borderBottomWidth": 2,
                      "borderColor": "#0B171B",
                    },
                  ],
                },
                Object {
                  "name": "Past",
                  "textStyles": Array [
                    Object {
                      "backgroundColor": "#FFFFFF",
                      "color": "#909095",
                      "marginHorizontal": 8,
                      "marginVertical": 8,
                    },
                  ],
                  "touchableStyles": Array [
                    Object {
                      "backgroundColor": "#FFFFFF",
                      "borderBottomWidth": 0,
                      "borderColor": "#0B171B",
                    },
                  ],
                },
                Object {
                  "name": "Upcoming",
                  "textStyles": Array [
                    Object {
                      "backgroundColor": "#FFFFFF",
                      "color": "#909095",
                      "marginHorizontal": 8,
                      "marginVertical": 8,
                    },
                  ],
                  "touchableStyles": Array [
                    Object {
                      "backgroundColor": "#FFFFFF",
                      "borderBottomWidth": 0,
                      "borderColor": "#0B171B",
                    },
                  ],
                },
                Object {
                  "name": "Regular",
                  "textStyles": Array [
                    Object {
                      "backgroundColor": "#FFFFFF",
                      "color": "#909095",
                      "marginHorizontal": 8,
                      "marginVertical": 8,
                    },
                  ],
                  "touchableStyles": Array [
                    Object {
                      "backgroundColor": "#FFFFFF",
                      "borderBottomWidth": 0,
                      "borderColor": "#0B171B",
                    },
                  ],
                },
                Object {
                  "name": "Requested",
                  "textStyles": Array [
                    Object {
                      "backgroundColor": "#FFFFFF",
                      "color": "#909095",
                      "marginHorizontal": 8,
                      "marginVertical": 8,
                    },
                  ],
                  "touchableStyles": Array [
                    Object {
                      "backgroundColor": "#FFFFFF",
                      "borderBottomWidth": 0,
                      "borderColor": "#0B171B",
                    },
                  ],
                },
                Object {
                  "name": "Canceled",
                  "textStyles": Array [
                    Object {
                      "backgroundColor": "#FFFFFF",
                      "color": "#909095",
                      "marginHorizontal": 8,
                      "marginVertical": 8,
                    },
                  ],
                  "touchableStyles": Array [
                    Object {
                      "backgroundColor": "#FFFFFF",
                      "borderBottomWidth": 0,
                      "borderColor": "#0B171B",
                    },
                  ],
                },
              ]
            }
            disableVirtualization={false}
            horizontal={true}
            initialNumToRender={10}
            keyExtractor={[Function]}
            maxToRenderPerBatch={10}
            numColumns={1}
            onEndReachedThreshold={2}
            removeClippedSubviews={false}
            renderItem={[Function]}
            scrollEventThrottle={50}
            showsHorizontalScrollIndicator={false}
            style={
              Object {
                "flex": 1,
                "width": "100%",
              }
            }
            updateCellsBatchingPeriod={50}
            windowSize={21}
          />
        </View>
        <View
          style={
            Object {
              "paddingTop": 24,
            }
          }
        >
          <JourneyCardList
            ascending={true}
            journey={Array []}
          />
          <JourneyCardList
            isPast={true}
            journey={Array []}
          />
          <JourneyCardList
            journey={Array []}
          />
          <RequestCardList
            request={Array []}
          />
          <JourneyCardList
            isCanceled={true}
            journey={Array []}
          />
        </View>
      </View>
    </ScrollView>
  `));

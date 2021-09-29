import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import JourneyStartPage from "../../../src/activity/journey/JourneyStartPage";

const renderer = shallowRenderer.createRenderer();

const navigation = {
    // eslint-disable-next-line unused-imports/no-unused-vars
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
            "paddingHorizontal": 14,
          },
          Object {
            "backgroundColor": "white",
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
          blockName="Search for a Ride"
          from="#A5C500"
          height={140}
          navigation={
            Object {
              "addListener": [Function],
            }
          }
          navigationName="Search Journey"
          reverse={false}
          to="#00A977"
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
          width={210}
        />
      </View>
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
                "color": "black",
              },
            ]
          }
        >
          MANAGE RIDES
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={
          Object {
            "flexGrow": 10,
          }
        }
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        style={
          Object {
            "width": "100%",
          }
        }
      >
        <View
          style={
<<<<<<< HEAD
            Array [
              Object {
                "alignItems": "center",
                "borderWidth": 2,
                "justifyContent": "center",
                "width": "25%",
              },
              Object {},
            ]
=======
            Object {
              "flexDirection": "row",
              "height": 56,
              "paddingTop": 24,
              "width": 450,
            }
>>>>>>> 65b20dbd34c65ffa9e9ff6ec287677669be3f116
          }
        >
          <ForwardRef
            activeOpacity={1}
            onPress={[Function]}
            style={
              Array [
                Object {
                  "alignItems": "center",
                  "flexDirection": "row",
                  "justifyContent": "center",
                  "width": "13%",
                },
<<<<<<< HEAD
                Object {},
              ]
            }
          >
            All
          </Text>
        </ForwardRef>
        <ForwardRef
          activeOpacity={1}
          onPress={[Function]}
          style={
            Array [
              Object {
                "alignItems": "center",
                "borderWidth": 2,
                "justifyContent": "center",
                "width": "25%",
              },
              Object {},
            ]
          }
        >
          <Text
=======
                Object {
                  "backgroundColor": "#FFFFFF",
                  "borderBottomWidth": 2,
                  "color": "#000000",
                },
                Object {
                  "borderColor": "black",
                },
              ]
            }
          >
            <Text
              style={
                Array [
                  Object {
                    "fontFamily": "Proxima Nova Extrabold",
                    "fontWeight": "300",
                    "textTransform": "uppercase",
                  },
                  Object {
                    "backgroundColor": "#FFFFFF",
                    "color": "#000000",
                  },
                ]
              }
            >
              All
            </Text>
          </ForwardRef>
          <ForwardRef
            activeOpacity={1}
            onPress={[Function]}
>>>>>>> 65b20dbd34c65ffa9e9ff6ec287677669be3f116
            style={
              Array [
                Object {
                  "alignItems": "center",
                  "flexDirection": "row",
                  "justifyContent": "center",
                  "width": "13%",
                },
<<<<<<< HEAD
                Object {},
              ]
            }
          >
            Past
          </Text>
        </ForwardRef>
        <ForwardRef
          activeOpacity={1}
          onPress={[Function]}
          style={
            Array [
              Object {
                "alignItems": "center",
                "borderWidth": 2,
                "justifyContent": "center",
                "width": "25%",
              },
              Object {},
            ]
          }
        >
          <Text
=======
                Object {
                  "backgroundColor": "#FFFFFF",
                  "borderBottomWidth": 0,
                  "color": "#8C8F8E",
                },
                Object {
                  "borderColor": "black",
                },
              ]
            }
          >
            <Text
              style={
                Array [
                  Object {
                    "fontFamily": "Proxima Nova Extrabold",
                    "fontWeight": "300",
                    "textTransform": "uppercase",
                  },
                  Object {
                    "backgroundColor": "#FFFFFF",
                    "color": "#8C8F8E",
                  },
                ]
              }
            >
              Past
            </Text>
          </ForwardRef>
          <ForwardRef
            activeOpacity={1}
            onPress={[Function]}
>>>>>>> 65b20dbd34c65ffa9e9ff6ec287677669be3f116
            style={
              Array [
                Object {
                  "alignItems": "center",
                  "flexDirection": "row",
                  "justifyContent": "center",
                  "width": "24%",
                },
<<<<<<< HEAD
                Object {},
              ]
            }
          >
            Upcoming
          </Text>
        </ForwardRef>
        <ForwardRef
          activeOpacity={1}
          onPress={[Function]}
          style={
            Array [
              Object {
                "alignItems": "center",
                "borderWidth": 2,
                "justifyContent": "center",
                "width": "25%",
              },
              Object {},
            ]
          }
        >
          <Text
=======
                Object {
                  "backgroundColor": "#FFFFFF",
                  "borderBottomWidth": 0,
                  "color": "#8C8F8E",
                },
                Object {
                  "borderColor": "black",
                },
              ]
            }
          >
            <Text
              style={
                Array [
                  Object {
                    "fontFamily": "Proxima Nova Extrabold",
                    "fontWeight": "300",
                    "textTransform": "uppercase",
                  },
                  Object {
                    "backgroundColor": "#FFFFFF",
                    "color": "#8C8F8E",
                  },
                ]
              }
            >
              Upcoming
            </Text>
          </ForwardRef>
          <ForwardRef
            activeOpacity={1}
            onPress={[Function]}
>>>>>>> 65b20dbd34c65ffa9e9ff6ec287677669be3f116
            style={
              Array [
                Object {
                  "alignItems": "center",
                  "flexDirection": "row",
                  "justifyContent": "center",
                  "width": "20%",
                },
<<<<<<< HEAD
                Object {},
=======
                Object {
                  "backgroundColor": "#FFFFFF",
                  "borderBottomWidth": 0,
                  "color": "#8C8F8E",
                },
                Object {
                  "borderColor": "black",
                },
>>>>>>> 65b20dbd34c65ffa9e9ff6ec287677669be3f116
              ]
            }
          >
            <Text
              style={
                Array [
                  Object {
                    "fontFamily": "Proxima Nova Extrabold",
                    "fontWeight": "300",
                    "textTransform": "uppercase",
                  },
                  Object {
                    "backgroundColor": "#FFFFFF",
                    "color": "#8C8F8E",
                  },
                ]
              }
            >
              Regular
            </Text>
          </ForwardRef>
        </View>
      </ScrollView>
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
          journey={Array []}
        />
        <JourneyCardList
          journey={Array []}
        />
      </View>
    </ScrollView>
  `));

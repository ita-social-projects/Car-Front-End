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
              Object {
                "flexDirection": "row",
                "height": 56,
                "paddingTop": 24,
                "width": 450,
              }
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
                  Object {
                    "backgroundColor": "#FFFFFF",
                    "borderBottomWidth": 2,
                    "color": "#0B171B",
                  },
                  Object {
                    "borderColor": "#0B171B",
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
                      "color": "#0B171B",
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
              style={
                Array [
                  Object {
                    "alignItems": "center",
                    "flexDirection": "row",
                    "justifyContent": "center",
                    "width": "13%",
                  },
                  Object {
                    "backgroundColor": "#FFFFFF",
                    "borderBottomWidth": 0,
                    "color": "#414045",
                  },
                  Object {
                    "borderColor": "#0B171B",
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
                      "color": "#414045",
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
              style={
                Array [
                  Object {
                    "alignItems": "center",
                    "flexDirection": "row",
                    "justifyContent": "center",
                    "width": "24%",
                  },
                  Object {
                    "backgroundColor": "#FFFFFF",
                    "borderBottomWidth": 0,
                    "color": "#414045",
                  },
                  Object {
                    "borderColor": "#0B171B",
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
                      "color": "#414045",
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
              style={
                Array [
                  Object {
                    "alignItems": "center",
                    "flexDirection": "row",
                    "justifyContent": "center",
                    "width": "20%",
                  },
                  Object {
                    "backgroundColor": "#FFFFFF",
                    "borderBottomWidth": 0,
                    "color": "#414045",
                  },
                  Object {
                    "borderColor": "#0B171B",
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
                      "color": "#414045",
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
            isPast={true}
            journey={Array []}
          />
          <JourneyCardList
            journey={Array []}
          />
        </View>
      </View>
    </ScrollView>
  `));

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
              Object {
                "flexDirection": "row",
                "height": 56,
                "paddingTop": 24,
                "width": 450,
              }
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
                  Object {
                    "backgroundColor": "#FFFFFF",
                    "borderBottomWidth": 2,
                    "color": "#0B171B",
                  },
                  Object {
                    "borderColor": "#0B171B",
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
                      "color": "#0B171B",
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
              style={
                Array [
                  Object {
                    "alignItems": "center",
                    "flexDirection": "row",
                    "justifyContent": "center",
                    "width": "13%",
                  },
                  Object {
                    "backgroundColor": "#FFFFFF",
                    "borderBottomWidth": 0,
                    "color": "#414045",
                  },
                  Object {
                    "borderColor": "#0B171B",
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
                      "color": "#414045",
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
              style={
                Array [
                  Object {
                    "alignItems": "center",
                    "flexDirection": "row",
                    "justifyContent": "center",
                    "width": "24%",
                  },
                  Object {
                    "backgroundColor": "#FFFFFF",
                    "borderBottomWidth": 0,
                    "color": "#414045",
                  },
                  Object {
                    "borderColor": "#0B171B",
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
                      "color": "#414045",
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
              style={
                Array [
                  Object {
                    "alignItems": "center",
                    "flexDirection": "row",
                    "justifyContent": "center",
                    "width": "20%",
                  },
                  Object {
                    "backgroundColor": "#FFFFFF",
                    "borderBottomWidth": 0,
                    "color": "#414045",
                  },
                  Object {
                    "borderColor": "#0B171B",
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
                      "color": "#414045",
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
            isPast={true}
            journey={Array []}
          />
          <JourneyCardList
            journey={Array []}
          />
        </View>
      </View>
    </ScrollView>
  `));

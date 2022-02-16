import React from "react";
import renderer from "react-test-renderer";
import Badges from "../../../src/activity/my-profile/my-profile-activity/badges/Badges";

test("renders correctly", async () =>
    expect(renderer.create(<Badges />).toJSON()).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "paddingHorizontal": 9,
        }
      }
    >
      <View
        accessible={true}
        focusable={false}
        onClick={[Function]}
        onResponderGrant={[Function]}
        onResponderMove={[Function]}
        onResponderRelease={[Function]}
        onResponderTerminate={[Function]}
        onResponderTerminationRequest={[Function]}
        onStartShouldSetResponder={[Function]}
        style={
          Object {
            "backgroundColor": "#FFFFFF",
            "borderColor": "#F8F8F8",
            "borderRadius": 16,
            "borderWidth": 1,
            "elevation": 7,
            "height": 142,
            "left": 0,
            "marginHorizontal": 14,
            "marginVertical": 3,
            "opacity": 1,
            "paddingTop": 10,
            "position": "absolute",
            "top": 0,
            "width": 722,
            "zIndex": 100,
          }
        }
      >
        <View
          style={
            Object {
              "paddingLeft": 17,
              "paddingTop": 5,
            }
          }
        >
          <View
            style={
              Object {
                "flex": 1,
                "flexDirection": "row",
              }
            }
          >
            <View
              style={
                Array [
                  Object {
                    "alignItems": "center",
                    "borderRadius": 1000,
                    "justifyContent": "center",
                  },
                  Object {
                    "backgroundColor": "#0B171B",
                    "height": 56,
                    "marginLeft": 8,
                    "marginTop": 14,
                    "width": 56,
                  },
                ]
              }
            >
              <Text
                style={
                  Array [
                    Object {
                      "fontFamily": "Open Sans Bold",
                      "fontWeight": "700",
                      "textTransform": "uppercase",
                    },
                    Object {
                      "color": "#FFFFFF",
                      "fontSize": 22.4,
                      "lineHeight": 22.4,
                      "paddingTop": 4,
                    },
                  ]
                }
              >
                
              </Text>
            </View>
            <View
              style={
                Object {
                  "marginLeft": 81,
                  "position": "absolute",
                }
              }
            >
              <Text
                style={
                  Array [
                    Object {
                      "fontSize": 18,
                      "fontWeight": "bold",
                      "lineHeight": 21,
                      "marginBottom": 8,
                    },
                    Object {
                      "color": "#0B171B",
                    },
                  ]
                }
              >
                undefined undefined
              </Text>
              <Text
                style={
                  Array [
                    Object {
                      "fontSize": 14,
                      "lineHeight": 14,
                      "marginBottom": 8,
                    },
                    Object {
                      "color": "#414045",
                      "fontWeight": "bold",
                    },
                  ]
                }
              />
              <Text
                style={
                  Array [
                    Object {
                      "fontSize": 14,
                      "lineHeight": 14,
                      "marginBottom": 8,
                    },
                    Object {
                      "color": "#909095",
                    },
                  ]
                }
              />
              <Text
                style={
                  Array [
                    Object {
                      "fontSize": 14,
                      "lineHeight": 14,
                      "marginBottom": 8,
                    },
                    Object {
                      "color": "#909095",
                    },
                  ]
                }
              >
                undefined rides as driver
              </Text>
              <Text
                style={
                  Array [
                    Object {
                      "fontSize": 14,
                      "lineHeight": 14,
                      "marginBottom": 8,
                    },
                    Object {
                      "color": "#909095",
                    },
                  ]
                }
              >
                undefined rides as passanger
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={
          Object {
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "center",
            "left": 8,
            "paddingBottom": 16,
            "paddingTop": 16,
            "right": 8,
            "top": 145,
          }
        }
      >
        <Text
          style={
            Array [
              Object {
                "color": "#0B171B",
                "fontFamily": "Open Sans",
                "fontSize": 16,
                "fontStyle": "normal",
                "fontWeight": "bold",
                "lineHeight": 18,
                "marginBottom": 10,
                "paddingTop": 10,
                "textAlign": "center",
              },
              Object {
                "color": "#0B171B",
              },
            ]
          }
        >
          Passenger
        </Text>
        <RCTScrollView
          activeAnimationOptions={null}
          activeAnimationType="timing"
          activeSlideAlignment="center"
          activeSlideOffset={20}
          apparitionDelay={0}
          automaticallyAdjustContentInsets={false}
          autoplay={false}
          autoplayDelay={1000}
          autoplayInterval={3000}
          callbackOffsetMargin={5}
          containerCustomStyle={Object {}}
          contentContainerCustomStyle={Object {}}
          contentContainerStyle={
            Array [
              Object {
                "paddingLeft": 160,
                "paddingRight": 160,
              },
              Object {},
            ]
          }
          data={Array []}
          decelerationRate={0.9}
          directionalLockEnabled={true}
          disableVirtualization={false}
          enableMomentum={true}
          enableSnap={true}
          firstItem={0}
          forwardedRef={[Function]}
          getItem={[Function]}
          getItemCount={[Function]}
          hasParallaxImages={false}
          horizontal={true}
          inactiveSlideOpacity={0.6}
          inactiveSlideScale={0.7}
          inactiveSlideShift={0}
          initialNumToRender={10}
          invertStickyHeaders={false}
          inverted={false}
          itemWidth={80}
          keyExtractor={[Function]}
          layout="default"
          lockScrollTimeoutDuration={1000}
          lockScrollWhileSnapping={false}
          loop={true}
          loopClonesPerSide={8}
          maxToRenderPerBatch={100}
          onContentSizeChange={[Function]}
          onEndReachedThreshold={2}
          onLayout={[Function]}
          onMomentumScrollEnd={[Function]}
          onResponderRelease={[Function]}
          onScroll={[Function]}
          onScrollBeginDrag={[Function]}
          onScrollEndDrag={[Function]}
          onStartShouldSetResponderCapture={[Function]}
          onTouchEnd={[Function]}
          onTouchStart={[Function]}
          overScrollMode="never"
          pinchGestureEnabled={false}
          removeClippedSubviews={true}
          renderItem={[Function]}
          scrollEnabled={true}
          scrollEventThrottle={1}
          scrollsToTop={false}
          shouldOptimizeUpdates={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          slideStyle={Object {}}
          sliderWidth={400}
          snapToInterval={80}
          stickyHeaderIndices={Array []}
          style={
            Object {
              "flexDirection": "row",
              "opacity": 0,
              "width": 400,
            }
          }
          swipeThreshold={20}
          updateCellsBatchingPeriod={50}
          useScrollView={false}
          vertical={false}
          viewabilityConfigCallbackPairs={Array []}
          windowSize={16}
        >
          <View />
        </RCTScrollView>
        <Text
          style={
            Array [
              Object {
                "color": "#0B171B",
                "fontFamily": "Open Sans",
                "fontSize": 16,
                "fontStyle": "normal",
                "fontWeight": "bold",
                "lineHeight": 18,
                "marginBottom": 10,
                "paddingTop": 10,
                "textAlign": "center",
              },
              Object {
                "color": "#0B171B",
              },
            ]
          }
        >
          Driver
        </Text>
        <RCTScrollView
          activeAnimationOptions={null}
          activeAnimationType="timing"
          activeSlideAlignment="center"
          activeSlideOffset={20}
          apparitionDelay={0}
          automaticallyAdjustContentInsets={false}
          autoplay={false}
          autoplayDelay={1000}
          autoplayInterval={3000}
          callbackOffsetMargin={5}
          containerCustomStyle={Object {}}
          contentContainerCustomStyle={Object {}}
          contentContainerStyle={
            Array [
              Object {
                "paddingLeft": 160,
                "paddingRight": 160,
              },
              Object {},
            ]
          }
          data={Array []}
          decelerationRate={0.9}
          directionalLockEnabled={true}
          disableVirtualization={false}
          enableMomentum={true}
          enableSnap={true}
          firstItem={0}
          forwardedRef={[Function]}
          getItem={[Function]}
          getItemCount={[Function]}
          hasParallaxImages={false}
          horizontal={true}
          inactiveSlideOpacity={0.6}
          inactiveSlideScale={0.7}
          inactiveSlideShift={0}
          initialNumToRender={10}
          invertStickyHeaders={false}
          inverted={false}
          itemWidth={80}
          keyExtractor={[Function]}
          layout="default"
          lockScrollTimeoutDuration={1000}
          lockScrollWhileSnapping={false}
          loop={true}
          loopClonesPerSide={8}
          maxToRenderPerBatch={100}
          onContentSizeChange={[Function]}
          onEndReachedThreshold={2}
          onLayout={[Function]}
          onMomentumScrollEnd={[Function]}
          onResponderRelease={[Function]}
          onScroll={[Function]}
          onScrollBeginDrag={[Function]}
          onScrollEndDrag={[Function]}
          onStartShouldSetResponderCapture={[Function]}
          onTouchEnd={[Function]}
          onTouchStart={[Function]}
          overScrollMode="never"
          pinchGestureEnabled={false}
          removeClippedSubviews={true}
          renderItem={[Function]}
          scrollEnabled={true}
          scrollEventThrottle={1}
          scrollsToTop={false}
          shouldOptimizeUpdates={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          slideStyle={Object {}}
          sliderWidth={400}
          snapToInterval={80}
          stickyHeaderIndices={Array []}
          style={
            Object {
              "flexDirection": "row",
              "opacity": 0,
              "width": 400,
            }
          }
          swipeThreshold={20}
          updateCellsBatchingPeriod={50}
          useScrollView={false}
          vertical={false}
          viewabilityConfigCallbackPairs={Array []}
          windowSize={16}
        >
          <View />
        </RCTScrollView>
        <RCTScrollView
          activeAnimationOptions={null}
          activeAnimationType="timing"
          activeSlideAlignment="center"
          activeSlideOffset={20}
          apparitionDelay={0}
          automaticallyAdjustContentInsets={false}
          autoplay={false}
          autoplayDelay={1000}
          autoplayInterval={3000}
          callbackOffsetMargin={5}
          containerCustomStyle={Object {}}
          contentContainerCustomStyle={Object {}}
          contentContainerStyle={
            Array [
              Object {
                "paddingLeft": 160,
                "paddingRight": 160,
              },
              Object {},
            ]
          }
          data={Array []}
          decelerationRate={0.9}
          directionalLockEnabled={true}
          disableVirtualization={false}
          enableMomentum={true}
          enableSnap={true}
          firstItem={0}
          forwardedRef={[Function]}
          getItem={[Function]}
          getItemCount={[Function]}
          hasParallaxImages={false}
          horizontal={true}
          inactiveSlideOpacity={0.6}
          inactiveSlideScale={0.7}
          inactiveSlideShift={0}
          initialNumToRender={10}
          invertStickyHeaders={false}
          inverted={false}
          itemWidth={80}
          keyExtractor={[Function]}
          layout="default"
          lockScrollTimeoutDuration={1000}
          lockScrollWhileSnapping={false}
          loop={true}
          loopClonesPerSide={8}
          maxToRenderPerBatch={100}
          onContentSizeChange={[Function]}
          onEndReachedThreshold={2}
          onLayout={[Function]}
          onMomentumScrollEnd={[Function]}
          onResponderRelease={[Function]}
          onScroll={[Function]}
          onScrollBeginDrag={[Function]}
          onScrollEndDrag={[Function]}
          onStartShouldSetResponderCapture={[Function]}
          onTouchEnd={[Function]}
          onTouchStart={[Function]}
          overScrollMode="never"
          pinchGestureEnabled={false}
          removeClippedSubviews={true}
          renderItem={[Function]}
          scrollEnabled={true}
          scrollEventThrottle={1}
          scrollsToTop={false}
          shouldOptimizeUpdates={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          slideStyle={Object {}}
          sliderWidth={400}
          snapToInterval={80}
          stickyHeaderIndices={Array []}
          style={
            Object {
              "flexDirection": "row",
              "opacity": 0,
              "width": 400,
            }
          }
          swipeThreshold={20}
          updateCellsBatchingPeriod={50}
          useScrollView={false}
          vertical={false}
          viewabilityConfigCallbackPairs={Array []}
          windowSize={16}
        >
          <View />
        </RCTScrollView>
      </View>
    </View>
  `));

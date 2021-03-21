import React from "react";
import shallowRender from "react-test-renderer/shallow";
import CarTextInput from "../../src/components/car-text-input/CarTextInput";

const renderer = shallowRender.createRenderer();

jest.mock("react-native-gesture-handler", () => require("react-native"));
jest.useFakeTimers();

test("renders correctly", () =>
    expect(renderer.render(<CarTextInput />)).toMatchInlineSnapshot(`
    <Controller
      control={
        Object {
          "defaultValuesRef": Object {
            "current": Object {},
          },
          "fieldArrayDefaultValuesRef": Object {
            "current": Object {},
          },
          "fieldArrayNamesRef": Object {
            "current": Set {},
          },
          "fieldArrayValuesRef": Object {
            "current": Object {},
          },
          "fieldsRef": Object {
            "current": Object {},
          },
          "fieldsWithValidationRef": Object {
            "current": Object {},
          },
          "formState": Object {
            "dirtyFields": Object {},
            "errors": Object {},
            "isDirty": false,
            "isSubmitSuccessful": false,
            "isSubmitted": false,
            "isSubmitting": false,
            "isValid": false,
            "isValidating": false,
            "submitCount": 0,
            "touched": Object {},
          },
          "formStateRef": Object {
            "current": Object {
              "dirtyFields": Object {},
              "errors": Object {},
              "isDirty": false,
              "isSubmitSuccessful": false,
              "isSubmitted": false,
              "isSubmitting": false,
              "isValid": false,
              "isValidating": false,
              "submitCount": 0,
              "touched": Object {},
            },
          },
          "getValues": [Function],
          "isFormDirty": [Function],
          "mode": Object {
            "isOnAll": false,
            "isOnBlur": false,
            "isOnChange": false,
            "isOnSubmit": true,
            "isOnTouch": false,
          },
          "reValidateMode": Object {
            "isReValidateOnBlur": false,
            "isReValidateOnChange": true,
          },
          "readFormStateRef": Object {
            "current": Object {
              "constructor": true,
              "dirtyFields": true,
              "errors": true,
              "isDirty": true,
              "isSubmitSuccessful": true,
              "isSubmitted": true,
              "isSubmitting": true,
              "isValid": true,
              "isValidating": true,
              "submitCount": true,
              "touched": true,
            },
          },
          "register": [Function],
          "removeFieldEventListener": [Function],
          "resetFieldArrayFunctionRef": Object {
            "current": Object {},
          },
          "setValue": [Function],
          "shallowFieldsStateRef": Object {
            "current": Object {},
          },
          "shouldUnregister": true,
          "trigger": [Function],
          "unregister": [Function],
          "updateFormState": [Function],
          "updateWatchedValue": [Function],
          "useWatchFieldsRef": Object {
            "current": Object {},
          },
          "useWatchRenderFunctionsRef": Object {
            "current": Object {},
          },
          "validFieldsRef": Object {
            "current": Object {},
          },
          "validateResolver": undefined,
          "watchInternal": [Function],
        }
      }
      defaultValue=""
      name="name"
      render={[Function]}
    />
  `));

import { ApplicationInsights } from "@microsoft/applicationinsights-web";
import { ReactNativePlugin } from "@microsoft/applicationinsights-react-native";
import CredentialsManager from "../../../credentials/credentials.json";

const RNPlugin = new ReactNativePlugin();
const appInsights = new ApplicationInsights({
    config: {
        instrumentationKey: CredentialsManager.azureApplicationInsights,
        extensions: [RNPlugin],
    }
});

appInsights.loadAppInsights();

export default appInsights;
import { type Details } from 'express-useragent';
import { type DeviceSummary } from '../interfaces/Device';

const summarizeAndStoreDeviceInfo = (details: Details | undefined): DeviceSummary => {
    let deviceType = 'Desktop';
    let operatingSystem = 'Unknown';

    if (details === undefined) {
        return {
            deviceType,
            operatingSystem
        };
    }

    if (details.isMobile) deviceType = 'Mobile';
    else if (details.isTablet) deviceType = 'Tablet';
    else if (details.isBot) deviceType = 'Bot';

    if (details.isWindows) operatingSystem = 'Windows';
    else if (details.isMac) operatingSystem = 'Mac';
    else if (details.isLinux) operatingSystem = 'Linux';
    else if (details.isAndroid) operatingSystem = 'Android';
    else if (details.isiPhone || details.isiPad) operatingSystem = 'iOS';

    return { deviceType, operatingSystem };
};

export default summarizeAndStoreDeviceInfo;

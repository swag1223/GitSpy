import interBold from "@assets/fonts/Inter/Inter-Bold.woff";
import interMedium from "@assets/fonts/Inter/Inter-Medium.woff";
import interRegular from "@assets/fonts/Inter/Inter-Regular.woff";
import interSemibold from "@assets/fonts/Inter/Inter-SemiBold.woff";

const fonts = `
  @font-face {
    font-family: 'Inter';
    font-weight: 700;
    font-display: swap;
    src: url(${interBold}) format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-weight: 600;
    font-display: swap;
    src: url(${interSemibold}) format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-weight: 500;
    font-display: swap;
    src: url(${interMedium}) format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-weight: 400;
    font-display: swap;
    src: url(${interRegular}) format("woff");
  }`;

export default fonts;

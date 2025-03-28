import enableMocking from "./msw/enableMocking";

enableMocking().then(() => import("./index"));

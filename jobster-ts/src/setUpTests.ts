
import "@testing-library/jest-dom";
import { server } from "./mocks/server";
import * as ResizeObserverModule from "resize-observer-polyfill";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

(global as any).ResizeObserver = ResizeObserverModule.default;

import { mount } from "auth/auth";
import mountMS from "./common";
import { CAuth } from "../routing/constants";

export default () => mountMS(mount, CAuth);
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import axios from "axios";
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

// Set config defaults when creating the instance
const axiosInstance = axios.create();

// Alter defaults after instance has been created
axiosInstance.defaults.headers.common["X-CSRF-Token"] = document.querySelector("[name=csrf-token]").content;
axiosInstance.defaults.headers.common["Content-type"] = "application/json";

window.axios = axios;
window.axiosAPI = axiosInstance;

// Support component names relative to this directory:
var componentRequireContext = require.context("components", true);
var ReactRailsUJS = require("react_ujs");
ReactRailsUJS.useContext(componentRequireContext);
